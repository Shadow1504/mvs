


$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3002/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){

    $ondelete = $(" a.delete");
    $ondelete.click(function(){
       
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3002/api/users/${id}`,
            "method" : "DELETE"
        }
         $.ajax(request).done(function(response){
                location.reload();
            })
        

    })
}