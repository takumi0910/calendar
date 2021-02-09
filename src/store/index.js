import { createStore } from "redux";

const initialState = {
  lists: [
    {
      name: "友人と遊びに行く",
      delite: false,
    },
    {
      name: "9:00～ ZOOMミーティング",
      delite: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        lists: [...state.lists, action.payload],
      };
    //消そうとしてもの以外をstateに再度追加している(削除動作)
    case "DELETE_LIST":
      return {
        lists: state.lists.filter((list) => list.name !== action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;