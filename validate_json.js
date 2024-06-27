const fs = require('fs'); //allows you to interact with the file system

function validateJSON(inputString) {
    try {
        const jsonObject = JSON.parse(inputString); //parse string into a javascript obect
        if (typeof jsonObject === 'object' && jsonObject !== null) { //if valid json obejct and not null print success
            console.log("Valid JSON object.");
            process.exit(0);
        } else { //if not valid json object or null print fail
            console.log("Invalid JSON object: Not a JSON object.");
            process.exit(1);
        }
    } catch (error) { //if not valid json and cannot parse
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
