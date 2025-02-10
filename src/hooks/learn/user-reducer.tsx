import React, { useReducer, useState } from "react";

interface IUserModel {
  id: number;
  name: string;
}
const userList: IUserModel[] = [
  {
    name: "Kuldeep",
    id: 1,
  },
  {
    id: 2,
    name: "Nayan",
  },
  {
    id: 3,
    name: "Lakhan",
  },
];

type TAction = {
  type: "Add" | "Delete";
  paylod: IUserModel | number;
};

const reducer = (state: IUserModel[], action: TAction) => {
  switch (action.type) {
    case "Add":
      return [...state, action.paylod] as IUserModel[];
    case "Delete":
      return state.filter((v) => v.id != action.paylod);
    default:
      throw new Error("Wrong action type");
  }
};

function UserReducerPage() {
  const [data, dispatch] = useReducer(reducer, userList);
  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (!name.length) {
      alert("Please fill input");
    } else {
      dispatch({ paylod: { name, id: Math.random() * 9999 }, type: "Add" });
      setName("");
    }
  };
  return (
    <div>
      <p>Users list</p>

      <div>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {data.map((value, index) => {
        return (
          <div key={index}>
            <p>
              {value.name}- {value.id}
            </p>
            <button
              onClick={() => dispatch({ type: "Delete", paylod: value.id })}
            >
              Delete me
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UserReducerPage;
