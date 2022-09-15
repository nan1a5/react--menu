import React from 'react'
import {useSpring, animated} from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme, toggleSetting } from '../redux/stores/setting'

export default function SettingModal() {

    // const [sun, setSun] = useState(true)
    const dispatch = useDispatch()
    const sun = useSelector(state => state.setting.theme) === 'sun'?true:false
    const show = useSelector(state => state.setting.setting)

    const toggle = useSpring({
        config: {
            duration: 100
        },
        transform: sun ? `rotate(45deg)` : `rotate(135deg)`
    })
    const sunshow = useSpring({
        config: {
            duration: 80
        },
        opacity: sun ? 1 : 0,
        visibility: sun ? `visible` : `hidden`
    })
    const lunashow = useSpring({
        config: {
            duration: 80
        },
        opacity: sun ? 0 : 1,
        visibility: sun ? `hidden` : `visible`
    })
  


    const handleClick = () => dispatch(toggleTheme())

    return (
        <>
            {
            show ? (<div className="sm-background" onClick={() => dispatch(toggleSetting())}>
                <div className="sm-wrapper" onClick={(e) => {e.stopPropagation()}}>
                    {/* <input type="button" value="sun" />
                    <input type="button" value="luna" /> */}
                    <animated.div style={toggle}>
                        <animated.div style={sunshow} className="sun suntheme_btn" onClick={handleClick}></animated.div>
                        <animated.div style={lunashow} className="luna lunatheme_btn" onClick={handleClick}></animated.div>
                    </animated.div>
                    <animated.span style={sunshow} className='suntheme_text'>日间模式</animated.span>
                    <animated.span style={lunashow} className='lunatheme_text'>夜间模式</animated.span>
                </div>
                </div>) : null
            }
        </>
    )
}
