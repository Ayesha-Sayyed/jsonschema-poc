const Validator = require('jsonschema').Validator;
const v = new Validator();


// nested object Example
// Address, to be embedded on Person
let addressSchema = {
    "id": "/SimpleAddress",
    "type": "object",
    "properties": {
      "lines": {
        "type": "array",
        "items": {"type": "string"}
      },
      "zip": {"type": "string"},
      "city": {"type": "string"},
      "country": {"type": "string"}
    },
    "required": ["country"]
  };
  
  // Person
  let schema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "address": {"$ref": "/SimpleAddress"},
      "votes": {"type": "integer", "minimum": 1}
    }
  };
  
  let p = {
    "name": "Barack Obama",
    "address": {
      "lines": [ "1600 Pennsylvania Avenue Northwest" ],
      "zip": "DC 20500",
      "city": "Washington",
      "country": "USA"
    },
    "votes": "lot"
  };
  
  v.addSchema(addressSchema, '/SimpleAddress');
  // console.log(v.validate(p, schema));
  let res = v.validate(p, schema)