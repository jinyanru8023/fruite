class Slider {
    constructor() {
        //获取大盒子
        this.big_box = $('#box');
        //获取所有大图li
        this.big_li = document.querySelectorAll('#top li');
        //获取所有小图ul
        this.small_ul = $('#small_ul');
        //获取所有小图li
        this.small_li = document.querySelectorAll('#bottom li');
        //当前下标
        this.index_cur = 0;
        //计时器返回值
        this.timer = null;
        //改变层级变量
        this.z_index = 1;
        //给小图设置宽度
        this.small_ul.style.width = this.small_li.length * this.small_li[0].offsetWidth + 'px';
        this.addEvent();
        this.init();
    }
    init() {
        this.big_li[this.index_cur].style.zIndex = ++this.z_index;
        if (this.index_cur === 0) {
            sport(this.small_ul, { left: 0 });
        } else if (this.index_cur === this.small_li.length - 1) {
            sport(this.small_ul, { left: -(this.small_li.length - 3) * this.small_li[0].offsetWidth })
        } else {
            sport(this.small_ul, { left: -(this.index_cur - 1) * this.small_li[0].offsetWidth });
        }
        for (let i = 0, len = this.small_li.length; i < len; i++) {
            sport(this.small_li[i], { opacity: 50 });
        }
        sport(this.small_li[this.index_cur], { opacity: 100 });
    }
    addEvent() {
        let that = this;
        for (let i = 0, len = this.small_li.length; i < len; i++) {
            this.small_li[i].onmouseenter = function () {
                sport(this, { opacity: 100 });
            }
            this.small_li[i].onmouseleave = function () {
                if (that.index_cur !== i) {
                    sport(this, { opacity: 50 });
                }
            }
            this.small_li[i].onclick = function () {
                this.index_cur = i;
                //调用
                this.init();
            }.bind(this);
        }
    }
}
new Slider();

//工具
function $(selector) {
    return document.querySelector(selector);
}