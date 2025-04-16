import Provider from './Provider'
import AppRouter from './routes'
import ToastProvider from './components/ToastContainer'

function App() {
  return (
    <Provider>
      <AppRouter />
      <ToastProvider />
    </Provider>
  )
}

export default App
