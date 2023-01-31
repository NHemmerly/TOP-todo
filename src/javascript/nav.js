import { domElement } from "./factoryDOM";

export function renderNav(){
    const nav = domElement('nav', {class: 'p-3 m-3 mx-4 border-yellow-400 rounded bg-yellow-400 dark:bg-stone-700 dark:border-yellow-700'},
        domElement('div', {class: 'container flex flex-wrap items-center justify-between mx-auto'},
            domElement('span', {class: 'self-center text-2xl mx-3 font-semibold whitespace-nowrap text-white'}, 'Dayly'),
            domElement('button', {type: 'button', class: 'inline-flex align-middle items-center p-2 pb-3 px-3.5 ml-3 text-4xl font-bold text-white rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200'}, '+'))
            )

    document.body.appendChild(nav);
}
