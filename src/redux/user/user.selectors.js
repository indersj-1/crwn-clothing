import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => {
  console.log("Header mapstate to props called");
  return user.currentUser;
});
