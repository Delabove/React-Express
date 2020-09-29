import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'



const Landing = lazy(() => import('../views/Home'))
const ConcertTable = lazy(() => import('../views/ConcertTable'))

const Router = () => {
  return (
    <>
     
      <Suspense fallback={<div>Loading..</div>}>
        <main style={{ marginTop: '30px' }}>
          <Switch>
            <Route path='/table' render={(routeProps: RouteProps) => <ConcertTable routeProps={routeProps} />} />
            <Route path='/' component={Landing} />
            <Redirect from='/' to='/' />
          </Switch>
        </main>
      </Suspense>
    </>
  )
}

export default Router