import { REQUEST_ARTICLE, RECEIVE_ARTICLE, RECEIVE_ARTICLE_FAILURE } from '../actions/articleActionTypes';

const initialState = {
  article: null,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_ARTICLE:
      return {
        ...state,
        article: action.article,
        isLoading: false
      }
    case RECEIVE_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}