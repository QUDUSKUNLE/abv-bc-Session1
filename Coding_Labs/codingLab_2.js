findMinMax = (n) => {
    let min;
    let max;
    let result = [];
    // check for minimum value
    if (Math.min.apply(null, n) === Math.max.apply(null, n)) {
        result.push(Math.max.apply(null, n));
        return result;
    } else {
        result.push(Math.min.apply(null, n));
        result.push(Math.max.apply(null, n));
        return result;
    }
}