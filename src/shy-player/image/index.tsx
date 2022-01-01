import { memo, useState } from 'react';
import './index.less'
export interface SongImageProps {
    //歌曲图片名字
    src: string;
    //加载失败后的提示
    alt?: string;
}
export default memo(function SongImage({ src, alt = "图片加载失败" }: SongImageProps) {
    //默认不播放
    const [play, updatePlay] = useState<boolean>(false)
    function handleIconClick() {
        //这里不能直接进行播放 需要判断资源是否加载  可以考虑使用事件总线？
        updatePlay(!play)
        //在这里抛出事件进行播放和暂停
    }
    //那么播放和暂停还可能收到其他事件的影响 比如就是点击滚动条的时候暂停 松开播放
    return (
        <div className='shy-image'>
            <span onClick={handleIconClick} className={play ? "iconfont icon-pause-circle-full" : "iconfont icon-zanting"}></span>
            <img src={src} alt={alt} />
        </div>
    )
})
