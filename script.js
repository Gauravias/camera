var ele = document.querySelector('.out-container');

function toggleOnClass() {
    if (ele.classList.contains('on')) {
        ele.classList.remove('on');
        ele.classList.add('off');
    } else {
        ele.classList.remove('off');
        ele.classList.add('on');
    }
}

ele.addEventListener('animationend', function() {
    ele.classList.remove('off');
});
window.addEventListener('load', function () {
    document.body.classList.add('page-loaded');
});