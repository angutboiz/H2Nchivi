$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(); // Lấy vị trí cuộn hiện tại
        if (scroll >= 3) {
            $(".top-detail").addClass("d-none");
        } else {
            $(".top-detail").removeClass("d-none");
        }
    });
});
