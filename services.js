const _getUsers = (page) => 
    new Promise((resolve, reject) =>{
        $.ajax({
            type: "GET",
            url: `https://reqres.in/api/users?page=${page}`,
            success: function (response) {
                resolve(response.data);
            }
        });
    });
