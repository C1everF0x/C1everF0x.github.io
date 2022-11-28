//标题
var OriginTitile = document.title;    // 保存之前页面标题
var titleTime;
document.addEventListener('visibilitychange', function(){
    if (document.hidden){
        document.title = '我再也不要当舔狗了';
        clearTimeout(titleTime);
    }else{
        document.title = '你在干嘛，嘿嘿';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 3000); // 3秒后恢复原标题
    }
});