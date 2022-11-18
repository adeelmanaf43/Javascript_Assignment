let current_users = ["adeel", "ali", "adil", "asif", "zia"];
let new_users = ["zakir", "asif", "nasir", "yasir", "ali"];

for(let i = 0; i < new_users.length; i++){
    if(current_users.includes(new_users[i])){
        console.log("You need to enter a new username");
    }
    else{
        console.log("The new username is available");
    }
}
