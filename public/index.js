function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        //secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
function showDialog() {
    var dialog = document.getElementById('dialog');
    dialog.classList.remove('closed');
}
function closeDialog() {
    var dialog = document.getElementById('dialog');
    dialog.classList.add('closed');
    document.body.classList.remove('hide-overflow');
}
function handleScroll() {
    var els = document.getElementsByClassName('animate');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 460) {
            showImage(els[0]);
            setTimeout(function(){
                showImage(els[1]);
            }, 300);
            setTimeout(function(){
                showImage(els[2]);
            }, 600);
            setTimeout(function(){
                showImage(els[3]);
            }, 900);
        }
    });
}
function showImage(el) {
    if(el.className.indexOf('visible') === -1) {
        el.className = 'fi animate visible';
    }
}
function loadVideo(){
    if(document.body.clientWidth > 800) {
        var source = document.getElementsByTagName('source')[0];
        source.setAttribute('src', source.getAttribute('data-src'));
        var video = document.getElementsByTagName('video')[0];
        video.load();
    }
}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clock', deadline);
showDialog();
closeDialog();
handleScroll();
loadVideo();
