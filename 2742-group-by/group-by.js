/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    for(let i = 0; i < this.length; i++){
        const key = fn(this[i])
        const tempArr = obj[key] || [];
        tempArr.push(this[i]);
        obj[key] = tempArr;
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */