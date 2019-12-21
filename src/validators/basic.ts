import Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
class basicSchema{
    public userAddSchema;
    public updateSchema;
    public findSchema;
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
        this.updateSchema = Joi.object().keys({
            id: Joi.objectId(),
            firstname: Joi.string(),
            lastname: Joi.string(),
            phone: [
                Joi.string().regex(/^\d+$/).min(10).max(13),
                Joi.string().allow('').valid('')
            ],
            email: [
                Joi.string().email(),
                Joi.string().allow('').valid('')
            ]
        });
        this.findSchema = Joi.object().keys({
            id: Joi.objectId()
        })
    }
}


export default new basicSchema();