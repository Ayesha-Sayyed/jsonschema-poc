const { validate } = require('jsonschema');

const Validator = require('jsonschema').Validator;
const v = new Validator();

//array of object list example
// in this exmple array of object is being validated along with required fields nd type specified
const arraySchema = {
    "type": "array",
    "items": {
        "properties": {
            "name": { "type": "string" },
            "lastname": { "type": "string" }
        },
        "required": ["name", "lastname"]
    }
}
let instance = [{ name: 'john', lastname: 'cen' }, { name: 'harry', lastname: 'porter' }]
// console.log(v.validate(instance, arraySchema));

let res = v.validate(instance, arraySchema)
console.log(res.valid, res.errors);

