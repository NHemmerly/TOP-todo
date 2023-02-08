//Validate form inputs 

export function validateProjectForm(input, errID) {
    const error = document.getElementById(errID);
        if (input.title === '' || input['due-date'] === '') {
            error.classList.remove('hidden');
            return false;
        }
        error.classList.add('hidden') 
        return true;
    }