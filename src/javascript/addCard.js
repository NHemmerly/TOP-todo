import { projectFactory } from './project.js';
import { myProjects } from './project.js';
import { createProjectCard } from './projectsDOM.js';
import { taskFactory } from './task';

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

function collectFormData(e) {
    e.preventDefault();
    const target = e.target;
    const project = target.parentElement;
    const projectInputs = project.querySelectorAll('input');
    let projectArray = Array.from(projectInputs).reduce(
        (acc, input) => ({ ...acc, [input.id]: input.value }),
        {}
    );
    return projectArray;
}

export function addTaskCard(e) {
    let info = collectFormData(e);
    if (!(validateProjectForm(info))) {
        return false;
    } else {
        const currProj = myProjects.find(project => project.title = document.getElementById('project').firstChild.innerText);
        const newTask = taskFactory(info.title, info['due-date'], info.priority, info.desc, info.completed);
        currProj.tasks.push(newTask);
    }
}

export function addProjectCard(e) {
    let info = collectFormData(e);
    if (!(validateProjectForm(info))) {
        return false;
    } else {    
        const newProject = projectFactory(info.title, info['due-date'], []);
        createProjectCard(newProject);
        myProjects.push(newProject);
        console.log(myProjects);
        document.getElementById('project-form').reset();
    }
}

