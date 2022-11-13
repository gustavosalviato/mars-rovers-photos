import ReactDOM from 'react-dom/client'
import { App } from './App'
import { globaStyles } from './styles/global'

globaStyles()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
)
