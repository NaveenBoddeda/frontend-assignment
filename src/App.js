import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/campaignstructure" component={About} />
      <Route path="/facebookbasics" component={Contact} />
      <Route path="/thirdchoice" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
