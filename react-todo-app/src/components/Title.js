import React from "react";

const Title = ({
  handleClear,
}) => {

  return (
    <div className="flex justify-between mb-3">
      <h1>할 일 목록</h1>
      <button onClick={handleClear}>모두 지우기</button>
    </div>
  )
}

export default Title
