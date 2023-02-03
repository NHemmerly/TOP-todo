import { domElement } from "./factoryDOM";

export function renderProjectView() {
    const projectView = domElement('div', {id: 'project',class: 'flex self-center justify-center text-2xl mx-4 font-semibold whitespace-nowrap text-white border-yellow-400 rounded bg-yellow-400 dark:bg-stone-700'}, 
        domElement('span', {class: 'self-center text-2xl my-2 font-semibold whitespace-nowrap text-white'}, 'Projects'));
    
    document.body.appendChild(projectView);
}

export function createProjectCard(project) {
    const newCard = domElement('a', {class: 'block max-w-sm min-h-full p-6 bg-white border border-yellow-200 rounded-lg shadow hover:bg-yellow-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'},
                        domElement('h3', {class: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}, `${project.title}`),
                        domElement('h5', {class: 'font-normal text-gray-700 dark:text-gray-400'}, `Due: ${project.dueDate}`))
    document.getElementById('project-grid').appendChild(newCard);
    return newCard;
}

export function renderDomCards() {
    const cardGrid = domElement('div', {class: 'p-3 m-3 mx-4'},
    domElement('div', {id: 'project-grid',class: 'grid grid-cols-2 md:grid-cols-4 gap-4'})
    )
    document.body.appendChild(cardGrid);
}