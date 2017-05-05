(function(doc, win){     //根据屏幕的宽度动态改变font-size
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docE1.clientWidth;
            if(!clientWidth) return;
            docE1.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);

/*(function (doc, win) {
    console.log("dpr:"+win.devicePixelRatio); 
    var docEle = doc.documentElement,
    isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
    dpr=Math.min(win.devicePixelRatio, 3);
    scale = 1 / dpr,

    resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEle.dataset.dpr = dpr;

    var metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
    docEle.firstElementChild.appendChild(metaEle);
 
    var recalCulate = function  {
        var width = docEle.clientWidth;
        if (width / dpr > 640) {
            width = 640 * dpr;
        }
        docEle.style.fontSize = 20 * (width / 750) + 'px';
    };

    recalCulate
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);*/

