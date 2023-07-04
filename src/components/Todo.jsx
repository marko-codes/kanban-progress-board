import { toast } from "react-hot-toast";
import ToolTip from "./ToolTip";
import { useState } from "react";
import ModalTodo from "./ModalTodo";
import Icon from "./Icon";

const Todo = ({ task, section, setData, provided }) => {

    const [openDelete, setOpenDelete] = useState(false);

    const [openTask, setOpenTask] = useState(false);

    const handleRemove = (id) => {

        setData((prev) => {
            const newData = [...prev];

            const todoIndex = newData.findIndex(e => e.id === section.id);

            const todoCol = newData[todoIndex];

            const todoTasks = [...todoCol.tasks];

            const ftasks = todoTasks.filter(t => t.id !== id);

            newData[todoIndex].tasks = ftasks;

            console.log(newData);

            return newData;
        });

        setOpenDelete(false);

        //localStorage.setItem('tasks', JSON.stringify(fTasks));

        toast.success('Successfully removed task!');

    }


    return (
        <>
        <div  {...provided.dragHandleProps} onClick={() => { setOpenTask(true); }}  className={`relative cursor-pointer flex xl:h-28 lg:h-32 md:h-44 sm:h-52 bg-white shadow-md shadow-slate-300 items-start justify-start w-full px-2 py-2 rounded-md`}>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex items-start w-full" >
                    <p >{task.title}</p>
                </div>
                <div className="flex items-start w-full">
                    <p className='text-sm text-slate-500 w-full' >{task.description.substring(0, 30)}...</p>
                </div>
            </div>
            <button onClick={(e) => {e.stopPropagation(); setOpenDelete(true);}} className='absolute top-1 right-1' >
                <ToolTip message={'Delete'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 
                </ToolTip>
            </button>
           
            <div className="absolute bottom-1 left-1 flex flex-row gap-2 w-full">
                <ToolTip message={task.priority}>
                    <Icon prop={task.priority}/>
                </ToolTip>
                <ToolTip message={task.type}>
                    <Icon prop={task.type}/>
                </ToolTip>
            </div>

        </div>            
        <ModalTodo 
            open={openDelete} onClose={ () => {setOpenDelete(false); } }>
                <div className="text-center w-56">
                    <div className="mx-auto flex items-center justify-center text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                    <div className="mx-auto my-4 w-48">
                        <h3 className=" 
                    text-lg font-black text-gray-800
                    ">Confirm Delete</h3>
                        <p className="
                     text-sm text-gray-500
                    ">Are you sure you want to delete task: {task.title}?</p>
                    </div>
                    <div className="flex gap4">
                        <button className="
                        btn bg-red-500 w-full shadow-md rounded-l-md text-white py-1 my-1
                         hover:bg-red-700
                        "
                        onClick={()=> handleRemove(task.id)}
                        >Delete</button>
                        <button className="
                        btn bg-gray-100 w-full text-gray-500 py-1 my-1
                         shadow-md rounded-r-md
                         hover:bg-gray-300
                         "
                        onClick={ () => {setOpenDelete(false); } }
                        >Cancel</button>
                    </div>
                </div>
            </ModalTodo>
            <ModalTodo
                open={openTask} onClose={() => { setOpenTask(false); }}>
                <div className="text-center w-80">
                    <div className="mx-auto flex items-center justify-center text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>
                    </div>
                    <div className="mx-auto my-4 w-64">
                        <h3 className=" 
                    text-lg font-black text-gray-800
                    ">{task.title}</h3>
                    </div>
                    <div className='flex flex-col gap-4 my-2' >
                        <div className="flex flex-col gap-4 items-center justify-center">
                            
                      <div 
                        className="bg-white text-black rounded-md w-full text-sm
                         focus:ring-slate-300 focus:border-slate-300 gap-2 flex flex-col">
                            <p className='text-sm text-left text-gray-500 w-12'>Description:</p>
                            <p className=' text-justify' >{task.description}</p>
                      </div>
                            <div className='flex flex-col gap-1 justify-start items-start w-full'>
                                <div className='relative flex flex-row justify-start items-center'>
                                    <p className='text-sm text-left text-gray-500 w-12'>Priority:</p>
                                    <div 
                                        className="text-black 
                             font-medium text-sm px-4 py-2 text-center inline-flex items-center w-40 justify-start gap-2
                             ">
                                        <Icon prop={task.priority}/>{task.priority}
                                        
                                    </div>
                                </div>
                                <div className='relative flex flex-row justify-start items-center'>
                                    <p className='text-sm text-left text-gray-500 w-12'>Type:</p>
                                    <div 
                                        className="text-black 
                             font-medium text-sm px-4 py-2 text-center inline-flex items-center w-40 justify-start gap-2
                             ">
                                        <Icon prop={task.type}/>{task.type}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            
                            <button id='cancel' className="
                        btn bg-gray-100 w-full text-gray-500 py-1 my-1
                        shadow-md rounded-md
                        hover:bg-gray-300
                         "
                                onClick={() => 
                                    setOpenTask(false)
                            }
                            >Close</button>
                        </div>
                    </div>
                </div>
            </ModalTodo>
            </>
    )
}

export default Todo