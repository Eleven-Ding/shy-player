import { memo, useState } from 'react';
import './index.less'
export default memo(function ShyLoop() {
    //默认顺序播放
    const [loop, setLoop] = useState<boolean>(false)
    return (
        <div>
            {/* 循环 */}
            <div className="shy-loop">
                {loop && <span className="iconfont icon-M_xunhuan"></span>}

                {!loop && <span className="iconfont icon-suijisenlin"></span>}
            </div>

        </div>
    )
})
