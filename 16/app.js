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