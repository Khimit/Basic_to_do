import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/task/taskSlice";

const TodoCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center">
      <div className="mt-3 bg-red-200 rounded-xl h-14 w-4/6 px-4 flex flex-wrap justify-between">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4021/4021693.png"
          alt="task icon"
          className="h-10 w-10 object-cover mt-3"
        />

        <div className="font-bold text-4xl">{props.allTasks.description}</div>
        <img
          src="
          https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
          alt="Delete icon"
          className="h-10 w-10 object-cover mt-3 cursor-pointer"
          onClick={() => {
            dispatch(removeTask({ id: props.allTasks.id }));
          }}
        />
      </div>
    </div>
  );
};

export default TodoCard;
