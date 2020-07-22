var items = document.getElementsByClassName('item') // 点
var goPreBtn = document.getElementById('goPre')
var goNextBtn = document.getElementById('goNext')
var points  = document.getElementsByClassName('point') //图片

var index = 0 ;//表示第几张图片索引

// 清除 active
var clearActive = function(){
    for (var i =0; i <items.length ; i++) {
        items[i].className ='item';
    }
    for (var i =0; i <points.length ; i++) {
        points[i].className ='point';
    }
}

// 跳转下一张图片
var goIndex = function(){
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';

}

var goNext = function(){
    if (index < 2){
        index ++
    } else{
        index = 0
    }
    goIndex();
}

var goPre = function(){
    if (index== 0){
        index = 2 
    } else{
        index--
    }
    goIndex();
}

// 添加下一张事件
goNextBtn.addEventListener('click',function(){
    goNext()
})

// 添加上一张事件
goPreBtn.addEventListener('click',function(){
    goPre()
} )
