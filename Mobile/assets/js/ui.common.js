//Scrolls
var scrTop			= null,		//스크롤 현재위치
	scrTopStart		= null,		//스크롤 시작위치
	scrTopEnd		= null,		//스크롤 종료위치
	isScrFirst		= null,		//스크롤 처음여부
	isScrLast		= null,		//스크롤 마지막여부
_;

/* 상태 설정 */
function setStatusInit(){
	scrTop = scrTopStart = $(window).scrollTop(); // 스크롤 현재상태
	setPosition(scrTop);
	setScrolled();
	setResized();
}

// 스크롤 현재상태 설정
function setPosition(val){
	//스크롤 처음확인
	if (val === 0){
		$('body').addClass('is_scroll_first');
	} else {
		$('body').removeClass('is_scroll_first');
	}
	//스크롤 여부 확인
	if (val > 0){
		$('body').addClass('is_scrolled');
	} else {
		$('body').removeClass('is_scrolled');
	}
	//스크롤 마지막확인
	if (val + $(window).outerHeight() === $(document).height()){
		$('body').addClass('is_scroll_last');
	} else {
		$('body').removeClass('is_scroll_last');
	}
}

// 스크롤 진행방향 설정
function setScrolled(){
	var scrollEndTime;
	var isScrolled = false;
	var oldScrTop = scrTop;
	$(window).off('scroll.customEvent').on('scroll.customEvent', function(){
		var curScrTop = $(window).scrollTop();

		//스크롤 방향
		if (oldScrTop > curScrTop){
			$('body').addClass('is_scroll_up').removeClass('is_scroll_down');
		} else if (oldScrTop < curScrTop){
			$('body').addClass('is_scroll_down').removeClass('is_scroll_up');
		}
		oldScrTop = curScrTop;

		//스크롤 종료 (마지막 스크롤방향 상태 유지, 최종 상태 저장)
		clearTimeout(scrollEndTime);
		scrollEndTime = setTimeout(function(){
			isScrolled = false;
			scrTop = scrTopEnd = curScrTop;
		}, 100);

		setPosition(curScrTop);
	});
}

// 리사이징 진행상태 설정
function setResized(){
	//Resized
	var resizeEndTime;
	$(window).off('resize.customEvent').on('resize.customEvent', function(){
		clearTimeout(resizeEndTime);
		resizeEndTime = setTimeout(function(){
			$(window).trigger('resizeEnd');
		}, 100);
	});
}

// Set AppNav
function setAppNav(idx){
	$('.appnav').children().eq(idx-1).addClass('is_active');
}

/* Ready */
$(function(){
	setStatusInit(); // 상태 설정
});
