import * as fixtures from '../fixtures';

const article = (state, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    default:
      return state;
  }
};

const articles = (state = fixtures.normalizedArticles, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        article(undefined, action)
      ];
    case 'TOGGLE_ARTICLE':
      return state.map(t =>
        article(t, action)
      );
    default:
      return state;
  }
};

export default articles;
