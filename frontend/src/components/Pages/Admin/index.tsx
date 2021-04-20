import React, { memo, useCallback } from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

import Dashboard from './Dashboard'
import Deposits  from './Deposits'
import Purchase from './Purchase'
import Sales  from './Sales'
import Extract  from './Extract'

import Dawer from '../Dawer'
const useStyles = makeStyles({
  main: {
    margin: '87px'
  }
})
// const mainContext = useRef<HTMLElement>()
export const ScrollTopContext = React.createContext<Function>(() => {})

const AdminPage = memo((props: {}) =>{

  // const scrollTop = useCallback(() => setTimeout(() => scrollTo(0, 0), 100), [])
  const renderRedirect = useCallback(() => <Redirect to="/" />, [])
  const classes = useStyles()
  return (
    <>
      {/* <ScrollTopContext.Provider value={scrollTop}> */}
        <main className={classes.main}>
          <Dawer />
          <Switch>
            <Route path="/depositos" component={Deposits} />
            <Route path="/compra" exact component={Purchase} />
            <Route path="/venda" component={Sales} />
            <Route path="/extrato" component={Extract} />
            <Route path="/" exact component={Dashboard} />
            <Route path="*" exact><h1>Not Found Page</h1></Route>
            <Route render={renderRedirect} />
          </Switch>
        </main>
      {/* </ScrollTopContext.Provider>; */}
    </>
  );
})

export default AdminPage;
