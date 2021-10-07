import { Layout, Navbar } from './components/index';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {

  useEffect(() => {
    console.log('Designed and developed by Trevor Brage ( Github: https://github.com/Tiqur/ )')
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Navbar>
            <Route path='/' component={HomePage}/> { /* Home page */ }
          </Navbar>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
