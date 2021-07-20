import './app.scss'
import { Header } from './components'
import { Home, Cart } from './screens'

function App() {
  return (
    <div className="wrapper">
        <Header />

        <Home />

        <Cart />
    </div>
  );
}

export default App
