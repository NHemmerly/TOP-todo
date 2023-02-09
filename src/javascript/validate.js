//Validate form inputs 
import { myProjects } from "./project";

export function validateProjectForm(input, errID, arr) {
    const error = document.getElementById(errID);
    const pleaseFill = 'Please complete form.';
    console.log(input)
    for (let value of Object.values(input)) {
        if (value === '') {
            error.innerText = pleaseFill;
            error.classList.remove('hidden');
            return false;
        }
        error.classList.add('hidden') 
    }
    return checkTitles(input, arr, errID) ? true : false;
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