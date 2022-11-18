let show_magicians = (arr) => {
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
       arr2[i] = `${arr[i]} great`;
    }
    console.log(arr);
    console.log(arr2);
}

show_magicians(["Tony", "Mike", "Harry", "Jonny"]);