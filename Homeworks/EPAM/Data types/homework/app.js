function reverseNumber(num) {
    let digit, result = 0, divider = 10;
    while(num){
        digit = num % divider;
        result = result * divider + digit;
        num = num/divider | 0;
    }  
    return result;
}


function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }    
}

function map(arr, func) {
    const newArr = [];
    forEach(arr, (value) => {
        newArr.push(func(value));
    })
    return newArr;
}

function filter(arr, func) {
    const newArr = [];
    forEach(arr, (value) => {
        if (func(value)) {
            newArr.push(value)
        }
    })
    return newArr;
}

function getAdultAppleLovers(data) {
    let minAge = 18;
    let newArr = filter(data, (value) => {
        return value.favoriteFruit === 'apple' && value.age > minAge;
    })
    newArr = map(newArr, (value) => {
        return value.name;
    })
    return newArr;
}

function getKeys(obj) {
    let newArr = [];
    for (let i in obj) {
        newArr.push(i)
    }
    return newArr;
}

function getValues(obj) {
    let newArr = [];
    for (let i in obj) {
        newArr.push(obj[i])
    }
    return newArr;
}

function showFormattedDate(dateObj) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${dateObj.getDate()} of ${months[dateObj.getMonth()]}, ${dateObj.getFullYear()}`
}