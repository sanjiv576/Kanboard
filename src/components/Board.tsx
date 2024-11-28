import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./Column"
import { BoardData } from "../types";

interface BoardProps {
    data: BoardData;
    setData: (data: BoardData) => void;
}

const Board: React.FC<BoardProps> = ({ data, setData }) => {
    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = data.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newData = {
            ...data,
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn,
            },
        };

        setData(newData);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-columns" direction="horizontal" type="COLUMN">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ display: "flex" }}
                    >
                        {data.columnOrder.map((columnId, index) => {
                            const column = data.columns[columnId];
                            const tasks = column.taskIds.map(
                                (taskId) => data.tasks[taskId]
                            );

                            return <Column key={column.id} column={column} tasks={tasks} />;
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Board;
