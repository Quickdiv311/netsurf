const initState = {
    currentUser: null,
    visible: false,
    existing: false
}

const userReducer = (state=initState, action) => {

   switch(action.type)
   {
       case 'SetCurrentUser':
           return {
             ...state,
             currentUser: action.payload
           }
        
       case 'MakePopupVisible':
         return {
           ...state,
           visible: !state.visible
         }

       case 'GoToSignIn':
         return {
           ...state,
           existing: !state.existing 
         }

       default: 
         return state
   }
}

export default userReducer;