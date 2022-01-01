import { memo, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import './index.less'
import { defualtState } from '../types';
import { CHANLE_IS_PLAYING } from '../store/constant';

let isFirst = false
export interface SongImageProps {
    //歌曲图片名字
    src: string;
    //加载失败后的提示
    alt?: string;
    //
    play: () => void;
    pause: () => void
}
export default memo(function SongImage({ src, alt = "图片加载失败", play, pause }: SongImageProps) {
    //默认不播放
    const { isPlaying, currentSong } = useSelector((state) => ({
        isPlaying: (state as defualtState).isPlaying,
        currentSong: (state as defualtState).currentSong
    }), shallowEqual)
    useEffect(() => {
        //改变的时候 直接改成暂停的
        dispatch({
            type: CHANLE_IS_PLAYING,
            payload: false
        })

    }, [currentSong])
    useEffect(() => {
        // handleIconClick()
        console.log(isPlaying);

        console.log(isFirst);
        
        if (isPlaying) {
            isFirst && pause()

        } else {
            isFirst && play()
        }
    }, [isPlaying])
    const dispatch = useDispatch()
    function handleIconClick() {
        if (!isPlaying) {
            play()
        } else {
            pause()
        }
        dispatch({
            type: CHANLE_IS_PLAYING,
            payload: !isPlaying
        })
        //这里不能直接进行播放 需要判断资源是否加载  可以考虑使用事件总线？
        //在这里抛出事件进行播放和暂停
        // isFirst = true
    }
    //那么播放和暂停还可能收到其他事件的影响 比如就是点击滚动条的时候暂停 松开播放
    return (
        <div className='shy-image'>
            <span onClick={handleIconClick} className={isPlaying ? "iconfont icon-pause-circle-full" : "iconfont icon-zanting"}></span>
            <img src={src} alt={alt} />
        </div>
    )
})
