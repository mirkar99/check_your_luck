const count= function(callback){
    const a =5;
    const b =2;
    console.log(`Wynik mnożenia to ${a*b}`);
    callback(a,b);
}

const adding=function(x,y){

    console.log(`wynik dodawania to ${x+y}`);
}

count(adding);