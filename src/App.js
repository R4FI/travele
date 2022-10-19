import './App.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvicder';
import Services from './components/Services/Services';
import SingleDetails from './components/SingleDetails/SingleDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrder from './components/MyOrder/MyOrder';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/myorders/:userEmail">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <PrivateRoute path="/singledetails/:serviceId">
              <SingleDetails></SingleDetails>
            </PrivateRoute>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
