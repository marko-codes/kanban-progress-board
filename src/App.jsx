
import { useState } from 'react';
import './App.css';
import ProgressBoard from './components/Board';
import mockData from './mockdata/mockData.js'
import mockPriority from './mockdata/mockPriority'
import mockType from './mockdata/mockType'
import CreateTask from './components/CreateTask';
import { Toaster } from 'react-hot-toast';
import ToolTip from './components/ToolTip';
import Icon from './components/Icon';
import Colapsable from './components/Colapsable';

function App() {

    const [data, setData] = useState(mockData);
    const [priority, setPriority] = useState(mockPriority);
    const [type, setType] = useState(mockType);


    return (
        <>
            <Toaster />
            <div className='flex flex-col w-auto h-auto items-center justify-center bg-slate-50 p-10'>
                <h1 className=' p-5 text-4xl text-black'>
                    Progress Board
                </h1>
                <h3 className=' p-5 text-2xl text-black'>
                    The Kanban board is designed to work on larger screens - tablet, laptop, desktop
                </h3>
                <div className='flex flex-col items-start justify-center w-1/2  xl:w-2/5'>

                    <Colapsable
                        open={false}
                        title={'Funcionality that is implemented:'}
                        children={
                            <ul className=' list-disc'>
                                <li><p className='text-gray-600 text-sm'>Loading tasks and columns from mocked data so system can become 100% dynamic;</p></li>
                                <li><p className='text-gray-600 text-sm'>Dragging and dropping from one to another Column of tasks;</p></li>
                                <li><p className='text-gray-600 text-sm'>Reordering tasks inside Columns, using also drag and drop;</p></li>
                                <li><p className='text-gray-600 text-sm'>Clicking on a task shows more details about the task;</p></li>
                                <li><div className='flex flex-row items-center gap-1'>
                                    <p className='text-gray-600 text-sm'>Showing toasts for adding, deleting tasks, and toast for validation </p>
                                </div>
                                </li>
                                <li><div className='flex flex-row items-center gap-1'>
                                    <p className='text-gray-600 text-sm'>Clicking the </p>
                                    <ToolTip message={'Delete'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </ToolTip>
                                    <p className='text-gray-600 text-sm'>
                                        button on a task prompts you with a modal for deleting a task;
                                    </p>
                                </div>
                                </li>
                                <li><div className='flex flex-row items-center gap-1'>

                                    <p className='text-gray-600 text-sm'>Hovering over icons </p>
                                    <ToolTip message={'Improvement'}>
                                        <Icon prop={'Improvement'} />
                                    </ToolTip>
                                    <p className='text-gray-600 text-sm'> shows a tooltip that explains that icon;</p>
                                </div>
                                </li>
                                <li><p className='text-gray-600 text-sm'>Clicking on a Create task button prompts you with a modal for task creation;</p></li>
                            </ul>
                        }
                    />

                </div>

                <CreateTask data={data} setData={setData} type={type} priority={priority} setPriority={setPriority} />
                <ProgressBoard data={data} setData={setData} type={type} priority={priority} setType={setType} />
            </div>
        </>
    )
}

export default App
