import { domElement } from "./factoryDOM";
import { makeTaskView } from "./taskView";
import { clearAll } from "./clearBoard";
import { myProjects } from "./project";

export function renderProjectView() {
    const projectView = domElement('div', {id: 'project',class: 'flex self-center justify-between text-2xl p-3 mx-4 px-5 font-semibold whitespace-nowrap text-white border-yellow-400 rounded bg-yellow-400 dark:bg-stone-700'}, 
        domElement('span', {class: 'self-center text-3xl my-2 mx-3 font-semibold whitespace-nowrap text-white'}, 'Projects'));
    
    document.body.appendChild(projectView);
}

export function renderAllProjects() {
    clearAll();
    myProjects.forEach(project => createProjectCard(project));
    document.getElementById('project').firstChild.innerText = 'Projects';
    document.getElementById('back-button').remove();
    document.getElementById('new-project').classList.remove('hidden');
    document.getElementById('new-task').classList.add('hidden');
}

function renderAllTasks(tasks) {
    clearAll();
    tasks.forEach(task => createTaskCard(task));
}

export function createProjectCard(project) {
    const newCard = domElement('button', {id: `${project.title}`,class: 'block max-w-sm min-h-full p-6 bg-white border border-yellow-200 rounded-lg shadow hover:bg-yellow-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer'},
                        domElement('h3', {class: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}, `${project.title}`),
                        domElement('h5', {class: 'font-normal text-gray-700 dark:text-gray-400'}, `Due: ${project.dueDate}`))
    document.getElementById('project-grid').appendChild(newCard);
    newCard.addEventListener('click', () => { 
        makeTaskView(`${project.title}`);
        renderAllTasks(project.tasks);
    });
    return newCard;
}

export function createTaskCard(task) {
    const priorityColor = task.priority;
    const newCard = domElement('button', {id: `${task.title}`, class: `block max-w-sm min-h-full p-6 bg-white border-2 border-l-[14px] ${priorityColor} rounded-lg shadow hover:bg-yellow-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer`},
                        domElement('div', {class: 'flex flex-row my-3'},
                            domElement('h3', {class: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}, `${task.title}`),
                            domElement('a', {class: 'cursor-pointer mr-1 text-xl text-black dark:text-white'}, 'O')),
                        domElement('h5', {class: 'font-normal text-gray-700 dark:text-gray-400'}, `Due: ${task.dueDate}`))
    newCard.classList.add(`border-${priorityColor}`);
    document.getElementById('project-grid').appendChild(newCard);
    return newCard;
}

export function renderDomCards() {
    const cardGrid = domElement('div', {class: 'p-3 m-3 mx-4'},
    domElement('div', {id: 'project-grid',class: 'grid grid-cols-2 md:grid-cols-4 gap-4'})
    )
    document.body.appendChild(cardGrid);
}