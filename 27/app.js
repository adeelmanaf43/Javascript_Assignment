let colors = ["green", "yellow", "red"]
for(let i = 0; i < 3; i++ ){
    let alien_color = colors[i];
    if(alien_color === "green"){
        console.log("The player earned 5 points");
    }
    else if (alien_color == "yellow"){
    console.log("The player earned 10 points");
    }
    
    else if(alien_color === "red"){
        console.log("The player earned 15 points");
    }
    

}