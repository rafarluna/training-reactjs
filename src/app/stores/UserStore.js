import User from '../models/User'

export default class UserStore {
    
    constructor() {
        
    }

    getUsers() {
    };

    create(e) {
        var user = new User();
        user.birthDate = e.target
    };

    delete() {

    };
}