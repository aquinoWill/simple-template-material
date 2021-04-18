import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { SignIn, Dashboard, FormsExample, InsertDocument, AnalizyDocuments } from 'pages'
import Layout from 'components/layout'

// import { PrivateRoute } from './privateRoute'

export const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/forms-examples'} component={FormsExample} />
        <Route path={'/upload-images'} component={InsertDocument} />
        <Route path={'/analizy-documents'} component={AnalizyDocuments} />
        <Route
          path='*'
          render={({ location }) => (
            <Redirect
              to={{
                pathname: `/signin`,
                state: { from: location }
              }}
            />
          )}
        />
      </Switch>
    </Layout>
  </Router>
)
