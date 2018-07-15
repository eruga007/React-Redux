const commnetReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.data]);

    case "DELETE_COMMENT":
      return state.filter(comment => comment.id !== action.id);

    case "EDIT_COMMENT":
      return state.map(
        comment =>
          comment.id === action.id
            ? { ...comment, editing: !comment.editing }
            : comment
      );

    case "UPDATE":
      return state.map(comment => {
        if (comment.id === action.id) {
          return {
            ...comment,
            name: action.data.editname,
            message: action.data.editmessage,
            editing: !comment.editing
          };
        } else return comment;
      });

    default:
      return state;
  }
};
export default commnetReducer;
