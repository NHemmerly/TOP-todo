import { projectFactory, myProjects } from './project.js';
import { createProjectCard, createTaskCard } from './projectsDOM.js';
import { taskFactory } from './task';
import { validateProjectForm } from './validate.js';


//Collects data from forms and places it in an object 
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

//Validates information from task form, creates an object and adds it to the 
//current project's task array
//All creates a new task card using the object's information
export function addTaskCard(e) {
    let info = collectFormData(e);
    console.log(info);
    const currProj = myProjects.find(project => project.title == document.getElementById('project').firstChild.innerText);
    if (!(validateProjectForm(info, 'error-message-task', currProj.tasks))) {
        return false;
    } else {
        const newTask = taskFactory(info.title, info['due-date'], info.priority, info.desc, info.completed);
        createTaskCard(newTask);
        currProj.tasks.push(newTask);
        document.getElementById('task-form').reset();
    }
}

//Validates information from project form and creates new project object 
//Adds project object to myProjects array 
//Creates new project card using project object information
export function addProjectCard(e) {
    let info = collectFormData(e);
    if (!(validateProjectForm(info, 'error-message', myProjects))) {
        return false;
    } else {    
        const newProject = projectFactory(info.title, info['due-date'], []);
        createProjectCard(newProject);
        myProjects.push(newProject);
        document.getElementById('project-form').reset();
    }
}

