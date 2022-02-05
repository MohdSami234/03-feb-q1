//for addition
function add(...args){
    return args.reduce(function (a,b){
        return a + b;
    })
    
    
}

console.log(add(1,2,3));
console.log(add(4,3,6,8,5,3,6));

//for multiplication 
function mul(...args){
    return args.reduce(function (a,b){
        return a * b;
    })
    
    
}

console.log(mul(1,2,9));
console.log(mul(4,3,6,8,5,3,6));
