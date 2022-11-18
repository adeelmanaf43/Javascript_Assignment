var guests = ["Ushna", "Ali", "Nasreen"];

for(i = 0; i < guests.length; i++){
    console.log("Hye", guests[i], "I would like to invite you for a dinner");
};

console.log(guests[1], "can't make it to the dinner");
guests[1] = "Nawaz";
for(i = 0; i < guests.length; i++){
    console.log("Hye", guests[i], "I would like to invite you for a dinner");
};