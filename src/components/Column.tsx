import React from "react";
// import { Droppable } from "react-beautiful-dnd";
import {Droppable} from "react-beautiful-dnd"
import { Column as ColumnType, Task as TaskType } from "../types";
import Task from './Task'
interface ColumnProps {
    column: ColumnType;
    tasks: TaskType[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
    return (
        <div style={{ margin: "8px", border: "1px solid lightgray", borderRadius: "4px", width: "220px" }}>
            <h3 style={{ padding: "8px" }}>{column.title}</h3>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ padding: "8px", background: "#f8f9fa", minHeight: "100px" }}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
