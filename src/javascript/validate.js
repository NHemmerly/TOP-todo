//Validate form inputs 
import { myProjects } from "./project";

export function validateProjectForm(input, errID) {
    const error = document.getElementById(errID);
    console.log(input)
    for (let value of Object.values(input)) {
        if (value === '') {
            error.classList.remove('hidden');
            return false;
        }
        error.classList.add('hidden') 
        return checkTitles(input, myProjects) ? true : false;
    }
}

function checkTitles(input, arr) {
    const found = arr.find(project => project.title == input.title);
    const error = document.getElementById('error-title');
    if (found != undefined) {
        error.classList.remove('hidden');
        return false;
    } else {
        error.classList.add('hidden');
        return true;
    }
}