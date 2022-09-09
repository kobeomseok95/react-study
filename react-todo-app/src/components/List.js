import React, { useState } from "react";

const List = React.memo(({ 
  data, 
  todoData, 
  setTodoData, 
  provided, 
  snapshot, 
  handleClick,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(data.name);

    const handleCompleteChange = (id) => {
      let changedTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(changedTodoData);
    };

    const handleEditChange = (event) => {
      setEditedTitle(event.target.value)
    }

    const handleSubmit = (changedDataId, event) => {
      event.preventDefault();
      
      let newTodoData = todoData.map((data) => {
        if(data.id === changedDataId) {
          data.name = editedTitle
        }
        return data
      })
      setTodoData(newTodoData)
      setIsEditing(false)
    }

    if (isEditing) {
      return (
        <div
          className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div className="items-cetner">
            <form onSubmit={(event) => handleSubmit(data.id, event)}>
              <input
                onChange={handleEditChange}
                value={editedTitle}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              x
            </button>
            <button
              onClick={(event) => handleSubmit(data.id, event)}
              className="px-4 py-2 float-right"
              type="submit"
            >
              save
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div
          key={data.id}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div className="items-cetner">
            <input
              type="checkbox"
              onChange={() => handleCompleteChange(data.id)}
              defaultChecked={false}
            />
          </div>
          <span className={data.completed ? "line-through" : "none"}>
            {data.name}
          </span>

          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(data.id)}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
