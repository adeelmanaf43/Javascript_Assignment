var guests = ["Ushna", "Nawaz", "Nasreen"];
for(i = 0; i < guests.length; i++){
    console.log("Hye", guests[i], "I would like to invite you for a dinner");
}

console.log("I found a bigger dinner table");
guests.unshift("Zia");
guests.splice(2,0, "Dani");
guests.push("Raza");

for(i = 0; i < guests.length; i++){
    console.log("Hye", guests[i], "I would like to invite you for a dinner");
}

console.log("I am sorry, I can invite only two people for dinner");
while(guests.length != 2){
    console.log("Hey "+ guests.pop()+ " I am sorry, I can't invite you to dinner");
};

for(i = 0; i < guests.length; i++){
    console.log("Hye", guests[i], "I would like to invite you for a dinner");
}

guests.pop();
guests.pop();

console.log(guests);

