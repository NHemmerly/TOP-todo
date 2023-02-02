//Factory function that creates projects and stores tasks
export {projectFactory};
export {myProjects};

const myProjects = [];

const projectFactory = (title, dueDate, tasks) => {
    tasks = [];

    return {title, dueDate, tasks}
}