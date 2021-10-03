import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/posts'>
        <Posts />
      </Route>
    </BrowserRouter>
    // <Switch>

    // </Switch>
  )
}

export default App;