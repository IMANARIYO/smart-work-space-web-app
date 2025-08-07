
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./provider/taskProvider";
import "./app.css"; 
// import PopoverExamples from "./masterPopopoverstaffs";

export default function App() {
  return <TaskProvider>
      {/* <div className="fla flex-col"> */}
        <TaskList />
        {/* <PopoverExamples /> */}
      {/* </div> */}
    </TaskProvider>;
}
