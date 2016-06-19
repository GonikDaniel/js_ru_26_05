//тут перемудрили немного. выноить функции-хелперы это хорошо, но еще один полноценный редюсер - лишнее
const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        name: action.name || 'Unknown',
        text: action.text
      }

    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined, action)
      ]

    default:
      return state
  }
}

export default comments
