import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { Project1, Project2, Project3, Project4 } from './pages/Projects'
import Contact from './pages/Contact'

// https://www.youtube.com/watch?v=slzhcco9Cog
// https://github.com/JustFS/react-showcase

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/project-1' component={Project1} />
      <Route path='/project-2' component={Project2} />
      <Route path='/project-3' component={Project3} />
      <Route path='/project-4' component={Project4} />
      <Route path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
