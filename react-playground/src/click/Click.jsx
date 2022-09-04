import React, { useEffect, useState } from 'react';

const Click = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClickState = () => {
    isClick ? setIsClick(false) : setIsClick(true);
  };

  useEffect(() => {
    document.title = `버튼을 ${isClick ? "누름" : "안누름"} `;
  });

  return (
    <div>
      <h2>버튼 클릭 스위치 상태는?</h2>
      <h3>{isClick ? "ON" : "OFF"}</h3>
      <button onClick={handleClickState}>Click Here!</button>
    </div>
  );
};

export default Click;
