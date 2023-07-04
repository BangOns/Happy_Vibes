import {
  CHECKDELETE,
  CHECKDELETENAV,
} from "../reducers/CheckDelete/CheckDelete";

export const DELETECHECK = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKDELETE,
      payload: {
        checkdlt: check,
      },
    });
  };
};
export const DELETECHECKNAV = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKDELETENAV,
      payload: {
        checkdltNav: check,
      },
    });
  };
};
