$(function(){
  //window객체에서 scroll이벤트 발생시
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();//스크롤 이동값을 변수 scroll에 할당
    var worksTop = $("#portfolio div:nth-child(3)").offset().top;//worksTop변수에 .works의 top위치값을 저장

    //스크롤 이동시 top버튼 표시
    if(scroll > 50){//scroll이동값이 50보다 크면
      $(".top").css("display","block");//top버튼 표시
    }else{//scroll이동값이 50보다 작으면
      $(".top").css("display","none")//top버튼 제거
    }
  });

  
  $(".btn").click(function(){
    //변수에 클릭한 버튼의 data-rel값을 알당
    var selectedClass = $(this).attr("data-rel");
    //#portfolio요소의 투명도를 0.1초에 걸쳐 0.1로 변경
    $("#portfolio").fadeTo(100,0.1);

    //클래스가 selectedClass인 요소를 제외한 모든 컨텐츠를 fadeOut메서드로 화면에서 사라지게 만들고 scale-content클래스를 제거하여 scale(0)으로 변경
    $("#portfolio > div").not("."+selectedClass).fadeOut().removeClass("scale-content");

    //지연시간(0.3초) 후 한번만 함수를 호출
    setTimeout(function(){
      //클래스가 selectedClass인 요소를 fadeIn메서드로 화면에 나타나게 하고 scale-content클래스를 추가하여 scale(0)에서 1로 0.3초동안 커지면서 나타나게 합니다..
      $("."+selectedClass).fadeIn().addClass("scale-content");
      //#portfolio요소도 투명도를 1로 0.3초동안 변경합니다.
      $("#portfolio").fadeTo(300,1);
    },300)
  })

})