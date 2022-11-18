let make_album = (art, alb, tra = 3) =>{
    return {
        artist:art,
        album:alb,
        tra:3,
    }
}

let album = make_album("Bohemia", "Rooh");

console.log(album);