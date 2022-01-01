//获取歌曲列表
//https://www.dingshiyi.top:9002/music/get_song_list

// https://www.dingshiyi.top:8001/lyric?id=25880354 //根据id获取歌词

//https://music.163.com/song/media/outer/url?id=436514312.mp3  根据id获取MP3资源


import axios from 'axios'

export function getSongList() {
    return axios.get('https://www.dingshiyi.top:9002/music/get_song_list')
}

export function getLyrics(id: number) {
    return axios.get(`https://www.dingshiyi.top:8001/lyric?id=${id}`)
}

export function getMp3(id: number) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
