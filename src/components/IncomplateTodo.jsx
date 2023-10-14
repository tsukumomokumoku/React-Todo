import React from "react";

const IncomplateTodoArea = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncomplateTodo = (props) => {
  const { todos, onClickComplate, onClickDelete } = props;
  return (
    <div style={IncomplateTodoArea}>
      <h2 className="title">未完了のTODO</h2>
      <ul>
        {/* 第一引数に要素が入り、第二引数に番号が入ってくる */}
        {todos.map((todo, index) => {
          return (
            // keyを書くことでレンダリング時に必要な部分だけを書き換える目印となる
            <li key={todo}>
              <div className="list-row">
                <p className="list-title">{todo}</p>
                <button className="btn" onClick={() => onClickComplate(index)}>
                  完了
                </button>
                {/* アロー関数を用いることで、読み込み時に発火しなくなる / 関数に引数を渡す場合は、アロー関数を使う */}
                <button className="btn" onClick={() => onClickDelete(index)}>
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
