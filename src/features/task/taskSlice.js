import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    value: [],
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare(taskDescription) {
        // Generate an ID for the task when preparing the action payload
        return { payload: { ...taskDescription, id: nanoid() } };
      },
    },
    removeTask(state, action) {
      const result = state.value.filter(
        (task) => task.id !== action.payload.id
      );
      state.value = result;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer