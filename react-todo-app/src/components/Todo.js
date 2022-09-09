import { useState, useCallback } from "react"
import Title from "./Title"
import Lists from "./Lists"
import Form from "./Form"

const Todo = () => {
  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")

  const handleClick = useCallback((id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    }, [todoData]
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      name: value,
      completed: false,
    }

    setTodoData((prev) => [...prev, newTodoData])
    setValue("")
  }

  const handleClear = () => {
    setTodoData([]);
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <Title 
          handleClear={handleClear}
        />
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form 
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
};

export default Todo;
