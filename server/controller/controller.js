var Ts =require("../model/modelScheme")

exports.create= (req,res)=>{
  const testTs=new Ts({
    name : req.body.name
});
testTs.save().then(doc=>{
    console.log("ddd",doc);
// res.send(doc);
res.redirect("/");
})
    }

exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;

        Ts.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message :"not found"})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message :"not found"})
            }) 

    }else{
        Ts.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }




}



exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "not foundfghj"})
    }

    const id = req.params.id;
    Ts.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })

}

exports.delete = (req, res)=>{

    const id = req.params.id;

    Ts.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}