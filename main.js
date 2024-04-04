$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var ani = "animate__animated animate__";
        scroll >= 3 ? $(".top-detail").addClass("d-none") : $(".top-detail").removeClass("d-none");

        //index.html
        scroll >= 200 ? $(".animate-1").addClass(`${ani}bounceInLeft`) : "";

        scroll >= 500 ? $(".quytrinh-1").addClass(`${ani}bounceInUp`) : "";
        scroll >= 600 ? $(".quytrinh-2").addClass(`${ani}bounceInUp`) : "";
        scroll >= 700 ? $(".quytrinh-3").addClass(`${ani}bounceInUp`) : "";
        scroll >= 800 ? $(".quytrinh-4").addClass(`${ani}bounceInUp`) : "";
        scroll >= 900 ? $(".quytrinh-5").addClass(`${ani}bounceInUp`) : "";
        scroll >= 1000 ? $(".quytrinh-6").addClass(`${ani}bounceInUp`) : "";
        scroll >= 1100 ? $(".quytrinh-7").addClass(`${ani}bounceInUp`) : "";

        //dichvu.html
        scroll >= 300 ? $(".dichvu-1").addClass(`${ani}bounceInUp`) : "";

        scroll >= 1100 ? $(".dichvu-left").addClass(`${ani}bounceInLeft`) : "";
        scroll >= 1100 ? $(".dichvu-right").addClass(`${ani}bounceInRight`) : "";

        scroll >= 1700 ? $(".phituychon").addClass(`${ani}bounceInUp`) : "";
        scroll >= 2000 ? $(".camket").addClass(`${ani}bounceInUp`) : "";

        scroll >= 2500 ? $(".thanhtoanho-left").addClass(`${ani}bounceInLeft`) : "";
        scroll >= 2500 ? $(".thanhtoanho-right").addClass(`${ani}bounceInRight`) : "";

        scroll >= 3000 ? $(".dichvu-2").addClass(`${ani}bounceInUp`) : "";
    });
});
