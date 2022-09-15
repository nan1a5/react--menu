import { Outlet  } from 'react-router'

import '../style/home.css'
import NaviBar from '../components/navibar'
import ShopCar from '../components/shopcar'
import SettingModal from '../components/settingmodal'

function Home() {
    return (
        <>
        <SettingModal></SettingModal>
        <div className="home_body">
            <div className="home_body_header"></div>
            <div className="home_body_main">
                    {/* 菜单的左边导航条 */}
                <div className="home_body_left">
                    <NaviBar />
                </div>

                {/* 菜单中间的显示区域 */}
                <div className="home_body_mid"><Outlet /></div>

                {/* 菜单右边的结算区域 */}
                <div className="home_body_right">
                    <ShopCar />
                </div>
            </div>
            {/* 移动端显示的底部购物车 */}
            <div className="home_body_phone">
                底部
            </div>
        </div>
        </>
    )
}


export default Home