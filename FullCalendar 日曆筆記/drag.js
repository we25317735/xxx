// 获取要拖动的元素
const draggableBox = document.querySelector('.box');
const draggableSetting = document.querySelector('#setting');

// 存储拖拽元素的偏移值
let offsetXBox = 0;
let offsetYBox = 0;

let offsetXSetting = 0;
let offsetYSetting = 0;

// 添加拖拽开始事件处理程序
draggableBox.addEventListener('dragstart', (e) => {
    offsetXBox = e.clientX - draggableBox.getBoundingClientRect().left;
    offsetYBox = e.clientY - draggableBox.getBoundingClientRect().top;
});

draggableSetting.addEventListener('dragstart', (e) => {
    offsetXSetting = e.clientX - draggableSetting.getBoundingClientRect().left;
    offsetYSetting = e.clientY - draggableSetting.getBoundingClientRect().top;
});

// 添加拖拽结束事件处理程序
draggableBox.addEventListener('dragend', (e) => {
    const newX = e.clientX - offsetXBox;
    const newY = e.clientY - offsetYBox;
    draggableBox.style.left = newX + 'px';
    draggableBox.style.top = newY + 'px';
});

draggableSetting.addEventListener('dragend', (e) => {
    const newX = e.clientX - offsetXSetting;
    const newY = e.clientY - offsetYSetting;
    draggableSetting.style.left = newX + 'px';
    draggableSetting.style.top = newY + 'px';
});
