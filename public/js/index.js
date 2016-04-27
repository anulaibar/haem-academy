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
    var days = document.getElementsByClassName('days')[0];
    var hours = document.getElementsByClassName('hours')[0];
    var minutes = document.getElementsByClassName('minutes')[0];

    function updateClock() {
        var t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = ('0' + t.hours).slice(-2);
        minutes.innerHTML = ('0' + t.minutes).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000 * 60);
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
        if(window.pageYOffset > 1200) {
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
        el.className = 'animate visible';
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
function showCalendar(){
    var field = document.getElementsByClassName('calendar')[0];
    var picker = new Pikaday({
        onSelect: function(date) {
                field.value = picker.toString();
            }
    });
    field.parentNode.insertBefore(picker.el, field.nextSibling);
}
var deadline = new Date('2016-06-25T08:00');
initializeClock('clock', deadline);
showDialog();
closeDialog();
handleScroll();
loadVideo();
showCalendar();
