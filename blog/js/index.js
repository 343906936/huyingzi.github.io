/**
 * Created by hujiaohui on 2018/8/18.
 */

    //��ں���
window.onload = function(){
    //1.��������window.onscroll;
    var first = document.getElementById("logo");
    var second = document.getElementById("menubar");
    var third = document.getElementById("site_content");

    //2 ע���¼�
    window.onscroll = function(){

        if(scroll().top>=first.scrollHeight){
            second.className = "fixed";
            //���һ��Сbag
            third.style.marginTop =second.scrollHeight+"px";
        }else{
            second.className  = ""
            third.style.marginTop =0;
        }
    }
}
//        ��ȡҳ�汻��ȥ��ͷ������ಿ�֡�
function scroll() {
    return {
        //pageYOffset IE678��֧�������������֧��; ||��dtdԼ�� ֧��IE678
        top: window.pageYOffset || document.documentElement.scrollTop,
        let: window.pageXOffset || document.documentElement.scrollLeft
    }
}
