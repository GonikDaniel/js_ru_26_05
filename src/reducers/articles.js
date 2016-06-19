import * as fixtures from '../fixtures';

const article = (state, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'ADD_COMMENT':
      if (state.id !== action.articleId) {
        return state;
      }

      return Object.assign({}, state, {
        comments: [
          ...state.comments,
          action.id
        ]
      });
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
    case 'ADD_COMMENT':
      return state.map(item => {
        return article(item, action)
      });
    default:
      return state;
  }
};

export default articles;
