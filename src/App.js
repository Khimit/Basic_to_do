import "./App.css";
import Heading from "./components/Heading";
import TodoCard from "./components/TodoCard";
import SearchBox from "./components/SearchBox";
import { useSelector } from "react-redux";

function App() {

  const tasks = useSelector((state) => state.task.value);

  return (
    <>
      <Heading />
      <SearchBox />
      {tasks.map((task) => (
        <TodoCard key={task.id} allTasks={task} />
      ))}
    </>
  );
}

export default App;
