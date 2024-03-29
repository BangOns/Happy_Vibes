import {
  CHECKBUGREPORTNAV,
  CHECKBUGREPORTPOSTING,
  CHECKDELETE,
  CHECKDELETENAV,
  CHECKDELETEPOSTING,
  CHECKEDITPROFIL,
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
export const CHECKBUG = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKBUGREPORTNAV,
      payload: {
        checkBug: check,
      },
    });
  };
};
export const CheckEditProfil = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKEDITPROFIL,
      payload: {
        checkEdit: check,
      },
    });
  };
};
export const CheckDeletePosting = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKDELETEPOSTING,
      payload: {
        dltCheckPosting: check,
      },
    });
  };
};
export const CheckBugReportPost = (check) => {
  return (dispatch) => {
    dispatch({
      type: CHECKBUGREPORTPOSTING,
      payload: {
        CheckBugReportPosting: check,
      },
    });
  };
};
