import { memo, useState, useRef } from 'react';
import './index.less'
//记录上一次的音量大小
interface shyVoiceProps {
    changeVolume: (volume: number) => void
}
let tempVolumeSize = 0;
export default memo(function ShyVoice({ changeVolume }: shyVoiceProps) {
    //是否关闭声音
    const [silent, closeVoice] = useState(false)
    const [volumeSize, updateVolumeSize] = useState<number>(100)

    //关闭声音和打开声音
    function changeSilent() {
        closeVoice(silent => {
            if (!silent) {
                tempVolumeSize = volumeSize
                updateVolumeSize(0)
            } else {
                updateVolumeSize(tempVolumeSize)
            }
            changeVolume(!silent ? 0 : tempVolumeSize / 100)
            return !silent
        })
    }
    //根据volume判断图标显示
    function shouldChangeSilent(volume: number) {
        if (volume === 0) {
            closeVoice(true)
        } else {
            closeVoice(false)
        }
        //在这里把volume占的比例传出去
        changeVolume(volume / 100)

    }

    //处理声音点击事件
    function handleVolueBarClick(event) {
        const target = event.target;
        const pointY = event.nativeEvent.offsetY
        const barHeight = 50;
        const currentVolumeHeight = volumeSize * barHeight / 100;
        if (target.className === "shy-real-volume") {
            //点击在真实音条上
            updateVolumeSize(_ => {
                const volume = (currentVolumeHeight - pointY) / barHeight * 100
                shouldChangeSilent(volume)
                return volume
            })
        } else {
            updateVolumeSize(_ => {
                const volume = (barHeight - pointY) / barHeight * 100
                shouldChangeSilent(volume)


                return volume
            })
        }

        // console.log(event.nativeEvent.offsetY);
        //点击处的Y坐标

    }
    return (
        <div className='shy-voice'>
            {/* 声音 */}
            <div className='shy-voice-bar'>
                {silent && <span className='iconfont icon-guanbishengyin' onClick={changeSilent}></span>}
                {!silent && <span className='iconfont icon-shengyin' onClick={changeSilent}></span>}
            </div>
            {/* 声柱 */}
            <div className="shy-volume-bar" onClick={handleVolueBarClick}>
                {/* 背景 */}
                <div className="shy-volume">
                    {/* 真实声音*/}
                    <div className="shy-real-volume" style={{ height: volumeSize + '%' }}></div>
                </div>
            </div>
        </div>
    )
})
