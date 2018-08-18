/**
 * Created by hujiaohui on 2018/8/18.
 */

    //入口函数
window.onload = function(){
    //1.老三步。window.onscroll;
    var first = document.getElementById("logo");
    var second = document.getElementById("menubar");
    var third = document.getElementById("site_content");

    //2 注册事件
    window.onscroll = function(){

        if(scroll().top>=first.scrollHeight){
            second.className = "fixed";
            //解决一个小bag
            third.style.marginTop =second.scrollHeight+"px";
        }else{
            second.className  = ""
            third.style.marginTop =0;
        }
    }
}
//        获取页面被卷去的头部和左侧部分。
function scroll() {
    return {
        //pageYOffset IE678不支持其它浏览器都支持; ||有dtd约束 支持IE678
        top: window.pageYOffset || document.documentElement.scrollTop,
        let: window.pageXOffset || document.documentElement.scrollLeft
    }
}
