const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   //吸底模式
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 0, //歌词传递方式
    audio: [
	{
        name: "思念是一种病",
        artist: '张震岳 / 蔡健雅',
        url: 'http://www.ytmp3.cn/down/50020.mp3',
        cover: 'http://p2.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg?param=130y130',
      },
	  {
        name: "这就是爱情",
        artist: '李代沫',
        url: 'http://www.ytmp3.cn/down/54477.mp3',
        cover: 'http://p1.music.126.net/RQBF9kqZb7PtLCaOxi9ngQ==/109951163053984533.jpg?param=130y130',
      },
    ]
});

