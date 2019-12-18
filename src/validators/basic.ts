import Joi = require('@hapi/joi');

class basicSchema{
    public userAddSchema;
    constructor(){
        this.initiate();
    }
    public initiate(): void{
        this.userAddSchema = Joi.object().keys({
           firstname: Joi.string().required(),
           lastname: Joi.string().required(),
           phone: [
               Joi.string().regex(/^\d+$/).min(10).max(13),
               Joi.string().allow('').valid('')
           ],
           email: [
               Joi.string().email(),
               Joi.string().allow('').valid('')
           ]
       });
    }
}


export default new basicSchema();