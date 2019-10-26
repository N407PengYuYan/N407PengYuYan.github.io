const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   //吸底模式
    autoplay: false, //自动播放
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
        url: 'http://nf01.sycdn.kuwo.cn/resource/n3/62/66/33075992.mp3',
        cover: 'https://p2.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg?param=130y130',
      },
	  {
        name: "I Will Follow Him",
        artist: 'Peggy March',
        url: 'http://ss.sycdn.kuwo.cn/ed5943ecc29e49bd4d8a7ea55a511ab7/5db3ac51/resource/n3/45/42/2435572560.mp3',
        cover: 'http://p1.music.126.net/1YwFY25XuvHBT5I2UE5p3g==/1654764999815139.jpg?param=130y130',
      },
          {
        name: "追梦人",
        artist: '王若琳',
        url: 'http://other.web.re01.sycdn.kuwo.cn/2a0f74ebf6329983d9c579257497219d/5db3ab54/resource/n1/29/29/563284322.mp3',
        cover: 'http://p1.music.126.net/kovMyM89JQZsaaXumLdphg==/17868163463382852.jpg?param=130y130',
      },
    ]
});

