export {domElement};

const domElement = (tag, attributes, ...nested) => {
    const el = document.createElement(tag);
    for (const key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    
    nested.forEach(nest => {
        if (typeof nest === 'string') {
            el.appendChild(document.createTextNode(nest))
        } else {
            el.appendChild(nest);
        }
    })
    
    return el;
}