/**
 * requestAnimationFrame动画
 */
//firefox版本
// function draw(timestamp) {
//     console.log("一次动画开始")
//         //计算两次重绘的时间间隔
//     var diff = timestamp - startTime;

//     var startTime = timestamp;
//     mozRequestAnimationFrame(draw);
//     console.log("一次动画结束")
// }
// var startTime = new Date();
// mozRequestAnimationFrame(draw);

//通用版
// (function() {
//     function draw(timestamp) {
//         console.log("start");
//         var drawStart = (timestamp || Date.now()),
//             diff = drawStart - startTime;

//         resquestAnimationFrame(draw);
//         console.log("end")
//     }

//     var resquestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
//         startTime = window.mozAnimationStartTime || Date.now();
//     requestAnimationFrame(draw);
// })()

/**
 * PageVisibility API
 */
/*function isHiddenSupported() {
    return typeof(document.hidden || document.msHidden || document.webkitHidden) != "undefined";
}
console.log(isHiddenSupported());*/

/*function handleVisibilityChange() {
    var output = document.getElementById("output"),
        msg = "";

    if (document.hidden || document.msHidden || document.webkitHidden) {
        msg = "page is hidden," + (new Date()) + '<br/>';
    } else {
        msg = "page is visible now," + (new Date()) + '<br/>';
    }
    output.innerHTML += msg;

}
document.addEventListener("webkitvisibilitychange", handleVisibilityChange);*/

/**
 * Geolocation API
 */
//定位
/*navigator.geolocation.getCurrentPosition(function(position) {
    var output = document.getElementById('output');

    output.innerHTML += 'latitude:' + position.corrds.latitude;
    output.innerHTML += 'longitude' + position.coords.longitude;
}, function(error) {
    console.log("ERROR CODE:" + error.code);
    console.log('Error message:' + error.message);
}, {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 2500000
})*/

//跟踪位置
/*var watchId = navigator.geolocation.watchPosition(function(position) {
    var output = document.getElementById('output');

    output.innerHTML += 'latitude:' + position.corrds.latitude;
    output.innerHTML += 'longitude' + position.coords.longitude;
}, function(error) {
    console.log("ERROR CODE:" + error.code);
    console.log('Error message:' + error.message);
})*/


/**
 *File API 
 */