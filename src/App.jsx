import './App.css'
import './style/theme.css'
import MyRouter from '../src/router/index'

import { useSelector } from 'react-redux'

function App() {

  const theme = useSelector((state) => state.setting.theme)
  
  return (
    <div className="App" theme={theme}>
		  <MyRouter></MyRouter>
    </div>
  );
}

export default App;
