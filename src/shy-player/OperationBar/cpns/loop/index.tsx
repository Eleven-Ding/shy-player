import { memo, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './index.less'
import { MODLES } from '../../../store/state';
import { defualtState } from '../../../types';
import { CHANGE_PLAY_MODEL } from '../../../store/constant';
export default memo(function ShyLoop() {
    //默认顺序播放
    const { model } = useSelector((state) => ({
        model: (state as defualtState).model
    }), shallowEqual)
    const dispatch = useDispatch()
    function handleShyLoopClick() {
        dispatch({
            type: CHANGE_PLAY_MODEL,
            payload:model===MODLES.LOOP?MODLES.INORDER:MODLES.LOOP
        })
    }
    return (
        <div>
            {/* 循环 */}
            <div className="shy-loop" onClick={handleShyLoopClick}>
                {model === MODLES.LOOP && <span className="iconfont icon-M_xunhuan"></span>}
                {model === MODLES.INORDER && <span className="iconfont icon-suijisenlin"></span>}
            </div>

        </div>
    )
})
