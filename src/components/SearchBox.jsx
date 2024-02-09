import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const SearchBox = () => {
  const [task, settask] = useState("");

  const dispatch = useDispatch();
  

  const handlechange = (e) => {
    settask(e.target.value);
  };

  return (
    <div className="w-full max-w-xl flex mx-auto p-3 text-xl">
      <input
        type="text"
        className="w-full placeholder-gray-400 text-gray-900 p-4  border-solid border-2 border-black bg-gray-100"
        placeholder="Search"
        value={task}
        onChange={handlechange}
      />
      <button onClick={()=>{dispatch(addTask({ description: task }))}} className="bg-purple-400 p-4 font-bold">
        Add
      </button>
    </div>
  );
};

export default SearchBox;
