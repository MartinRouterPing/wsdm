import './App.css'
import { createStore } from 'redux'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux'
function App() {
  let store = createStore()
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </Provider>
  )
}

export default App
