const map = (arr, fn) => {
    let newArr = [];
    for(let i=0; i<arr.length; i++)
        newArr[i] = fn(arr[i], i);
    return newArr;    
}

const arr = [1, 3, 5];

function fn(val, pos){
    return val + pos;
}

console.log(map(arr, fn));