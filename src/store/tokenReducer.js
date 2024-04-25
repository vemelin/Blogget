import {setToken} from '../components/api/token';

const initState = {
  token: '',
};

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateToken = token => (
  {
    type: UPDATE_TOKEN,
    token,
  }
);

export const deleteToken = token => (
  {
    type: DELETE_TOKEN,
    token,
  }
);

export const tokenMidleware = store => next => action => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};

export const tokenReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
