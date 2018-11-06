#! /usr/bin/env node

const { exec, spawnSync } = require('child_process');
const { chain, filter, map } = require('lodash');

function checkValidCommit(cb) {
  exec('git rev-list --merges HEAD^..HEAD', (_, out) => {
    if (out !== '') {
      const actualStatus = 0; // done status
      console.log('In order to ignore merge commit, exiting with status: ' + actualStatus);
      process.exit(actualStatus);
    } else {
      exec("git log -1 --pretty=format:'%an'", (_, out) => {
        if (out === 'Jean Benitez' && false) { // temporal code
          const actualStatus = 0; // done status
          console.log('In order to ignore repo owner commit, exiting with status: ' + actualStatus);
          process.exit(actualStatus);
        } else {
          cb();
        }
      });
    }
  });
}

function seeChangedFiles(cb) {
  exec('git diff --name-status master', (err, out) => {
    const files = chain(out)
      .split('\n')
      .filter()
      .map(s => s.split('\t'))
      .map(([status, filename]) => ({
        filename,
        isAdded: status === 'A',
        isModified: status === 'M',
        isTest: filename.indexOf('.test.js') !== -1,
      }))
      .filter(({ filename }) => filename.startsWith('src/'))
      .value();

    cb(files);
  });
}

function runCommand(command, argv) {
  const { status } = spawnSync(command, argv, { stdio: 'inherit' });
  return status;
}

checkValidCommit(() => seeChangedFiles(files => {
  const modifiedImplems = filter(files, { isModified: true, isTest: false });
  const addedImplems = filter(files, { isAdded: true, isTest: false });
  const addedTests = filter(files, { isAdded: true, isTest: true });

  let shoudExitWithFailure = false;

  // Not enough changes in this PR...
  if (
    modifiedImplems.length !== 1 ||
    addedImplems.length !== 1 ||
    addedTests.length !== 1
  ) {
    console.error(`\
###################################
##             ERROR             ##
###################################

Para que el PR sea considerado válido, debe cumplir al menos estos tres criterios:
- Un archivo modificado, que contenga la implementación del desafío que tomaste.
- Un nuevo archivo con los test cases del desafio que vas a proponer.
- Un archivo vacío donde alguien va a implementar el desafío que vas a proponer.

Tu solo tienes:
- ${modifiedImplems.length} archivos modificados (debe ser solo 1)
- ${addedImplems.length} archivos de implementacion (debe ser solo 1)
- ${addedTests.length} archivos de test (debe ser solo 1)
`);

    process.exit(1);
    return;
  }

  // More changes than necessary
  if (files.length !== 3) {
    // Even though the tests might not fail, we want to indicate to the
    // user that something's wrong
    shoudExitWithFailure = true;

    console.error(`\
###################################
##           WARNING             ##
###################################

Parece que has cambiado más de 3 archivos en este PR.
Comprueba que no hayas agregado archivos irrelevantes.
Por ejemplo, cualquier archivo generado por tu IDE, o por una herramienta de compilación que utilices.
Por otro lado, si estás arreglando un test case mal hecho, está bien, pero deja el comentario para saber.

Estos son los archivos que modificaste:
${files
      .map(f => `- ${f.filename} ${f.isAdded ? '(NUEVO)' : '(MODIFICADO)'}`)
      .join('\n')}
`);
  }

  // Find the file to test
  const testFileToRun = modifiedImplems[0].filename.replace('.', '.test.');

  // Launch the linter
  console.log(`\
###################################
##            LINTING            ##
###################################

Corriendo comando: "eslint ${map(files, 'filename').join(' ')}"
`);
  const lintStatus = runCommand('node_modules/.bin/eslint', map(files, 'filename'));

  // Launch the tests
  console.log(`\
###################################
##             TESTS             ##
###################################

Corriendo comando: "jest ${testFileToRun}"
`);
  const testStatus = runCommand('node_modules/.bin/jest', [testFileToRun]);

  // Exit with the same status as the tests
  const actualStatus = shoudExitWithFailure ? 1 : lintStatus || testStatus;
  console.log('Exiting with status: ' + actualStatus);
  process.exit(actualStatus);
}));
