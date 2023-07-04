import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
//import { useState } from 'react'
import Todo from './Todo'

const ProgressBoard = ({ data, setData }) => {
    //const [data, setData] = useState(dataMock)



    const onDragEnd = result => {

        console.log(result);

        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {

            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            console.log(sourceTask, destinationTask);

            setData(data)

        } else if (source.droppableId === destination.droppableId) {

            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            console.log(sourceTask, destinationTask);

            setData(data)

        }
    }


    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <div className='flex flex-row gap-8 w-4/5 p-3 rounded-lg border-2 border-slate-300'>
                {
                    data.map(section => (

                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided, snapshot) => (

                                <div
                                    {...provided.droppableProps}
                                    className='flex flex-col items-center w-1/3  border-2 border-slate-300 rounded-lg '
                                    ref={provided.innerRef}
                                >
                                    <div className={`${section.color} w-full text-white rounded-t-md h-10 flex items-center justify-evenly`}>
                                        {section.title}
                                    </div>
                                    <div className={`flex flex-col items-center rounded-b-md w-full h-full gap-2 pb-10 pt-2 px-2 ${snapshot.isDraggingOver ? `bg-slate-300` : `bg-slate-100`}`}>
                                        {
                                            section.tasks.map((task, index) => (

                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                   
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            

                                                            className={`flex flex-col items-center w-full gap-2 px-2 ${snapshot.isDragging ? `opacity-50` : `opacity-100`}`}
                                                        >
                                                            <Todo
                                                                task={task}
                                                                section={section}
                                                                data={data}
                                                                setData={setData}
                                                                
                                                                provided={provided}
                                                                >

                                                            </Todo>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
    )
}

export default ProgressBoard