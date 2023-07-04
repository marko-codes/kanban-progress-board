import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid'
import ModalTodo from './ModalTodo';
import Icon from './Icon';


const CreateTask = ({ data, setData, priority, type }) => {

    const [priorityOpen, setPriorityOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);

    const [open, setOpen] = useState(false);

    const[taskPriority, setTaskPriority] = useState('Medium');
    const[taskType, setTaskType] = useState('Task');

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
        priority: taskPriority,
        type: taskType,
    });
    console.log(task);


    const handleFormSubmit = (e) => {
        e.preventDefault();
       

        if (task.title.length < 3) return toast.error('Task title must have attleast 3 characters!');
        if (task.title.length > 30) return toast.error('Task title must be less than 30 characters!');


        setData((prev) => {
            const newData = [...prev];

            const todoIndex = newData.findIndex(e => e.id === '123');

            const todoCol = newData[todoIndex];

            const todoTasks = [...todoCol.tasks, task];

            newData[todoIndex].tasks = todoTasks;

            console.log(newData);

            return newData;
        });
        setOpen(false);
        setTaskPriority('Medium');
        setTaskType('Task');
        setTask({
            id: '',
            title: '',
            description: '',
            priority: taskPriority,
            type: taskType,
        });
        
    };


    return (
        <>
            <button onClick={() => setOpen(true)} 
                className='h-12 w-32 m-5 rounded-md text-center text-gray-600
                bg-slate-200 transition-colors shadow-md duration-200  ease-in-out hover:bg-white'>
                Create task
            </button>

            <ModalTodo
                open={open} onClose={() => { setOpen(false); }}>
                <div className="text-center w-80">
                    <div className="mx-auto flex items-center justify-center text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>


                    </div>
                    <div className="mx-auto my-4 w-64">
                        <h3 className=" 
                    text-lg font-black text-gray-800
                    ">Create task</h3>
                    </div>
                    <form className='flex flex-col gap-4 my-2' >
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <input type="text" value={task.title} placeholder='Task title...'
                                onChange={(e) => setTask({ ...task, id: uuidv4(), title: e.target.value,description: task.description, priority: taskPriority, type: taskType })}
                                className='w-full h-12 bg-slate-100 border-2 border-slate-300 outline-slate-400
                      text-black p-1 rounded-md' />
                      <textarea value={task.description} onChange={(e) => setTask({ ...task, id: uuidv4(),title:task.title, description: e.target.value, priority: taskPriority, type: taskType})}
                        rows="4" className="block bg-slate-100 border-2 border-slate-300 outline-slate-400
                      text-black p-1 rounded-md w-full text-sm focus:ring-slate-300 focus:border-slate-300" placeholder="Task description...">
                      </textarea>
                            <div className='flex flex-row gap-1'>
                                <div className='relative flex justify-center items-center'>
                                    <button id="dropdownDefaultButton" onClick={() => {setPriorityOpen(!priorityOpen); setTypeOpen(false);}}
                                        className="text-gray-500 bg-slate-100 hover:bg-slate-300
                             font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center w-40 justify-evenly
                             " type="button">
                                        <Icon prop={taskPriority}/>{taskPriority}
                                        <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                            </path>
                                        </svg>
                                    </button>
                                    <div className={`absolute top-10 z-10 bg-white rounded-md shadow w-36 ${priorityOpen ? '' : 'hidden'}`}>
                                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                            {
                                                priority.map(p => (
                                                    <li key={p.id} onClick={()=> {setTaskPriority(p.title); setPriorityOpen(false); setTask({ ...task, id: uuidv4(), title: task.title, description: task.description, priority: p.title, type: taskType })}}>
                                                <div className=" cursor-pointer flex flex-row items-center justify-between px-4 py-2 hover:bg-slate-200">
                                                <Icon prop={p.title}/>
                                                <div className='flex flex-row items-center justify-center w-20'>
                                                {p.title}
                                                </div>
                                                </div>
                                            </li>
                                                ))
                                            }
                                        
                                        </ul>
                                    </div>
                                </div>
                                <div className='relative flex justify-center items-center'>
                                    <button id="dropdownDefaultButton" onClick={() => { setTypeOpen(!typeOpen); setPriorityOpen(false); }}
                                        className="text-gray-500 bg-slate-100 hover:bg-slate-300
                             font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center w-40 justify-evenly
                             " type="button">
                                        <Icon prop={taskType} />{taskType}
                                        <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                            </path>
                                        </svg>
                                    </button>
                                    <div className={`absolute top-10 z-10 bg-white rounded-md shadow w-36 ${typeOpen ? '' : 'hidden'}`}>
                                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                            {
                                                type.map(t => (
                                                    <li key={t.id} onClick={()=> {setTaskType(t.title); setTypeOpen(false); setTask({ ...task, id: uuidv4(), title: task.title, description: task.description, priority: taskPriority, type: t.title })}}>
                                                <div className=" cursor-pointer flex flex-row items-center justify-between px-4 py-2 hover:bg-slate-200">
                                                <Icon prop={t.title}/>
                                                <div className='flex flex-row items-center justify-center w-20'>
                                                {t.title}
                                                </div>
                                                </div>
                                            </li>
                                                ))
                                            }
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="
                        btn bg-green-500 w-full shadow-md rounded-l-md text-white py-1 my-1
                         hover:bg-green-700
                        "
                                onClick={handleFormSubmit}
                            >Submit</button>
                            <button id='cancel' className="
                        btn bg-gray-100 w-full text-gray-500 py-1 my-1
                         shadow-md rounded-r-md
                         hover:bg-gray-300
                         "
                                onClick={() => {
                                    setOpen(false); 
                                    setTaskPriority('Medium');
                                    setTaskType('Task');       
                                    setTask({
                                    id: '',
                                    title: '',
                                    description: '',
                                    priority: taskPriority,
                                    type: taskType,
                                });
                            }}
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            </ModalTodo>
        </>
    );
}

export default CreateTask