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
        name: "summertime",
        artist: 'cinnamons / evening cinema',
        url: 'https://music.163.com/song/media/outer/url?id=531786301.mp3',
        cover: 'http://p1.music.126.net/YOh14VmZHW6riDYUeIkjeA==/109951163115353027.jpg?param=130y130',
      },
	  {
        name: "花鳥風月",
        artist: 'End of the World',
        url: 'https://music.163.com/song/media/outer/url?id=22814470.mp3',
        cover: 'http://p2.music.126.net/Q9pW0u7eq2irciRdxUEUrA==/912594651077794.jpg?param=130y130',
      },
          {
        name: "手纸~拝啓 十五の君へ~",
        artist: 'アンジェラ・アキ',
        url: 'https://music.163.com/song/media/outer/url?id=550619.mp3',
        cover: 'http://p2.music.126.net/qnGwlSPyWikEtdKdJm63Kg==/2323268069509295.jpg?param=130y130',
      },
    ]
});

