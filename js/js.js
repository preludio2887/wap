$(function() {
    // 첫 번째 버튼의 클릭 이벤트 핸들러
    $(".fpp").click(function() {
        $(".fpopup").show();
    });

    // 첫 번째 팝업의 닫기 버튼 클릭 이벤트 핸들러
    $(".fpopup button").click(function() {
        $(".fpopup").hide();
    });

    // 두 번째 버튼의 클릭 이벤트 핸들러
    $(".gpp").click(function() {
        $(".gpopup").show();
    });

    // 두 번째 팝업의 닫기 버튼 클릭 이벤트 핸들러
    $(".gpopup button").click(function() {
        $(".gpopup").hide();
    });

    // 세 번째 버튼의 클릭 이벤트 핸들러
    $(".rpp").click(function() {
        $(".rpopup").show();
    });

    // 세 번째 팝업의 닫기 버튼 클릭 이벤트 핸들러
    $(".rpopup button").click(function() {
        $(".rpopup").hide();
    });

    // 네 번째 버튼의 클릭 이벤트 핸들러
    $(".app").click(function() {
        $(".apopup").show();
    });

    // 네 번째 팝업의 닫기 버튼 클릭 이벤트 핸들러
    $(".apopup button").click(function() {
        $(".apopup").hide();
    });

    // 모든 팝업을 닫는 공통 버튼의 클릭 이벤트 핸들러
    $(".popup button").click(function() {
        $(".popup").hide();
    });

    // 나머지 기능들은 그대로 유지됩니다.
    $(".nav > ul > li").mouseover(function() {
        $(this).find(".sub").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function() {
        $(this).find(".sub").stop().slideUp();
    });

    $(".nav > ul > li").focusin(function() {
        $(this).find(".sub").stop().slideDown();
    });

    $(".nav > ul > li").focusout(function() {
        $(this).find(".sub").stop().slideUp();
    });

    var n = 0;

    function slider() {
        var totalSlides = $(".slider ul li").length;
        $(".slider ul li").eq(n).fadeOut(1000);
        n = (n + 1) % totalSlides;
        $(".slider ul li").eq(n).fadeIn(1000);
    }

    $(".slider ul li").hide(); // 모든 슬라이드 숨기기
    $(".slider ul li").eq(0).show(); // 첫 번째 슬라이드 보이기

    setInterval(slider, 2000);
});