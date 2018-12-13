$(document).ready(function() {
    flag1 = true;
    flag2 = true;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function getTime() {
        const data1 = new Date();
        const date = (addZero(data1.getDate()) + '.' + addZero((data1.getMonth() + 1)) + '.' + addZero((data1.getYear() - 100)));
        $('.date').html(date);
        const data2 = new Date();
        const time = (addZero(data2.getHours()) + ':' + addZero(data2.getMinutes()));
        $('.time').html(time);
        changeVideo();
    }
    getTime();
    setInterval(getTime, 1000);

    function changeVideo() {
        const change = new Date();
        replaceVideo = change.getHours();
        if (replaceVideo > 0 && replaceVideo < 14 && flag1 == true) {
            $('video').replaceWith('<video width="100%" id="v1" autoplay muted loop="loop"><source src="./video/video1.mp4" type="video/mp4"></source></video>');
            flag1 = false;
            flag2 = true;
        } else if (replaceVideo >= 14 && replaceVideo < 24 && flag2 == true) {
            $('video').replaceWith('<video width="100%" id="v1" autoplay muted loop="loop"><source src="./video/video2.mp4" type="video/mp4"></source></video>');
            flag1 = true;
            flag2 = false;
        }
    }
    $.ajax({
        url: "http://cbc-auto.kz/site/w",
        dataType: 'JSONP',
        type: 'GET',
        success: function(data) {
            console.log(data);
        }
    });
})