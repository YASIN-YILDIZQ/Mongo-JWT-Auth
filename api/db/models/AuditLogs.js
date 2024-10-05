const  mongoose=require('mongoose')
const schema=mongoose.Schema({
 level:{type:String},
 email:{type:String,required:true},
 location:{type:String},
 proe_type:{type:String},
 log:{type:String},
 



},{versionKey:false,timestamps:{createdAt:'created_at',updatedAt:'updated_at'}})
class AuditLogs extends mongoose.Model{

}
schema.loadClass(AuditLogs);
module.exports=mongoose.model('auditlogs',schema)