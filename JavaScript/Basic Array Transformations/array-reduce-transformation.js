const reduce = (nums, fn, init) => {
    if(nums.length === 0)
        return init;
    else{
        let val = fn(init, nums[0]);
        for(let i=1; i<nums.length; i++)
            val = fn(val, nums[i]);
        return val;
    }
}

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums = [];

function fn(accum, cur){
    accum += cur;
    return accum;
}

console.log(reduce(nums, fn, 10));