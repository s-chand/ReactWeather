function addPromise(a,b)
{
    return new Promise(function(resolve,reject){
        if (typeof a === 'number' && typeof b === 'number')
    {
        resolve(a+b)
    }
    else{
        reject('NaN')
    }
    });
    
}

addPromise(1,2).then(function(result){
    console.log(result)
},function(err){
console.log(err)
})

addPromise("1",2).then(function(result){
    console.log(result)
},function(err){
console.log(err)
})