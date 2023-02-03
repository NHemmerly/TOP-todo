import { projectFactory } from './project.js';
import { myProjects } from './project.js';
import { createProjectCard } from './projectsDOM.js';
import {hideModal} from './modal.js';

//Function for adding card to dom using '+' button

import {renderProjectForm} from './forms.js';
import { validateProjectForm } from './validate.js';
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

export function addProjectCard(e) {
    e.preventDefault();
    const project = document.getElementById('new-project');
    const projectInputs = project.querySelectorAll('input');
    let projectArray = Array.from(projectInputs).reduce(
        (acc, input) => ({ ...acc, [input.id]: input.value }),
        {}
    );
    if (!(validateProjectForm(projectArray))) {
        return false;
    } else {    
        const newProject = projectFactory(projectArray.title, projectArray['due-date'], []);
        createProjectCard(newProject);
        myProjects.push(newProject);
    }
}

