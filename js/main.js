$(function(){
  function slideImg1(){//slideImg 함수를 생성
    var now = $(".imgs01 > img:first"); //변수 now에 첫번쨰 img요소를 할당
    $(".imgs01").stop().animate({"left":"-880px"},1900,function(){
      //.imgs에 animate함수를 적용 left를 -600px(이미지 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
      $(this).append(now).css("left","0px");
      //애니메이션 기능이 모두 종료된 후 첫번째 이미지를 마지막 위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비 
    })      
  }
  var timer = setInterval(slideImg1,3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.

  //next버튼 클릭시 
  $(".next01").click(function(){ //.next버튼 클릭시
    if($(".imgs01").is(":animated")) return false;
    //if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다. (결과적으로 animate가 중복으로 실행되지 않는다.)
    var now = $(".imgs01 > img:first");
    $(".imgs01").animate({"left":"-880px"},500,function(){
      $(this).append(now).css("left","0px");        
    })
  })

  //prev버튼 클릭시
  $(".prev01").click(function(){
    if($(".imgs01").is(":animated")) return false;
    var last = $(".imgs01 > img:last");//마지막 이미지 요소를 last변수에 할당
    $(".imgs01").prepend(last).css("left","-880px").animate({"left":0},500);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션 효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
  })

  function slideImg2(){//slideImg 함수를 생성
    var now = $(".imgs02 > img:first"); //변수 now에 첫번쨰 img요소를 할당
    $(".imgs02").stop().animate({"left":"-880px"},1500,function(){
      //.imgs에 animate함수를 적용 left를 -600px(이미지 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
      $(this).append(now).css("left","0px");
      //애니메이션 기능이 모두 종료된 후 첫번째 이미지를 마지막 위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비 
    })      
  }
  var timer = setInterval(slideImg2,3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.

  //next버튼 클릭시 
  $(".next02").click(function(){ //.next버튼 클릭시
    if($(".imgs02").is(":animated")) return false;
    //if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다. (결과적으로 animate가 중복으로 실행되지 않는다.)
    var now = $(".imgs02 > img:first");
    $(".imgs02").animate({"left":"-880px"},500,function(){
      $(this).append(now).css("left","0px");        
    })
  })

  //prev버튼 클릭시
  $(".prev02").click(function(){
    if($(".imgs02").is(":animated")) return false;
    var last = $(".imgs02 > img:last");//마지막 이미지 요소를 last변수에 할당
    $(".imgs02").prepend(last).css("left","-880px").animate({"left":0},500);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션 효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
  })

  function slideImg3(){//slideImg 함수를 생성
    var now = $(".imgs03 > img:first"); //변수 now에 첫번쨰 img요소를 할당
    $(".imgs03").stop().animate({"left":"-880px"},1150,function(){
      //.imgs에 animate함수를 적용 left를 -600px(이미지 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
      $(this).append(now).css("left","0px");
      //애니메이션 기능이 모두 종료된 후 첫번째 이미지를 마지막 위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비 
    })      
  }
  var timer = setInterval(slideImg3,3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.

  //next버튼 클릭시 
  $(".next03").click(function(){ //.next버튼 클릭시
    if($(".imgs03").is(":animated")) return false;
    //if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다. (결과적으로 animate가 중복으로 실행되지 않는다.)
    var now = $(".imgs03 > img:first");
    $(".imgs03").animate({"left":"-880px"},500,function(){
      $(this).append(now).css("left","0px");        
    })
  })

  //prev버튼 클릭시
  $(".prev03").click(function(){
    if($(".imgs03").is(":animated")) return false;
    var last = $(".imgs03 > img:last");//마지막 이미지 요소를 last변수에 할당
    $(".imgs03").prepend(last).css("left","-880px").animate({"left":0},500);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션 효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
  })
});   