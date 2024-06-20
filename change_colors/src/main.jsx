
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalContext from './component/shoppingCart/GlobalContext.jsx'
// import GlobalContext from './component/GlobalContext.jsx'
import { Provider } from 'react-redux';
import store from './component/shoppingCart/store';






ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GlobalContext>
  <Provider store={store}>
    <App />
  </Provider>
    
  </GlobalContext>


    
  //</React.StrictMode>
)
