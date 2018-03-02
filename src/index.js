module.exports = function getZerosCount(number, base) {
    function toSimpleObject(num){
            var object = {};
            var count = 2;
            while (num > 1) {
                if (num % count === 0) {
                    if(object[count] === undefined) {
                        object[count] = 1;
                    }
                    else object[count] += 1;
                    num /= count;
                }
                else count++;
            }
            return object;
        }

    var i = 1, count = 0;
    var result = [];
    var simpleDel = toSimpleObject(base);

    for(var prop in simpleDel) {
        i = 1;
        count = 0;
        while (Math.pow(prop, i) < number) {
            count += Math.floor(number / Math.pow(prop, i));
            i++;
        }
        result.push(Math.floor(count/simpleDel[prop]));
    }
    return Math.min.apply(null, result);
}
