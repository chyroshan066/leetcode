const expect = (val) => {
    const toBe = (val2) => {
        if(val2 !== val)
            throw new Error("Not Equal");
        return true;
        
    }

    const notToBe = (val2) => {
        if(val2 === val)
            throw new Error("Equal");
        return true;
    }

    return {toBe, notToBe};
}

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(6));
console.log(expect(5).notToBe(5));
console.log(expect(5).notToBe(6));