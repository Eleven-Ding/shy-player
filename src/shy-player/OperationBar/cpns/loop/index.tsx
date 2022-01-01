import { memo, useState } from 'react';
import './index.less'
export default memo(function ShyLoop() {
    //默认顺序播放
    const [loop, setLoop] = useState<boolean>(false)
    function handleShyLoopClick() {
        setLoop(loop => {
            //在这里传出去
            //把这个loop传出去 给
            return !loop
        })
    }
    return (
        <div>
            {/* 循环 */}
            <div className="shy-loop" onClick={handleShyLoopClick}>
                {loop && <span className="iconfont icon-M_xunhuan"></span>}
                {!loop && <span className="iconfont icon-suijisenlin"></span>}
            </div>

        </div>
    )
})
