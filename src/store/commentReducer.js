const initState = {
  comment: 'Hello Redux',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment = comment => (
  {
    type: UPDATE_COMMENT,
    comment,
  }
);

export const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};
