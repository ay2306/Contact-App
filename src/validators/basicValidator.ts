import basicSchema from './basic';

class validation{
    constructor(){}
    public userAddValidator = (req,res,next)=>{
        const {error} = basicSchema.userAddSchema.validate(req.body);
        if(error){
            console.log(error);
            return res.status(500).json({error: error.details[0].message});
        }
        next();
    }
}

export default new validation();