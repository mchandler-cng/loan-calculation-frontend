import React from 'react'
import {Container} from 'reactstrap'
import {Switch, Route} from 'react-router-dom'
import Header from 'components/Header'
import Home from 'components/Home'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />

        <div className="mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Container>
    )
  }
}

export default App
