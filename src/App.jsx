import React, { useState } from "react";
import "../src/styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncomplateTodo } from "./components/IncomplateTodo";
import { ComplateTodo } from "./components/ComplateTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);
  // 引数のeventにはinputの要素がoncChangeで変更があった際、入ってくる
  const onChangeTodoText = (event) => {
    // event.target.valueにinputで入力された値が入る
    setTodoText(event.target.value);
  };

  // Todo追加イベント
  const onClickAdd = () => {
    // input内が空の状態で追加を押しても追加されない設定
    if (todoText === "") {
      return;
    }

    // 配列の結合 / スプレッド構文 / incomplateTodosの要素を受け継ぎ、第二引数にこれから追加したい要素を記述
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    // 追加後にinput内のテキストを空にする
    setTodoText("");
  };

  // 完了ボタンのイベント
  const onClickComplate = (index) => {
    const newIncomplateTodos = [...incomplateTodos];
    // 完了ボタンを押された行を切り取る
    newIncomplateTodos.splice(index, 1);
    // 新しい完了の配列に切り取った番号の要素を追加する
    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  // 削除ボタンのイベント
  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    // 第一引数に何番目の要素か / 第二引数にいくつ削除するか
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  // 戻すボタンのイベント
  const onClickBack = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);

    const newIncomplateTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newIncomplateTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個までです。todoの消化をお願いします
        </p>
      )}
      <IncomplateTodo
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />

      <ComplateTodo todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
