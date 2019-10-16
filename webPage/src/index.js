$(function () {

    function desplazar(element) {

        if (location.pathname.replace(/^\//, '') == element.pathname.replace(/^\//, '')
            && location.hostname == element.hostname) {
            var $target = $(element.hash);
            $target = $target.length && $target || $('[name=' + element.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset });
                return false;
            }
        }
    }

    $("#btnPage4").click(function () {
        var element = this;
        $("#page1").fadeOut();
        $("#page2").fadeOut();
        $("#page3").fadeOut();
        $("#page4").fadeIn(2000);
        setTimeout(function () {
            desplazar(element);
        }, 500);
    });

    $(".btnPage1").click(function () {
        var element = this;
        $("#page2").fadeOut();
        $("#page3").fadeOut();
        $("#page4").fadeOut();
        $("#page1").fadeIn(2000);
        setTimeout(function () {
            desplazar(element);
        }, 500);
    });

    $(".btnPage2").click(function () {
        var element = this;
        $("#page1").fadeOut();
        $("#page3").fadeOut();
        $("#page4").fadeOut();
        $("#page2").fadeIn(2000);
        setTimeout(function () {
            desplazar(element);
        }, 500);
    });

    $(".btnPage3").click(function () {
        var element = this;
        $("#page1").fadeOut();
        $("#page2").fadeOut();
        $("#page4").fadeOut();
        $("#page3").fadeIn(2000);
        setTimeout(function () {
            desplazar(element);
        }, 500);
    });

    $('#btnPage4, .btnPage1, .btnPage2, .btnPage3').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

new Chart(document.getElementById("myChart"), {
    type: 'doughnut',
    data: {
        labels: ["", "", ""],
        datasets: [
            {
                backgroundColor: ["#d63642", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [60, 25, 15]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            labels: {
                render: 'percentage',
                fontColor: ['white'],
                precision: 2
            }
        }
    }
});
