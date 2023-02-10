//Validate form inputs 
export function validateProjectForm(input, errID, arr) {
    const error = document.getElementById(errID);
    const pleaseFill = 'Please complete form.';
    console.log(input)
    for (let value of Object.values(input)) {
        if (value === '' || value === 'err') {
            error.innerText = pleaseFill;
            error.classList.remove('hidden');
            return false;
        }
        error.classList.add('hidden') 
    }
    if (!(checkTitles(input, arr, errID))) {
        return false;
    } else if(!(checkDate(input, errID))) {
        return false;
    } else {
        return true;
    }
}

function checkTitles(input, arr, errID) {
    const found = arr.find(project => project.title == input.title);
    const error = document.getElementById(errID);
    const dupTitles = 'Please create unique title.'
    if (found != undefined) {
        error.innerText = dupTitles;
        error.classList.remove('hidden');
        return false;
    } else {
        error.classList.add('hidden');
        return true;
    }
}

function checkDate(input, errID) {
    const dateError = 'Please use valid date.';
    let date = input['due-date'];
    const error = document.getElementById(errID);
    let datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    let matchArray = date.match(datePattern);
    if (matchArray == null) {
        return false;
    }

    let dateString = date.replace(/\D/g, '');

    let year = parseInt(dateString.substr(0, 4));
    let month = parseInt(dateString.substr(4, 2));
    let day = parseInt(dateString.substr(6, 2));

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        daysInMonth[1] = 29
    }
    let compare = compareCurrentDate(day, month, year);
    if (!(month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) && !compare) {
        error.innerText = dateError;
        error.classList.remove('hidden');
        return false
    }  
    error.classList.add('hidden');
    return true;
}

function compareCurrentDate(dueDay, dueMonth, dueYear) {
    const date = new Date();

    let day = parseInt(date.getDate());
    let month = parseInt(date.getMonth() + 1);
    let year = parseInt(date.getFullYear());

    if((dueDay < day && month == dueMonth) || (dueMonth < month && year == dueYear) || (dueYear < year)) {
        return false;
    } else {
        return true;
    }

    
}