import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'



const Landing = lazy(() => import('../views/Home'))
const ConcertTable = lazy(() => import('../views/ConcertTable'))

const Router = () => {
  return (
    <>
    <Header />

      <Suspense fallback={<div>Loading..</div>}>
        <main>
          <Switch>
            <Route path='/table' render={(routeProps: RouteProps) => <ConcertTable routeProps={routeProps} />} />
            <Route path='/' component={Landing} />
            <Redirect from='/' to='/' />
          </Switch>
        </main>
      </Suspense>
      <Footer />
    </>
  )
}

export default Router