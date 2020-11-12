import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Task from './pages/Task';
import User from './pages/User';
import AddData from './components/AddData';
import Signout from './components/SignOut';
import ChangePwd from './components/ChangePwd';
import Protected from './components/Protected';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <div className="App">
                
                <div className="container-fluid px-0">
                    <Switch>
                        <Protected exact path="/" component={Home} />
                        <Protected exact path="/task" component={Task} />
                        <Protected exact path="/user" component={User} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/task/addDetail" component={AddData} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Signout} />
                        <Route exact path="/user/change-password" component={ChangePwd} />
                    </Switch> 
                </div>
            </div>
        </Router>
    </Provider>
  );
}

export default App;
