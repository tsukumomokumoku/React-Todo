import React from "react";

const ComplateArea = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const ComplateTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={ComplateArea}>
      <h2 className="title">完了したTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p className="list-title">{todo}</p>
                <button className="btn" onClick={() => onClickBack(index)}>
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
