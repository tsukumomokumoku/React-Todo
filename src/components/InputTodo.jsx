import React from "react";
// CSS-in-JS
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
const inputText = {
  borderRadius: "16px",
  border: "none",
  padding: "6px 16px",
  outline: "none"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* onChengeでstateに入力された値が変わるたびにonChangeでvalueの値を変更する */}
      <input
        style={inputText}
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} className="btn" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
