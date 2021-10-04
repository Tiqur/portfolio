import { Layout, Navbar } from './components/index';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('Designed and developed by Trevor Brage ( Github: https://github.com/Tiqur/ )')
  }, [])

  return (
    <Layout>
      <Navbar>
        <p>Test</p>
      </Navbar>
    </Layout>
  )
}

export default App
