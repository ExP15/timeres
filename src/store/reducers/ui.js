import { TOGGLE_USER_MODAL } from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  showUserModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_MODAL: {
      return action.isBtn === true
        ? updateObject(state, { showUserModal: !state.showUserModal })
        : updateObject(state, { showUserModal: false });
    }
    default:
      return state;
  }
};
