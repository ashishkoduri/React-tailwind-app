
import { Router, Route } from 'react-router-dom';
import SideNav from './Components/SideNav'
import { createBrowserHistory } from 'history';

function App(){
  const history = createBrowserHistory();
  return(
    <div>
      <SideNav/>
      <Router history={history}>
        <switch>
          <Route path="/" component={SideNav} exact></Route>
        </switch>
      </Router>
    </div>
    );
  
  }
  
  export default App;