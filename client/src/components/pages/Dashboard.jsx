import { useEffect, useState, useContext } from "react";
import { apiRequest } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const token = user?.token;

  const loadTasks = async () => {
    const data = await apiRequest("/tasks", "GET", null, token);
    setTasks(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;

    await apiRequest("/tasks", "POST", { title }, token);
    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await apiRequest(`/tasks/${id}`, "DELETE", null, token);
    loadTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="bg-white shadow rounded-xl p-6 mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Welcome {user.user.name}
          </h2>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Add Task */}
        <div className="bg-white shadow rounded-xl p-6 mb-6">
          <div className="flex gap-2">
            <input
              placeholder="New task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded-lg flex-1 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>

        {/* Search */}
        <input
          placeholder="Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Task List */}
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow rounded-lg p-4 flex justify-between mb-3"
          >
            <span>{task.title}</span>

            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
