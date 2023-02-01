import { domElement } from "./factoryDOM";

export function renderProjectView() {
    const projectView = domElement('div', {class: 'flex self-center justify-center text-2xl mx-3 font-semibold whitespace-nowrap text-white border-yellow-400 rounded bg-yellow-400 dark:bg-stone-700'}, 
        domElement('span', {class: 'self-center text-2xl my-2 font-semibold whitespace-nowrap text-white'}, 'Projects'));

    document.body.appendChild(projectView);
}