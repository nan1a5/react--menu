import '../style/login.css'

import { Outlet  } from 'react-router'

function Login() {
    return (
        <div className='login_body'>
            <div className='login_view'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Login