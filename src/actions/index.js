export const LOAD_TASK = 'LOAD_TASK';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const NEXT_STAGE = 'NEXT_STAGE';
export const PREVIOUS_STAGE = 'PREVIOUS_STAGE';
export const DELETE_TASK = 'DELETE_TASK';
export const MOVE_TASK = 'MOVE_TASK';

export const loadTasks = () => {
  return dispatch => {
    fetch('/api/tasks')
    .then(tasks => tasks.json())
    .then(tasks => {
      dispatch({
        type: LOAD_TASK,
        tasks
      });
    });
  }
}

export function addTask(taskObj) {
  return {type: ADD_TASK, ...taskObj}
}

export function editTask(taskObj) {
  return {type: EDIT_TASK, ...taskObj}
}

export function moveToColumnAction(id, column) {
  return {type: MOVE_TASK, id, column}
}

export function nextStageAction(id) {
  return { type: NEXT_STAGE, id}
}

export function previousStageAction(id) {
  return { type: PREVIOUS_STAGE, id}
}

export function deleteTaskAction(id) {
  return { type: DELETE_TASK, id}
}
