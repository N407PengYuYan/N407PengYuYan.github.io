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
        name: "Sunny",
        artist: 'Boney M.',
        url: 'https://music.163.com/song/media/outer/url?id=27644834.mp3',
        cover: 'http://p1.music.126.net/82XmKUX6AAkjSIqVq84jZw==/109951163346032923.jpg?param=130y130',
      },
	  {
        name: "혜화동",
        artist: '动物园',
        url: 'https://music.163.com/song/media/outer/url?id=424474255.mp3',
        cover: 'http://p1.music.126.net/FEeBHaoHB72ydF-gRWABGw==/3444769937959625.jpg?param=130y130',
      },
          {
        name: "Last Dance",
        artist: '沙拉酱merry',
        url: 'https://music.163.com/song/media/outer/url?id=1428814757.mp3',
        cover: 'http://p1.music.126.net/YOh14VmZHW6riDYUeIkjeA==/109951163115353027.jpg?param=130y130',
      },
    ]
});

