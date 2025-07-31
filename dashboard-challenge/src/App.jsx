import Dashboard from './components/Dashboard'

import { LoginUserProvider } from './contexts/LoginUserProvider'
import { ProductProvider } from './contexts/ProductProvider'
import { ThemeProvider } from './contexts/ThemeProvider'
import { UsersProvider } from './contexts/UsersProvider'

import './index.css'

function App () {

  return (
    <ThemeProvider>
      
      <LoginUserProvider>
        <UsersProvider>
          <ProductProvider>
            <Dashboard />
          </ProductProvider>
        </UsersProvider>
      </LoginUserProvider>
    </ThemeProvider>
  )
}

export default App
