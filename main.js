_getUsers(1).then((usersList1) => {
    _getUsers(2).then((usersList2) => {
        let allUser = [...usersList1, ...usersList2];
        console.log(allUser);
        allUser.map((user) => {
            createBox({
                firstName: user.last_name,
                lastName: user.lastName,
                emial: user.email,
                avatar: user.avatar
            });
        });
    });
});
