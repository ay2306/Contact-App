import * as basic from '../controllers/basic'
import basicValidator from '../validators/basicValidator'
export class basicRoutes{
    public basicController;
    constructor(){
        this.basicController = new basic.basicController();
    }
    public routes(app){
        app.route('/').get(this.basicController.welcome);
        app.route('/contact').get(this.basicController.retrieveContactList);
        app.route('/contact').post(basicValidator.userAddValidator,this.basicController.addContact);
        app.route('/contact/:id').patch(this.basicController.updateContact);
        app.route('/contact/:id').delete(this.basicController.deleteContact);
    }
}