import logo from './logo.svg';
import './App.css';
import DashBoard from "./components/DashBoard";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'
import PageNotFound from './components/PageNotFound'
import UpdateContact from './components/UpdateContact'
import ViewContact from './components/ViewContact'
function App() {

  return (
    // <BrowserRouter>
    <div>
      <DashBoard />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/contacts' component={ContactList} exact />
        <Route path='/contacts/add' component={AddContact} exact />
        <Route path='/contacts/update/:x' component={UpdateContact} exact />
        <Route path='/contacts/view/:x' component={ViewContact} exact />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </div>
    // </BrowserRouter>
  );
}

export default App;
