import { projectFactory } from './project.js';
import { myProjects } from './project.js';
import { createProjectCard, createTaskCard } from './projectsDOM.js';
import { taskFactory } from './task';

//Function for adding card to dom using '+' button
import { validateProjectForm } from './validate.js';

function collectFormData(e) {
    e.preventDefault();
    const target = e.target;
    const project = target.parentElement;
    const projectInputs = project.querySelectorAll('input');
    let projectArray = Array.from(projectInputs).filter(input => input.type != 'radio' || input.type == 'radio' && input.checked)
    .reduce(
        (acc, input) => ({ ...acc, [input.name]: input.value }),
        {}
    );
    return projectArray;
}

export function addTaskCard(e) {
    let info = collectFormData(e);
    if (!(validateProjectForm(info))) {
        return false;
    } else {
        const currProj = myProjects.find(project => project.title == document.getElementById('project').firstChild.innerText);
        const newTask = taskFactory(info.title, info['due-date'], info.priority, info.desc, info.completed);
        createTaskCard(newTask);
        currProj.tasks.push(newTask);
        document.getElementById('task-form');
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
        document.getElementById('project-form').reset();
    }
}

