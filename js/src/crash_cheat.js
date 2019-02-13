<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/panda16.icon");
         document.title = '页面崩溃点击恢复';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/panda16.icon");
         document.title = '页面修复成功' ;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

