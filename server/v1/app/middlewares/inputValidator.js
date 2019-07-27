import Schema from './schema';
import validate from '../helpers/validate';

/**
 * @class InputValidator
 * @description Validates all user inputs
 * @exports InputValidator
 */
class InputValidator {
    /**
      * @method validateUser
      * @description Validates the user object passed in from the request body
      * @param {object} req - The Request Object
      * @param {object} res - The Response Object
      * @param {function} next - The next function to point to the next middleware
      * @returns {function} next() - The next function
      */
    static validateUser(req, res, next) {
      const user = { ...req.body };
      return validate(user, Schema.createUserSchema(), req, res, next);
    } 
    
  }  

export default InputValidator;
