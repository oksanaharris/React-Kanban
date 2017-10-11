
const initialState = {
  addFormVisibility: 'none',
  cards:
  [
    {
      id: 1,
      task: 'Tell Jon Snow he\'s not a bastard',
      priority: 'high',
      status: 'queued up',
      createdBy: 'Bran',
      assignedTo: 'Sam'
    },
    {
      id: 2,
      task: 'Pull up muh pants and do the rock-away',
      priority: 'medium',
      status: 'queued up',
      createdBy: 'Me',
      assignedTo: 'Me'
    },
    {
      id: 3,
      task: 'Find the question to 42',
      priority: 'low',
      status: 'queued up',
      createdBy: 'Universe',
      assignedTo: 'You'
    }
  ]
};

// const initialState = {
//   addFormVisibility: 'none',
//   cards: []
// };

let taskId = 2;

const myReducer = (state = initialState, action) => {
  console.log('this is action', action);
  switch (action.type) {
    // case 'LOAD_TASK':
    //   console.log('action', action);
    //   return Object.assign({}, state, {
    //     cards: [...action.tasks]
    //   });
    case 'ADD_TASK':
      console.log('action', action);
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            id: ++taskId,
            task: action.task,
            priority: action.priority,
            status: 'queued up',
            createdBy: action.createdBy,
            assignedTo: action.assignedTo
          }
        ]
      });

    case 'NEXT_STAGE':
      let newCards = state.cards.map(card => {
        if (card.id === action.id) {
          if (card.status === 'queued up' || card.status === 'QUEUED UP') {
            card.status = 'in progress';
            return card;
          } else if (card.status === 'in progress' || card.status === 'IN PROGRESS'){
            card.status = 'completed';
            return card;
          }
          return card;
        }
        return card;
      });
      return Object.assign({}, state, {
        cards: newCards
      });


    case 'PREVIOUS_STAGE':
      let changedCards = state.cards.map(card => {
        if (card.id === action.id) {
          if (card.status === 'completed' || card.status === 'COMPLETED') {
            card.status = 'in progress';
            return card;
          } else if (card.status === 'in progress' || card.status === 'IN PROGRESS'){
            card.status = 'queued up';
            return card;
          }
          return card;
        }
        return card;
      });
      return Object.assign({}, state, {
        cards: changedCards
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

    case 'MOVE_TASK':
      let revisedCards = state.cards.map(card => {
        console.log('card status', card.status);
          console.log('action column', action.column);
        console.log('card id', card.id, typeof(card.id));
        console.log('action id', action.id, typeof(action.id));
        if (card.id.toString() === action.id) {

          card.status = action.column;
        }
        return card;
      });
      console.log('revised cards', revisedCards);
      return  Object.assign({}, state, {cards: revisedCards});

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
