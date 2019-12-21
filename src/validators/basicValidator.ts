import basicSchema from './basic';

class validation{
    constructor(){}
    public userAddValidator = (req,res,next)=>{
        const {error} = basicSchema.userAddSchema.validate(req.body);
        if(error){
            return res.status(500).json({error: error.details[0].message});
        }
        next();
    }
    public updateValidator = (req,res,next)=>{
        const {error} = basicSchema.updateSchema.validate(req.body);
        if(error){
            return res.status(500).json({error: error.details[0].message});
        }
        next();
    }
    public findValidator = (req,res,next)=>{
        const {error} = basicSchema.findSchema.validate(req.params);
        if(error){
            return res.status(500).json({error: error.details[0].message});
        }
        next();
    }
}

export default new validation();