import { memo } from 'react';
export interface SongImageProps {
    //歌曲图片名字
    src: string;
    //加载失败后的提示
    alt?: string;

}
export default memo(function SongImage({ src, alt = "图片加载失败" }: SongImageProps) {
    return (
        <div>
            <span className='icon-pause-circle-full'></span>
            <img src={src} alt={alt} />
        </div>
    )
})
