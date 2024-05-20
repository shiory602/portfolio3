$(function () {

  //ページ内スクロール
  var navHeight = $(".gnav").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

////////////////////
/* ハンバーガーmenu */
////////////////////
// 追従ナビ・スマホでハンバーガーメニューになる
$(".nav_toggle").on("click", function () {
  $(".nav_toggle, .nav").toggleClass("show");
});
$(".nav_menu_li").on("click", function () {
  $(".nav_toggle, .nav").toggleClass("show");
});
