export default class Parser{
    static parseAddUserObject(userObject,requestData){
        userObject.userName=requestData.userName;
        userObject.email=requestData.email;
        userObject.password=requestData.password;
        return userObject;
    }
}