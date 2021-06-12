import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectIsVisible = createSelector(
    [selectUser],
    user => user.visible
)

export const selectIsExisting = createSelector(
    [selectUser],
    user => user.existing
)