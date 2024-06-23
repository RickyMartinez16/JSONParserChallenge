const fs = require('fs'); //allows you to interact with the file system

//helper fucntion to check if each value is a valid string, number, bool or null. also checks if arrays have valid values and objects recursively validates object strcutre
function isValidValue(value) {
    if (typeof value === 'string' || 
        typeof value === 'number' || 
        typeof value === 'boolean' || 
        value === null) {
        return true;
    } else if (Array.isArray(value)) {
        return value.every(isValidValue);
    } else if (typeof value === 'object') {
        return validateSimpleJSONObject(value);
    }
    return false;
}

function validateSimpleJSONObject(jsonObject) {
    //check if the jsonObject is not an object, or null or an array
    if (typeof jsonObject !== 'object' || jsonObject === null || Array.isArray(jsonObject)) {
        return false;
    }
    for (const key in jsonObject) {
        //if the type of each key in the jsonObject is not a string or the value for each key is not a valid value return false
        if (typeof key !== 'string' || !isValidValue(jsonObject[key])) {
            return false;
        }
    }
    return true;
}

function validateJSON(inputString) {
    try {
        const jsonObject = JSON.parse(inputString); //parse input into a javascript obect
        if (validateSimpleJSONObject(jsonObject) || Array.isArray(jsonObject))  { //if valid json obejct and not null print success
            console.log("Valid JSON object or array.");
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

const inputFile = process.argv[2]; //gets the input file from the comand life args array (process.argv)

fs.readFile(inputFile, 'utf8', (err, data) => { //reads the file
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    } else {
        validateJSON(data);
    }
});
