import { useState, useCallback } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  }, [todoData])

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      name: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodoData]);
    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([])
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>모두 지우기</button>
        </div>

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
}
