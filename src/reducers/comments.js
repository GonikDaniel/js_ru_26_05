const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        text: action.text,
        completed: false
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
