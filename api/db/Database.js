const  mongoose=require('mongoose')
require('dotenv').config();

let instance=null;
class Database{
    constructor(){
        if(!instance){this.mongooseConnection=null;instance=this}
        return instance;
    }
    async connect(options){
      try {
        console.log('DB Connection ...')

        let  db=await mongoose.connect(options.CONNECTION_STRING);
        this.mongooseConnection=db;
        console.log('DB Connection Succesfully')
      } catch (error) {
        console.error(error)
        process.exit(1)
      }
    }

}

module.exports=Database;