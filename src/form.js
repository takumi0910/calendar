import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function Form() {
  //store内のlistsを読み込む処理(connectで記述する方法もあるが、至極めんどくさい)
  const lists = useSelector((state) => state.lists);

  //dispatchの使用を可能にする
  const dispatch = useDispatch();

  //予定を消すときの処理
  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name });
  };

  //onChangeイベントが発生した際のvalueをsetNameの引数とする処理
  const inputText = (e) => {
    setName(e.target.value);
  };
  
  //useStateで初期値を設定
  const [name, setName] = useState("");
  const [delite, setDelite] = useState(false);

  const addList = () => {
    if (!name) return;
　　//初めはcompleteにfalseを
    setDelite(false);
    dispatch({
      type: "ADD_LIST",
      payload: {
        name,
        delite,
      },
    });
    setName("");
  };
  return (
    <div className="App">
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>予定</h2>
      <ul>
        {lists
          .filter((list) => list.delite === false)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              <button onClick={() => deleteList(list.name)}>削除</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Form;