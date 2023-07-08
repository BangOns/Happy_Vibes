import { CHECKCOMMENT, CHECKPOST } from "../reducers/PostReducer/PostCheck";

export const CheckMyPostUser = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKPOST,
      payload: {
        checkpst: check,
      },
    });
  };
};
export const CheckImageUserComment = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKCOMMENT,
      payload: {
        checkImageComment: check,
      },
    });
  };
};
