
const initialState = {
  addFormVisibility: 'none',
  cards:
  [
    {
      id: 1,
      task: 'Relearn Everything',
      priority: 'low',
      status: 'queue',
      createdBy: 'Reyn',
      assignedTo: 'Oksana'
    },
    {
      id: 2,
      task: 'Poop muh pants and do the rock-away',
      priority: 'high',
      status: 'queue',
      createdBy: 'Jon',
      assignedTo: 'Ian'
    }
  ]
};

let taskId = 2;

const myReducer = (state = initialState, action) => {
  console.log('this is action', action);
  switch (action.type) {
    case 'ADD_TASK':
      console.log('action', action);
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            id: ++taskId,
            task: action.task,
            priority: action.priority,
            status: 'queue',
            createdBy: action.createdBy,
            assignedTo: action.assignedTo
          }
        ]
      });

    case 'NEXT_STAGE':
      let newCards = state.cards.map(card => {
        if (card.id === action.id) {
          if (card.status === 'queue') {
            card.status = 'in progress';
            return card;
          } else if (card.status === 'in progress'){
            card.status = 'done';
            return card;
          }
          return card;
        }
        return card;
      });
      return Object.assign({}, state, {
        cards: newCards
      });

    case 'EDIT_TASK':
      let editedCards = state.cards.map(card => {
        if (card.id === action.id) {
          card.task = action.task;
          card.priority = action.priority;
          card.createdBy = action.createdBy;
          card.assignedTo = action.assignedTo;
        }
        return card;
      });
      return  Object.assign({}, state, {cards: editedCards});

    case 'DELETE_TASK':
      let fewerCards = state.cards.filter(card => {
          return card.id !== action.id;
      });
      return  Object.assign({}, state, {cards: fewerCards});

    default:
      return state;
  }
}

export default myReducer;
