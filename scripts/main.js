let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

document.querySelector('p').onclick = function(){
    alert('别戳我，我怕疼!');//点击<p> 标签的内容弹出弹窗，内容为（）内的内容
}
//设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/physics.jpg') {
        myImage.setAttribute('src', 'images/fractal.jpg');
    } else {
        myImage.setAttribute('src', 'images/physics.jpg');
    }
}
// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
// 个性化欢迎信息设置函数
function setUserName () {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你好，' + myName;
    }
}
// 初始化代码：在页面初次读取时进行构造工作
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
// 为按钮设置 onclick 事件处理
myButton.onclick = function() {
    setUserName();
}