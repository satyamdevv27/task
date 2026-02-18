const Task = require("../models/Task");

// GET TASKS
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({
      user: req.user._id,
    });

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// CREATE TASK
exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Task title required",
      });
    }

    const task = await Task.create({
      title,
      description,
      user: req.user._id,
    });

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// UPDATE TASK
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// DELETE TASK
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
