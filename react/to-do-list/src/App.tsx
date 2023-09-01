import { ChangeEvent, useState } from "react";
import "./App.css";

interface ITask {
  taskValue: string;
  completedStatus: boolean;
}
const App = (): JSX.Element => {
  const [task, setNewTask]: [ITask, Function] = useState({
    taskValue: "",
    completedStatus: false,
  });
  const [list, setNewList]: [Array<ITask>, Function] = useState([]);
  const [editingStatus, setEditingStatus]: [boolean, Function] =
    useState(false);
  const [editedValue, setEditedValue]: [ITask, Function] = useState({
    taskValue: "",
    completedStatus: false,
  });
  const [indexToBeEdit, setIndexToBeEdit]: [number, Function] = useState(-1);
  const [checked, setChecked]: [boolean, Function] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewTask({ taskValue: e.target.value, completedStatus: false });
  }

  function addTask(): void {
    if (task.taskValue.length > 0) {
      setNewList([...list, task]);
    } else {
      alert("Please add some values");
    }
    setNewTask({ taskValue: "", completedStatus: false });
  }

  function deleteTask(index: number): void {
    const newList = [...list];
    newList.splice(index, 1);
    setNewList(newList);
  }

  function handleEdit(index: number) {
    setEditingStatus(true);
    setIndexToBeEdit(index);
  }

  function handleEditChange(e: ChangeEvent<HTMLInputElement>) {
    setEditedValue({ taskValue: e.target.value, completedStatus: false });
  }

  function addChange() {
    const newList = [...list];

    if (indexToBeEdit > -1) {
      if (editedValue.taskValue.length > 0) {
        newList.splice(indexToBeEdit, 1, editedValue);
        setNewList(newList);
        setEditingStatus(false);
        setEditedValue({ taskValue: "", completedStatus: false });
        setIndexToBeEdit(-1);
      }
    } else {
      alert("Please add something, to be edited");
    }
  }
  function handleCompletion(index: number) {
    const newList = [...list];
    newList[index].completedStatus = !newList[index].completedStatus;
    setNewList(newList);
    setChecked(!checked);
  }
  return (
    <div className="App">
      {editingStatus ? (
        <>
          <h1 className="heading">Edit Tasks:</h1>
          <input
            className="input-box"
            type="text"
            onChange={handleEditChange}
          />
          <button className="input-edit-btn" onClick={addChange}>
            Confirm Edit
          </button>
        </>
      ) : (
        <>
          <h1 className="heading">What's on the To-Do for Today?</h1>
          <input
            className="input-box"
            type="text"
            onChange={handleChange}
            value={task.taskValue}
          />
          <button className="input-btn" onClick={addTask}>
            Add
          </button>
        </>
      )}
      <ul className="task-list">
        {list.map((value: ITask, index: number) => {
          return (
            <div className="list-item">
              <li
                key={index}
                style={{ display: "block" }}
                className={value.completedStatus ? "input-strike" : "input"}
              >
                {value.taskValue}
              </li>
              <button
                style={{ display: "inline" }}
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                style={{ display: "inline" }}
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <input
                type="checkbox"
                onChange={() => handleCompletion(index)}
                value={`${checked}`}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
