function car_object(manuf, mod, ...parms){
    let arr = [...parms];
    let col = arr[0];
    let tyres = arr[1];
    let car ={
        manufacturer: manuf,
        model: mod,
        color:col,
        tyres: tyres
    }
    console.log(car);
}

car_object("Toyota", "Audi", "Blue", 4);