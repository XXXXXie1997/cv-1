let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*大家好，我是老咸鱼
*稍等一下
*先做个过渡免得太突兀
**/

*{
  transition:all .3s;
}

/*搞一个显示框
**/

#reader {
  padding: 0.5em;
  border: 1px solid;
  margin: 0.5em;
  overflow: auto;
  width: 45vw;
  height: 90vh;
  word-break: break-all;
}

/*好像字离框太近了？
**/

#html {
  margin: 15px;
}

/*这下感觉好多了
hmmmmmmm…………………………
*感觉白底太亮了有些刺眼？
*那我拉闸换个颜色吧 ^ -^  
**/

body{
  background-color: rgb(50, 50, 50);
  color: rgb(140, 220, 254);
}

/*好了，终于可以继续了:
*我是学习时长一个月的前端新人
*今天我来展示一下我的垃圾前端功底
*首先我要交作业，也就是先写一个div
 **/

#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 然后把 div 变成一个太极
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/* 太极生两仪，一阴一阳
 **/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 不太像啊。。。再改改
**/

#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/*好像还少了点什么
**/

#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

/*这下差不多了
*接下来我要将我平时学的东西也整理到这里来
*我再弄一个div
*然后我要让这个div变成一个红心
*步骤是这样滴：
*首先创建一个容器以存放内容
*将红心作为三个部分：左、右、底部分别进行拼接
**/

.bottom{
  background: red;
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
  border-radius: 8%
}

.left{
  background: red;
  width: 100px;
  height: 100px;
  position: absolute;
  transform: rotate(45deg) translateX(5px);
  bottom: 50px;
  left: -50px;
  border-radius: 50% 0 0 50%;
}

.right{
  background: red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  transform: rotate(45deg) translateY(5px);
  bottom: 50px;
  right: -50px;
  border-radius: 50% 50% 0 0;
}

/*声明一个动画关键帧
**/

@keyframes heart {
  100%{
    transform: scale(1.2);
  }
}

/*最后给点劲让心跳动起来就搞定了
**/

#heart{
  animation: .5s heart infinite alternate-reverse;
}

/*好了，心跳动起来了，接下来我们给底下的按钮也加一些细节
让这个按钮也变得炫酷起来
**/

a{
  background: linear-gradient(90deg, green, cyan, pink, yellowgreen);
  background-size: 400%;
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  text-transform: uppercase;
  border-radius: 50px;
  z-index: 1;
  animation: sun 5s infinite linear;
}

/*这个按钮边缘好像太突兀了，再来加一点点细节
**/

a::before {
  content: "";
  position: absolute;
  left: -5px;
  right: -5px;
  top: -5px;
  bottom: -5px;
  background: linear-gradient(90deg, green, cyan, pink, yellowgreen);
  background-size: 400%;
  border-radius: 50px;
  filter: blur(20px);
  z-index: -1;
  animation: sun 5s infinite linear;
}

/*然后让颜色流动起来
**/

@keyframes sun {
  100% {
    background-position: -400%;
  }
}

大功告成！！！
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    reader.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};

step();
