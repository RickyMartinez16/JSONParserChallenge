const fs = require('fs');

function validateJSON(inputString) {
    try {
        const jsonObject = JSON.parse(inputString);
        if (typeof jsonObject === 'object' && jsonObject !== null) {
            console.log("Valid JSON object.");
            process.exit(0);
        } else {
            console.log("Invalid JSON object: Not a JSON object.");
            process.exit(1);
        }
    } catch (error) {
        console.log("Invalid JSON object: JSONDecodeError.");
        process.exit(1);
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: node validate_json.js <input_file>");
    process.exit(1);
}

const inputFile = process.argv[2];

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    } else {
        validateJSON(data);
    }
});
