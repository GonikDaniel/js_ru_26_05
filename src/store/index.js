import { createStore } from 'redux';
import articlesApp from '../reducers';
import * as fixtures from '../fixtures';

const store = createStore(articlesApp, { comments: fixtures.normalizedComments });

window.store = store

export default store