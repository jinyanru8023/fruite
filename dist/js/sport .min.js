function getStyle(obj,attr){
    return window.getComputedStyle ? getComputedStyle(obj,1)[attr] : obj.currentStyle[atrr];

}
function sport(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(()=>{
        let flag = true;
        for(let attr in json){
            let cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
            let speed = (json[attr] - cur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(cur !== json[attr]){
                flag = false;
            }
            if(attr === 'opacity'){
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
            }else{
                obj.style[attr] = cur + speed + 'px';
            }
        }
        if(falg){
            clearInterval(obj.timer);
            if(fn instanceof Function){
                fn();
            }
        }
    },30)
}