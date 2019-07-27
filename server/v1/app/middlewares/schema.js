import Joi from '@hapi/joi';

/**
 * @class Schema
 * @description Validates user input.
 * @exports Schema
 */
class Schema {
    /**
    * @method createUserSchema
    * @description Validates the user object from a post request
    * @param {object} user - The user object to be validated
    * @returns {object} An object specifying weather the input was valid or not.
    */
    static createUserSchema() {
      const schema = {
        firstName: Joi.string().lowercase().trim().required()
          .regex(/^[a-zA-Z]+$/)
          .error((errors) => {
            errors.forEach((err) => {
              switch (err.type) {
                case 'string.regex.base':
                  err.message = 'firstName can only contain letters';
                  break;
                default:
                  break;
              }
            });
            return errors;
          }),
        lastName: Joi.string().lowercase().trim().required()
          .regex(/^[a-zA-Z]+$/)
          .error((errors) => {
            errors.forEach((err) => {
              switch (err.type) {
                case 'string.regex.base':
                  err.message = 'lastName can only contain letters';
                  break;
                default:
                  break;
              }
            });
            return errors;
          }),
        email: Joi.string().trim().lowercase().email({ minDomainSegments: 2 })
          .required(),
        password: Joi.string().min(8).required(),
      };
      return schema;
    }
}
  
export default Schema;
  