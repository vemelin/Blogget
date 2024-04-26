import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  AUTH_REQUEST_SUCCESS
} from './action';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        data: {},
      };

    default:
      return state;
  }
};

export default authReducer;
