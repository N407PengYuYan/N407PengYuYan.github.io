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
        url: 'http://audio04.dmhmusic.com/71_53_T10041179858_128_4_1_0_sdk-cpm/cn/0206/M00/2C/A1/ChR461pk88iAXOXBAD5y774efpY947.mp3',
        cover: 'https://p2.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg?param=130y130',
      },
	  {
        name: "I Will Follow Him",
        artist: 'Peggy March',
        url: 'http://audio04.dmhmusic.com/71_53_T10018133788_128_4_1_0_sdk-cpm/cn/0104/M00/50/C1/ChR45FmK-jSAZiYDAC6_hHtatJs667.mp3',
        cover: 'http://p1.music.126.net/1YwFY25XuvHBT5I2UE5p3g==/1654764999815139.jpg?param=130y130',
      },
          {
        name: "追梦人",
        artist: '王若琳',
        url: 'http://dl.stream.qqmusic.qq.com/C1000043QmUF2bYIvq.m4a',
        cover: 'http://p1.music.126.net/kovMyM89JQZsaaXumLdphg==/17868163463382852.jpg?param=130y130',
      },
    ]
});

