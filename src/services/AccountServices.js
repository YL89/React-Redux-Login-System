const AccountServices = {
    registerUser: function(newUser){
        localStorage.setItem("user", JSON.stringify(newUser));
        return true;
    },

    signIn: function(currentUser){
        let user = JSON.parse(localStorage.getItem("user"));
        if(user && currentUser && currentUser.email === user.email && currentUser.password === user.password){
            return user;
        }
        else{
            return false;
        }
    }
}

export default AccountServices;