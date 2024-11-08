class timeLimitedCache {
    constructor(){
        this.cache = {};
    }

    set(key, value, duration){
        //If there is an existing entry associated with key, existingEntry will store that value. If no entry exists for the given key, existingEntry will be undefined.
        let existingEntry = this.cache[key];
        
        //If entry key already exists, then it stops the timer
        if(existingEntry)
            clearTimeout(existingEntry.timeOutId);

        //timeOutId is a unique identifier for this particular timeout which can be used later to cancel the timeout if needed, using clearTimeout(timeOutId);
        const timeOutId = setTimeout(() => {
            delete this.cache[key];
        }, duration);

        this.cache[key] = {value, timeOutId};

        //returns true if the existingEntry exists otherwise returns false if the existingEntry is undefined or doesn't exist
        return Boolean(existingEntry);

    }

    get(key){
        let existingEntry = this.cache[key];

        if(existingEntry)
            return existingEntry.value;
        else
            return -1;
    }

    count(){
        return Object.keys(this.cache).length;
    }
};

const cache = new timeLimitedCache;

console.log(cache.set(1, 111, 1000));
console.log(cache.set(1, 111, 1000));
console.log(cache.set(2, 111, 1000));

setTimeout(() => {
    console.log(cache.get(2));
    console.log(cache.count());
}, 1500);
