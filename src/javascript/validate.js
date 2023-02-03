//Validate form inputs 

export function validateProjectForm(input) {
    const error = document.getElementById('error-message');
        if (input.title === '' || input['due-date'] === '') {
            error.classList.remove('hidden');
            return false;
        }
        error.classList.add('hidden') 
        return true;
    }