

const validateInput = (schema, property) => { 
    return (req, res, next) => { 
        console.log(req.body);
      const { error } = schema.validate(req[property]); 
      const valid = error == null; 
  
      if (valid) { 
        next(); 
      } else { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
  
        throw new Error(message)
    } 
  }}
  
  module.exports = validateInput; 