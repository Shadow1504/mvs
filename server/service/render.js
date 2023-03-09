const axios = require('axios');

exports.indRoutes=(req,res)=>
{
    axios.get('http://localhost:10000/api/users')
    
    .then(function(response){
        console.log(response);
        res.render('index', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}
// exports.getting=(req,res)=>
// {
//     axios.get('http://localhost:3002/api/users', { params : { id: req.query.name }})
    
//     .then(function(response){
//         console.log(response);
//         res.render('index', { users : userdata.data });
//     })
//     .catch(err =>{
//         res.send(err);
//     })
// }
exports.update=(req,res)=>
{
    axios.get('http://localhost:10000/api/users', { params : { id: req.query.id }})
    .then(function(userdata){
    res.render("update", { user: userdata.data})
    })
    .catch(err =>{
    res.send(err);
    })
}

exports.newRoutes=(req,res)=>
{
    res.render('new',{title:"New web page"});
}

   
 