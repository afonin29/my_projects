function isEquals(arg1, arg2) {
    return arg1 === arg2;
}

function isBigger(arg1, arg2) {
    return arg1 > arg2;
}

function storeNames(...names) {
    return names;
}

function getDifference(arg1, arg2) {
    if (arg1 > arg2) {
        return arg1 - arg2;
    } else {
        return arg2 - arg1;
    }
}

function negativeCount(array) {
    let newArr = array.filter((elem) => {
        return elem < 0;
    })
    return newArr.length;
}

function letterCount(arg1, arg2) {
    let counter = 0;
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] === arg2) {
            counter++;
        } 
    }
    return counter;
}

function countPoints(array) {
    let points = 0;
    let winPoint = 3;
    array.forEach(element => {
        let dividedElem = element.split(':');
        if (Number(dividedElem[0]) > Number(dividedElem[1])) {
            points += winPoint;
        } else if (Number(dividedElem[0]) === Number(dividedElem[1])) {
            points += 1;
        }
    });
    return points;
}