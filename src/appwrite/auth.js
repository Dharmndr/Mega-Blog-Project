import conf from '../conf/conf.js'
import {Client,Account,ID} from "appwrite"

export class AuthService{ 
    client = new Client();
    account;

    constructor(){ 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId); 
        this.account =  new Account(this.client) 
    } 
    
      // To register a new user  OR to create a account
   
    async createAccount({email,password,name}){
    try{
       const userAccount = await this.account.create(ID.unique(),email,password,name);
       if(userAccount){
           return this.login({email,password});          
       } else{
        return userAccount;
       }
    } catch(error){
        throw error;
    } 
}

  async login({email,password}){
    try{
      
     return await this.account.createEmailPasswordSession(email,password);
     
    } 
    catch(error){
      
        throw error; 
    }
  } 
  
// Check user logged in or not 

  async getCurrentUser(){
    try{
       return await this.account.get();
    }
    catch(error){
      console.log("Appwrite service :: getCurrentUser :: error", error.message);
      throw error;
    }
    return null; 
  }

   /**
     * Logout user and delete all active sessions
     */
async logout(){
    try{
       await this.account.deleteSessions();
    }
    catch(error){
        console.log("Appwrite serive :: logout :: error", error)
    }
}


}




const authService = new AuthService();
export default authService;