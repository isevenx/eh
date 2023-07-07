$(".wl-radio-field").on("click",function(){
	var rt = $(this).attr("rt");
	$("#w-tabs-0-data-w-tab-"+rt).trigger("click");
});

$(".resources--tag").on("click",function(){
	rtag = $(this).attr("rt");
  rtc = $(this).attr("rtc");
  if (rtag !== ""){
		$("#w-tabs-0-data-w-tab-"+rtag).trigger("click");
  }
  if (rtc !== ""){
		  $(".wl-radio-field[rtcc="+rtc+"]").trigger("click");
  }

  $('html, body').animate({
      scrollTop: ($('#tab-content').offset().top - 150)
  },500);

});

$(".wl-radio-field").on("click",function(){
	$(this).siblings().removeClass("wl-current");
  $(this).addClass("wl-current")  
});


$(".wl-radio-field[rt=0]").trigger("click");
$(".wl-radio-field[rt=0] .wl-radio-button").addClass("w--redirected-focus");
