/**
 * 进度条组件
 */
import { memo, useState, useRef, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { defualtState } from '../types/index'
import './index.less'
//是否在拖动
let isDraping = false
//是否点击
let isClick = false;
export interface ProgressBarProps {
    changeCurrentTime: (currentTime: number) => void
}
export default memo(function ProgeressBar({ changeCurrentTime }: ProgressBarProps) {
    const [playedWidth, setPlayedWidth] = useState<string>('0%')
    const { currentTiem, totalTime } = useSelector(state => ({
        currentTiem: (state as defualtState).currentTime,
        totalTime: (state as defualtState).totalTime
    }), shallowEqual)
    const progressRef = useRef()
    const widthRef = useRef(playedWidth)
    const handleProgressBarMouseDown = (event) => {
        isClick = true
        isDraping = true

        let target = event.target
        let startX = event.clientX
        if (target.className !== 'progress-bar-wrap') {
            target = target.parentNode
        }
        const barWidth = target.clientWidth
        //使用百分比
        setPlayedWidth(_ => {
            return event.nativeEvent.offsetX / barWidth * 100 + '%'
        })
        window.onmousemove = function mouseMove(event) {
            //滑动过程中，鼠标到左边屏幕的距离
            const slideX = event.clientX;
            //滚动组件距离屏幕的的位置
            const progressLeft = target.getBoundingClientRect().left;
            const progressRight = progressLeft + target.offsetWidth
            if (slideX <= progressRight && slideX >= progressLeft) {
                setPlayedWidth(playedWidth => {
                    return (slideX - startX + barWidth / 100 * Number(((playedWidth.slice(0, playedWidth.length - 1))))) / barWidth * 100 + '%'
                })
                startX = slideX
            }
        }
    }
    useEffect(() => {
        window.onmouseup = function () {
            if (!isClick) return
            window.onmousemove = null;
            isDraping = false
            
            changeCurrentTime(Number(playedWidth.slice(0, playedWidth.length - 1)) / 100 * totalTime / 1000)
            isClick = false
        }
    }, [playedWidth])
    useEffect(() => {
        
        !isDraping && setPlayedWidth(currentTiem / totalTime * 100 + '%')
    }, [currentTiem])
    return (
        <div id="test" ref={progressRef} className="progress-bar-wrap" onMouseDown={handleProgressBarMouseDown}>
            <div className="progress-bar" >
                {/* 已经播放的部分 */}
                <div style={{ width: playedWidth }} className="progress-played"></div>
                {/* 已经下载的资源部分 */}
                <div className="progress-loaded"></div>
            </div>
        </div>

    )
})
