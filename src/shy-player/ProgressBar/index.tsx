/**
 * 进度条组件
 */
import { memo, useState, useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { defualtState } from '../types/index'
import './index.less'
export interface ProgressBarProps {
    //当前播放到的时间
    //总的时间
    //已经加载了多少的时间
}
export default memo(function ProgeressBar(props: ProgressBarProps) {
    const [playedWidth, setPlayedWidth] = useState<number>(0)
    // const { currentTiem, totalTime } = useSelector(state => ({
    //     currentTiem: (state as defualtState).currentTime,
    //     totalTime: (state as defualtState).totalTime
    // }))
    const progressRef = useRef()
    const handleProgressBarMouseDown = (event) => {
        let target = event.target
        let startX = event.clientX
        setPlayedWidth(_ => event.nativeEvent.offsetX)
        function mouseMove(event) {
            //滑动过程中，鼠标到左边屏幕的距离
            const slideX = event.clientX;
            if (target.className !== 'progress-bar-wrap') {
                target = target.parentNode
            }
            //滚动组件距离屏幕的的位置
            const progressLeft = target.offsetLeft;
            const progressRight = progressLeft + target.offsetWidth
            //只有在滑动条内 才可以进行滑动，超出不做任何处理
            if (slideX <= progressRight && slideX >= progressLeft) {
                setPlayedWidth(playedWidth => {
                    return slideX - startX + playedWidth
                })
                startX = slideX
            }
        }
        window.addEventListener("mousemove", mouseMove)
        window.addEventListener("mouseup", function () {
            window.removeEventListener("mousemove", mouseMove)
        })
    }

    return (
        <div id="test" ref={progressRef} className="progress-bar-wrap" onMouseDown={handleProgressBarMouseDown}>
            <div className="progress-bar" >
                {/* 已经播放的部分 */}
                <div style={{ width: playedWidth + 'px' }} className="progress-played"></div>
                {/* 已经下载的资源部分 */}
                <div className="progress-loaded"></div>
            </div>
        </div>

    )
})
