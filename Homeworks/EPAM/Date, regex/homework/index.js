function getAge(birthday) {
    let age;
    let today = new Date();
    let todayYear = today.getFullYear();
    let userYear = birthday.getFullYear();
    let todayMonth = today.getMonth();
    let userMonth = birthday.getMonth();
    let todayDay = today.getDate();
    let userDay = birthday.getDate();
    if (todayMonth > userMonth) {
        age = todayYear - userYear;
    } else if (todayMonth < userMonth) {
        age = todayYear - userYear - 1;
    } else {
        if (todayDay >= userDay) {
            age = todayYear - userYear;
        } else {
            age = todayYear - userYear - 1;
        }
    }
    return age;
}

function getWeekDay(date) {
    let weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let givenDate = new Date(date)
    let weekdayNum = givenDate.getDay();
    let weekday = weekdaysArray[weekdayNum];
    return weekday;
}

function getAmountDaysToNewYear() {
    let today = new Date();
    let givenYear = today.getFullYear();
    let newYear = new Date(givenYear + 1, 0, 1);
    const ms = 86400000;
    let days = Math.floor((newYear.getTime() - today.getTime())/ms);
    return days;
}

function getProgrammersDay(year) {
    let programmersDay = new Date(year, 0, 1);
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const daysToProgrammersDay = 256;
    programmersDay.setDate(programmersDay.getDate() + daysToProgrammersDay - 1);
    let message = `${programmersDay.getDate()} ${monthArray[programmersDay.getMonth()]},\
    ${programmersDay.getFullYear()} (${getWeekDay(programmersDay)})`.replace(/\s+/g, ' ').trim();
    return message;
}

function howFarIs(weekday) {
    let weekdayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const weekLength = 7;
    let message, diffDays;
    let today = new Date();
    let todayWeekday = today.getDay();
    weekday = weekday.toLowerCase();
    let weekdayNum = weekdayArray.indexOf(weekday);
    let weekdayFromUpper = weekdayArray[weekdayNum].charAt(0).toUpperCase() + weekdayArray[weekdayNum].slice(1);
    if (weekdayNum > todayWeekday) {
        diffDays = weekdayNum - todayWeekday;
    } else {
        diffDays = weekdayNum + weekLength - todayWeekday;
    }
    if (weekdayNum === todayWeekday) {
        message = `Hey, today is ${weekdayFromUpper} =)`;
    } else {
        message = `It's ${diffDays} day(s) left till ${weekdayFromUpper}`;
    }
    return message;
}

function isValidIdentifier(variable) {
    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(variable);
}

function capitalize(str) {
    let wordsArray = str.split(' ');
    let newArray = [];
    wordsArray.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        newArray.push(element);
    });
    let newStr = newArray.join(' ')
    return newStr;
}

function isValidAudioFile(audio) {
    return /^[a-z]*\.(mp3|flac|alac|aac)$/.test(audio)
}

function getHexadecimalColors(str) {
    let regexp = /#([a-f0-9]{3}){1,2}\b/gi;
    if (regexp.test(str)) {
      return str.match(regexp);
    } else {
      return [];
    }
  }

function isValidPassword(password) {
    let regexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    console.log(regexp.test(password));
}

function addThousandsSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getAllUrlsFromText (str) {
    const regexp = new RegExp(
        "(https:[/][/]|http:[/][/]|www.)[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}"+
        "(:[a-zA-Z0-9]*)?([a-zA-Z0-9-._?,'/+&amp;%$#=~])", 'g'
    );
    try {
      if (str === undefined) {
        throw new Error('error')
      }
      if (regexp.test(str)) {
        return str.match(regexp)
      } else {
        return []
      }
    } catch (e) {
      return console.log(e.message)
    }
  }