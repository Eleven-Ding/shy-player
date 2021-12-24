import { memo, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { defualtState } from '../types/index'
import './index.less'
export interface ProgressBarProps {

}
export default memo(function ProgeressBar(props: ProgressBarProps) {
    const [playedWidth, setPlayedWidth] = useState<number>(0)
    const { currentTiem, totalTime } = useSelector(state => ({
        currentTiem: (state as defualtState).currentTime,
        totalTime: (state as defualtState).totalTime
    }))
    const progressRef = useRef()
    const handleProgressBarClick = (event) => {
        //将这个X传出去，然后触发事件去修改currentTime
    }
    const handleProgressBarMouseDown = (event) => {
        const startX = event.nativeEvent.offsetX;
        setPlayedWidth(startX)
        window.onmousemove = function (event) {
            const moveEvent = event || window.event as MouseEvent
            const movingX = moveEvent.offsetX;
            setPlayedWidth(playedWidth + movingX - startX)

        }
    }
    const handleProgressBarMouseUP = (event) => {
        // const endX = event.nativeEvent.offsetX;
        window.onmousemove = null
    }
    return (
        <div id="test" ref={progressRef} className="progress-bar-wrap" onClick={handleProgressBarClick} onMouseUp={handleProgressBarMouseUP} onMouseDown={handleProgressBarMouseDown}>
            <div className="progress-bar" >
                {/* 已经播放的部分 */}
                <div style={{ width: playedWidth + 'px' }} className="progress-played"></div>
                {/* 已经下载的资源部分 */}
                <div className="progress-loaded"></div>
            </div>
        </div>

    )
})
