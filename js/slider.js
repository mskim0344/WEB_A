$(document).ready(function(){
    
    // 좌우슬라이드 제작 css먼저 수정하고 진행

    // 위아래 슬라이드
    // $("#slider ul").animate({ "marginTop" : -300 },400)
    // 하이푼을 사용하지 못한다 그래서 스펠링을 붙이고 대문자로 기입한다.
    // setInterval(function(){
    //     $("#slider ul").animate({ "marginTop" : -300 },400, function(){
    //         $("#slider li").eq(0).appendTo($("#slider ul"));
    //         $("#slider ul").css("marginTop",0)            
    //     })
    // }, 3000)

    // setInterval(function(){
    //     $("#slider ul").animate({"marginLeft" : -1200},400, function(){
    //         $("#slider li").eq(0).appendTo($("#slider ul"));
    //         $("#slider ul").css("margin-left",0).addClass("d-flex")
    //     })
    // },3000)



    // setInterval(function(){
    //     count++;
    //     count %= 3;
    //     $("#slider li").eq(count).addClass('show').siblings().removeClass('show')
    // }, 3000)

    
    // $("#maincon h3").click(function(){
    //     $(this).parent().addClass('on').siblings().removeClass(`on`)
    // })
    // $("#triggler").click(function(){
    //     $("#modal").removeClass("d-none")
    // })
    // $("#modal button").click(function(){
    //     $("#modal ").addClass("d-none")
    // })
    
    var count= 0;
    setInterval(function(){
        count++;
        count %= 3;
        $("#fadeAni div").eq(count).addClass("on").siblings().removeClass('on')
    }, 1000)
    
    
})
