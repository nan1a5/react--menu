import { Routes , Route , Navigate} from 'react-router'
import { BrowserRouter} from 'react-router-dom'

import Login from '../../src/views/login';
import Home from '../../src/views/home.jsx';
import Signin from '../../src/router/login/signin'
import Signup from '../../src/router/login/signup'
import Main from '../../src/router/home/main'


function MyRouter() {
    return (
        <BrowserRouter >
			<Routes>
				<Route path='/'>
					<Route path='/' element={<Navigate to='/login/signin' />} />
					<Route path='home' element={<Home />}>
						<Route path='/home' element={<Navigate to='/home/main' />} />
						<Route path='main' element={<Main />} />
					</Route>
					<Route path="login" 
						element={<Login/>}
					>
						<Route path="signup" 
							element={<Signup />}
						/>
						<Route path="signin" 
							element={<Signin />}
						/>
					</Route>
					<Route path='*' element={<Navigate to='/login/signin' />} />
				</Route>
			</Routes>
		</BrowserRouter>
    )
}

export default MyRouter