import { domElement } from "./factoryDOM";

export function renderNav(){
    const nav = domElement('nav', {class: 'p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700'})

    document.body.appendChild(nav);
}
