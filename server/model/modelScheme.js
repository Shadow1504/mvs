const mongoose=require("mongoose");
const tSch=new mongoose.Schema({
    name : {
        type : String,
        required: true
        },
   
})

const Ts=mongoose.model('Ts',tSch);
module.exports = Ts;
// const testTs=new Ts({
//     name:'only two node',
//     email:"two"
// });
// testTs.save().then(doc=>{
//     console.log(doc);
// })