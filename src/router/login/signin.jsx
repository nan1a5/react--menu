import '../../style/login.css'

import {Link} from 'react-router-dom'

function Signin() {
    return (

        //检查是否登录
        //登录则跳转home页面
        //...

        <div className='signin_bx'>
            <h1>LOGIN</h1>
            <label htmlFor="username">username</label><input name='uername' type="text"  id='username' />
            <label htmlFor="passwd">passwd</label><input name='passwd' type="password" id='passwd' />
            <span>not have an account?<Link to='/login/signup'>_sign up now</Link></span>
        </div>
    )
}

export default Signin