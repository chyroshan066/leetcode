const filter = (arr, fn) => {
    let filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i))
            filteredArr.push(arr[i]);
    }
    return filteredArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function fn(val, pos){
    if(val%2 === 0)
        return true;
    else
        return false;
}

console.log(filter(arr, fn));