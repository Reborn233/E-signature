// getUserMedia 被标准废除了，mediaDevices 正在取代中
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
}
if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
        });
    }
}
window.URL = (window.URL || window.webkitURL || window.mozURL || window.msURL);

// export const getUserMedia = (constraints, success, error) => {
//
//     // if (navigator.mediaDevices.getUserMedia) {
//     //     //最新的标准API
//     //     navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
//     // } else if (navigator.webkitGetUserMedia) {
//     //     //webkit核心浏览器
//     //     navigator.webkitGetUserMedia(constraints, success, error)
//     // } else if (navigator.mozGetUserMedia) {
//     //     //firfox浏览器
//     //     navigator.mozGetUserMedia(constraints, success, error);
//     // } else if (navigator.getUserMedia) {
//     //     //旧版API
//     //     navigator.getUserMedia(constraints, success, error);
//     // }
// };