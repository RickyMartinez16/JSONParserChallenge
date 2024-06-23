const fs = require('fs');
const { exec } = require('child_process');

const testFiles = [
  { file: 'tests/test-suite/valid1.json', expectedExitCode: 0 },
  { file: 'tests/test-suite/valid2.json', expectedExitCode: 0 },
  { file: 'tests/test-suite/invalid1.json', expectedExitCode: 1 },
  { file: 'tests/test-suite/invalid2.json', expectedExitCode: 1 },
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
