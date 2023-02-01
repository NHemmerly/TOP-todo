//Function for adding card to dom using '+' button

import {renderProjectForm} from './forms.js';
function openForm(id) {
    (id == 0) ? document.body.appendChild(renderProjectForm()) : renderTaskForm();
}

export function addCard() {
    console.log('hello');
    if (document.getElementById('project') != null) {
        openForm(0);
    } else {
        openForm(1);
    }
}