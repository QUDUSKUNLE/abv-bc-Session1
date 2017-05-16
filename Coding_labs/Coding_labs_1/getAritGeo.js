aritGeo = (arr) => {
    let arith = 0;
    let geom = 0;

    if (arr.length === 0) {
        return 0;
    } else {
        for (var i = 0; i < arr.length - 2; i++) {
            if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {
                arith++;
            } else if (arr[i + 1] / arr[i] === arr[i + 2] / arr[i + 1]) {
                geom++;
            } else {
                return -1;
            }
            if (arith === arr.length - 2) {
                return "Arithmetic";
            } else if (geom === arr.length - 2) {
                return "Geometric";
            }
        }
    }
}

module.exports = aritGeo;