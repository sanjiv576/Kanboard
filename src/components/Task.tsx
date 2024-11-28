import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task as TaskType } from "../types";

interface TaskProps {
    task: TaskType;
    index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                        padding: "8px",
                        margin: "0 0 8px 0",
                        backgroundColor: "#fff",
                        border: "1px solid lightgray",
                        borderRadius: "4px",
                        ...provided.draggableProps.style,
                    }}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    );
};

export default Task;
