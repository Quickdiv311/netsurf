const initState = {
    sections : [{
        title: 'SHOP NOW',
        id: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/01/27/22/10/shopping-1165437__340.jpg',
        link: 'shop'
    },
      {
        title: 'EARN ONLINE',
        id: 2,
        imageUrl: 'https://demotix.com/wp-content/uploads/2019/06/earn-money-online2.jpg',
        link: 'earn'
      },
    
   ]
}

const directoryReducer = (state = initState, action) => {
    switch(action.type)
    {
        default: 
        return state;
    }
}

export default directoryReducer;