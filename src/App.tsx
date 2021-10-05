import { Layout, Navbar } from './components/index';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    console.log('Designed and developed by Trevor Brage ( Github: https://github.com/Tiqur/ )')
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Layout>
            <Navbar>
              <p>Test</p>
            </Navbar>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
