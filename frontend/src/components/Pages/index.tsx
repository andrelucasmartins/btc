import React, { memo, useCallback } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from  'react-router-dom'

import AdminPage from './Admin'

const Pages = memo(() => {
  const renderRedirect = useCallback(() => <Redirect to="/" />, [])
  return (
    <Router>
      <Switch>
        <Route path="/" component={AdminPage} />
        <Route render={renderRedirect}></Route>
      </Switch>
    </Router>
  )
})

export default Pages