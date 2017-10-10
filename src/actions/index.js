export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const NEXT_STAGE = 'NEXT_STAGE';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(taskObj) {
  return {type: ADD_TASK, ...taskObj}
}

export function editTask(taskObj) {
  return {type: EDIT_TASK, ...taskObj}
}

export function nextStageAction(id) {
  return { type: NEXT_STAGE, id}
}

export function deleteTaskAction(id) {
  return { type: DELETE_TASK, id}
}
