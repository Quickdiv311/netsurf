import './App.css';
import HomePage from '../src/pages/homepage/homepage';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header';
import ShopPage from './pages/shoppage/shoppage';
import EarnPage from './pages/earnpage/earnpage';
import SignPage from './pages/SignPage/SignPage';
import React from 'react';
import {auth, createUserProfile} from './firebase/firebase';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser,selectIsVisible} from './redux/user/user.selectors';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component{

    unsubscribeFromAuth = null;

   componentDidMount()
  {
     const {setUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth)
        {
          const userRef = await createUserProfile(userAuth);
           
          userRef.onSnapshot(snapshot => {
              setUser({id: snapshot.id,
                  ...snapshot.data()
                })
          })
        }
        setUser(userAuth);
    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

render()
{
  const {currentUser,visible} = this.props;
  return (
    <div className="app">
      <Header currentUser = {currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/earn' component={EarnPage}/>
      </Switch>
      {
        visible && (<SignPage/>)
      }
    </div>
  );
}
  } 
  
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  visible: selectIsVisible,
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
