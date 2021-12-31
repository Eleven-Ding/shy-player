import { memo } from 'react';
import './index.less'
export default memo(function ShyLoop() {
    return (
        <div>
            {/* 循环 */}
            <div className="shy-loop">
                <span className="iconfont icon-M_xunhuan"></span>
                <span className="iconfont icon-suijisenlin"></span>
            </div>

        </div>
    )
})
