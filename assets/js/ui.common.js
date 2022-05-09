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

var layoutHasClass = {
	init: function(){
		// 페이지
		($('.container').find('.appnav').length) && this.hasPage('has_appnav'); // 네비게이션이 있을 때
		($('.container').find('.sticky').length) && this.hasPage('has_sticky'); // 스티키가 있을 때
		($('.container').find('.page_floating').length) && this.hasPage('has_floating'); // 하당고정 플로팅이 있을 때
		($('.container').find('.page_expand').length) && this.hasPage('has_expand'); // 하당고정 더보기가 있을 때
		($('.container').find('.comment_floating').length) && this.hasPage('has_comment'); // 하당고정 코멘트가 있을 때
		($('.container').find('.favorit_floating').length) && this.hasPage('has_favorit'); // 하당고정 관심분야가 있을 때

		// 모달공통(풀팝업, 버틈시트)
		($('.modal').find('.sticky').length) && this.hasModal('has_sticky'); // 스티키가 있을 때
		($('.modal').find('.page_floating').length) && this.hasModal('has_floating'); // 하당고정 플로팅이 있을 때
		($('.modal').find('.comment_floating').length) && this.hasModal('has_comment'); // 하당고정 플로팅이 있을 때

	},
	hasPage: function(className){
		$('.container').parent().addClass(className); // main_wrapper, submain_wrapper, sub_wrapper
	},
	hasModal: function(className){
		$('.modal').addClass(className);
	},
}

// Range Multiple
function RangeMultiple(){
	const inputLeft = document.getElementById("input-left");
	const inputRight = document.getElementById("input-right");
	const thumbLeft = document.querySelector(".slider > .thumb.left");
	const thumbRight = document.querySelector(".slider > .thumb.right");
	const range = document.querySelector(".slider > .range");
	const setLeftValue = () => {
		const _this = inputLeft;
		const [min, max] = [parseInt(_this.min), parseInt(_this.max)];

		// 교차되지 않게, 1을 빼준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해.
		_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

		// input, thumb 같이 움직이도록
		const percent = ((_this.value - min) / (max - min)) * 100;
		thumbLeft.style.left = percent + "%";
		range.style.left = percent + "%";
	};

	const setRightValue = () => {
		const _this = inputRight;
		const [min, max] = [parseInt(_this.min), parseInt(_this.max)];

		// 교차되지 않게, 1을 더해준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해.
		_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

		// input, thumb 같이 움직이도록
		const percent = ((_this.value - min) / (max - min)) * 100;
		thumbRight.style.right = 100 - percent + "%";
		range.style.right = 100 - percent + "%";
	};

	inputLeft.addEventListener("input", setLeftValue);
	inputRight.addEventListener("input", setRightValue);
}

// Tooltip
var tooltip = {
	init: function(){
		if ($('.tooltip').length){
			$(document).off('click.tooltip').on('click.tooltip', function(e){
				$('.tooltip').each(function(){
					var $tooltip = $(this);
					// 툴팁을 클릭하지 않은 경우
					($tooltip.has(e.target).length === 0 && $tooltip.hasClass('is_visible')) && tooltip.close($tooltip);

					// open 툴팁을 클릭한 경우
					($tooltip.has(e.target).length > 0 && $tooltip.hasClass('is_visible')) && tooltip.close($tooltip);

					// close 툴팁을 클릭한 경우
					($tooltip.has(e.target).length > 0 && !$tooltip.hasClass('is_visible')) && tooltip.open($tooltip);
				})
			})
		}
	},
	open: function($tooltip){
		$tooltip.addClass("is_visible is_active");
	},
	close: function($tooltip){
		$tooltip.on('transitionend', function(){
			(!$tooltip.hasClass('is_active')) && $tooltip.removeClass("is_visible");
		}).removeClass("is_active");
	},
}

/* Ready */
$(function(){
	setStatusInit(); // 스크롤 상태 클래스
	layoutHasClass.init() // 레이아웃 구분 클래스
	tooltip.init(); // 툴팁 공통
});
