const fs = require('fs'); //allows you to interact with the file system


function isString(value) { //checks if value is a string
    return typeof value === 'string' || value instanceof String;
}

function validateSimpleJSONObject(jsonObject) {
    //check if the jsonObject is not an object, or null or an array
    if (typeof jsonObject !== 'object' || jsonObject === null || Array.isArray(jsonObject)) {
        return false;
    }
    for (const key in jsonObject) {
        //check if the type of each key is not a string and each value is not a string
        if (typeof key !== 'string' || !isString(jsonObject[key])) {
            return false;
        }
    }
    return true;
}

function validateJSON(inputString) {
    try {
        const jsonObject = JSON.parse(inputString); //parse input into a javascript obect
        if (validateSimpleJSONObject(jsonObject)) { //if valid json obejct and not null print success
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

if (process.argv.length !== 3) { //makes sure the command line args are run correctly
    console.log("Usage: node validate_json.js <input_file>");
    process.exit(1);
}

const inputFile = process.argv[2]; //gets the input file from the array (process.argv)

fs.readFile(inputFile, 'utf8', (err, data) => { //reads the file
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    } else {
        validateJSON(data);
    }
});
