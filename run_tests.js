const fs = require('fs');
const { exec } = require('child_process');

const testFiles = [
  { file: 'tests/test-suite/pass1.json', expectedExitCode: 0 },
  { file: 'tests/test-suite/pass2.json', expectedExitCode: 0 },
  { file: 'tests/test-suite/pass3.json', expectedExitCode: 0 },
  { file: 'tests/test-suite/fail1.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail2.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail3.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail4.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail5.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail6.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail7.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail8.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail9.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail10.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail11.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail12.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail13.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail14.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail15.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail16.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail17.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail18.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail19.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail20.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail21.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail22.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail23.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail24.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail25.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail26.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail27.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail28.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail29.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail30.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail31.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail32.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/fail33.json', expectedExitCode: 1 },
];

testFiles.forEach(test => {
  exec(`node validate_json.js ${test.file}`, (error, stdout, stderr) => {
    const exitCode = error ? error.code : 0;
    console.log(`Running test on ${test.file}`);
    console.log(`Expected exit code: ${test.expectedExitCode}, Actual exit code: ${exitCode}`);
    if (exitCode === test.expectedExitCode) {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    console.log('Output:', stdout.trim());
    console.log('Error:', stderr.trim());
    console.log('-------------------------');
  });
});
