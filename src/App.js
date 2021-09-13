import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingnInAndSignUpPage from "./pages/sign-in -and-sign-up/sign-in -and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
//  Route exact path component
class App extends React.Component {
  // constructor() {  commenting react state handling code and using redux to manage state,props,despatch event.
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingnInAndSignUpPage />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
//  will dispatch event and upate userreducer  which will update statetoprops in header
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    console.log("user", user);
    dispatch(setCurrentUser(user));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
