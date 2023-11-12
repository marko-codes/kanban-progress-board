import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: '123',
        title: ' 📃 To do',
        color: 'bg-gradient-to-br from-orange-500 to-orange-300',
        tasks: [
            {
                id: uuidv4(),
                title: 'Build SAAS',
                description: 'Research and pick the topic for the SAAS project and then make it awesome!',
                priority: 'Highest',
                type: 'Story'
            },
            {
                id: uuidv4(),
                title: 'Create backend for Progress Board',
                description: 'Use Spring Boot to build backend for the Progress Board application and deploy it to Railway.',
                priority: 'Medium',
                type: 'Story'
            },
            {
                id: uuidv4(),
                title: 'Create NavBar',
                description: 'Make a minimalistic looking navbar. Move button for creating a task in the navbar right, and on the left put the name of the website.',
                priority: 'Lowest',
                type: 'Task'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ In progress',
        color: 'bg-gradient-to-br from-blue-500 to-blue-300',
        tasks: [
            {
                id: uuidv4(),
                title: 'Get proficient in Automation Testing',
                description: 'Gaining a comprehensive understanding of automation testing concepts, frameworks, and best practices.',
                priority: 'Highest',
                type: 'Improvement'
            },
            {
                id: uuidv4(),
                title: 'Fix tooltip message position',
                description: 'Make the position of tooltip centered with the object that this tooltip describes',
                priority: 'Low',
                type: 'Bug'
            },
            {
                id: uuidv4(),
                title: 'Learn Transact SQL',
                description: 'Improve SQL knowledge by learning Transact SQL',
                priority: 'Medium',
                type: 'Improvement'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        color: 'bg-gradient-to-br from-green-500 to-green-300',
        tasks: [
            {
                id: uuidv4(),
                title: 'Get a EECS Degree',
                description: 'Attend Information Technology School. Successfully finish courses. Finish with excellent thesis.',
                priority: 'Highest',
                type: 'Story'
            },
            {
                id: uuidv4(),
                title: 'Publish scientific paper',
                description: 'After an excellently written graduation thesis, the professor from the faculty proposed my work for publication as a scientific paper.',
                priority: 'Highest',
                type: 'Story'
            },
            {
                id: uuidv4(),
                title: 'Learn React',
                description: 'Develop several applications using React and combine it with some backand side like Java Spring Boot.',
                priority: 'Highest',
                type: 'Improvement'
            },
            {
                id: uuidv4(),
                title: 'Learn Angular',
                description: 'Develop several applications using Angular and combine it with some backand side like Java Spring Boot.',
                priority: 'High',
                type: 'Improvement'
            },
            {
                id: uuidv4(),
                title: 'Learn Spring Boot',
                description: 'Develop several backend api`s and combine it with some frontend side like React or Angular.',
                priority: 'Highest',
                type: 'Improvement'
            },
            {
                id: uuidv4(),
                title: 'Learn Git',
                description: 'Use version control system, learn the workflow, learn commands, and learn to track and manage code changes.',
                priority: 'High',
                type: 'Improvement'
            },
        ]
    }
];



export default mockData