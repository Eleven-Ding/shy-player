import { memo, useState } from 'react';
import './index.less'
export default memo(function ShyVoice() {
    //是否关闭声音
    const [silent, closeVoice] = useState(false)
    
    const changeSilent = () => {
        closeVoice(!silent)
        //进行
    }
    return (
        <div className='shy-voice'>
            {/* 声音 */}
            <div className='shy-voice-bar'>
                {silent && <span className='iconfont icon-guanbishengyin' onClick={changeSilent}></span>}
                {!silent && <span className='iconfont icon-shengyin' onClick={changeSilent}></span>}
            </div>
            {/* 声柱 */}
            <div className="shy-volume-bar">
                <div className="shy-volume"></div>
            </div>
        </div>
    )
})
