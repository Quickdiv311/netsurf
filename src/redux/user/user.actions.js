export const setCurrentUser = user => ({
    type: 'SetCurrentUser',
    payload: user
})

export const makePopupVisible = () => ({
    type: 'MakePopupVisible'
})

export const goToSignIn = () => ({
    type: 'GoToSignIn'
})