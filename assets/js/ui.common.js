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

var safeArea = {
	init: function(){
		$('header.header').prepend("<div class='header_before'></div>");
	}
}

var layoutHasClass = {
	init: function(){
		// 페이지
		($('.appnav').length) && this.hasPage('has_appnav'); // 네비게이션이 있을 때
		($('.container').find('.sticky').length) && this.hasPage('has_sticky'); // 스티키가 있을 때
		($('.container').find('.page_floating').length) && this.hasPage('has_floating'); // 하당고정 플로팅이 있을 때
		($('.container').find('.page_expand').length) && this.hasPage('has_expand'); // 하당고정 더보기가 있을 때
		($('.container').find('.comment_floating').length) && this.hasPage('has_comment'); // 하당고정 코멘트가 있을 때
		($('.container').find('.favorit_floating').length) && this.hasPage('has_favorit'); // 하당고정 관심분야가 있을 때

		// 모달공통(풀팝업, 버틈시트)
		($('.modal').find('.sticky').length) && this.hasModal('has_sticky'); // 스티키가 있을 때
		($('.modal').find('.page_action').length) && this.hasModal('has_floating'); // 하당고정 플로팅이 있을 때
		($('.modal').find('.comment_floating').length) && this.hasModal('has_comment'); // 하당고정 플로팅이 있을 때

	},
	hasPage: function(className){
		$('.container').parent().addClass(className); // main_wrapper, submain_wrapper, sub_wrapper
	},
	hasModal: function(className){
		$('.modal').addClass(className);
	},
}

var isSticky = {
	init: function(){
		var _this = this;
		if ($('.container').find('.sticky').length){
			_this.event($('.container').find('.sticky'));
			_this.update($('.container').find('.sticky'));
		}
		if ($('.modal').find('.sticky').length){
			_this.modalEvent($('.modal').find('.sticky'));
			_this.modalUpdate($('.modal').find('.sticky'));
		}
	},
	event: function($obj){
		var _this = this;
		$(window).on('scroll', function(){
			_this.update($obj);
		})
	},
	update: function($obj){
		var elePos = $obj.offset().top - $(window).scrollTop();
		var eleTop = parseInt($obj.css('top'));
		if (elePos <= eleTop) {
			$obj.addClass('is_sticky');
		} else {
			$obj.removeClass('is_sticky');
		}
	},
	modalEvent: function($obj){
		var _this = this;
		$('.modal_content').on('scroll', function(){
			_this.modalUpdate($obj);
		})
	},
	modalUpdate: function($obj){
		var elePos = $obj.offset().top - $('.modal_header').outerHeight();
		var eleTop = parseInt($obj.css('top'));
		if (elePos <= eleTop) {
			$obj.addClass('is_sticky');
		} else {
			$obj.removeClass('is_sticky');
		}
		console.log(elePos, eleTop);
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

		// 포커싱 상태
		inputLeft.classList.add('is_focused');
		inputRight.classList.remove('is_focused');
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

		// 포커싱 상태
		inputLeft.classList.remove('is_focused');
		inputRight.classList.add('is_focused');
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

var hasPlayerFixed = {
	init: function(){
		if ($('.has_player').length) {
			// 스티키 레이아웃 설정
			var breakStickyPos = ($('.content_head').outerHeight() * 0.1).toFixed(1);
			$('.container').css({'padding-top': breakStickyPos+'rem'});
			$('.sticky').css({'top': breakStickyPos+'rem'});
		}
	}
}

var badgeSample = {
	init: function(color, level, isPlus){
		// 값이 없을때 - 기본값 적용
		var valRgb = "#395088";
		var valColor = "navy";
		var valLevel = 1;
		var valIsPlus = "";

		// 값이 있을때 - 인자값 적용
		if (color !== undefined && color !== "" && color !== null) { valColor = color }
		if (level !== undefined && level !== "" && level !== null) { valLevel = level }
		if (isPlus !== undefined && isPlus !== false && isPlus !== null) { valIsPlus = isPlus }

		// Color
		if (color === "navy") { // AI/DT
			valRgb = "#395088";
		} else if (color === "yellow") { // 공통직무
			valRgb = "#fba82d";
		} else if (color === "green") { // 미래Biz
			valRgb = "#0c8f19";
		} else if (color === "red") { // 행복경영
			valRgb = "#ee5a45";
		} else if (color === "mint") { // BM Design
			valRgb = "#56c6c2";
		} else if (color === "brown") { // SK(주) C&C
			valRgb = "#dd6b49";
		}

		// Plus
		if (isPlus === true) { valIsPlus = "_plus" }

		// HTML
		var totalScore = '';
		var score = ''
		+'			<svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">'
		+'				<g fill="none" fill-rule="evenodd">'
		+'					<path d="M0 0h8v8H0z"/>'
		+'					<path d="m4.359.727.724 1.466a.4.4 0 0 0 .3.22l1.62.234a.4.4 0 0 1 .22.683L6.054 4.47a.4.4 0 0 0-.115.354l.276 1.612a.4.4 0 0 1-.58.422l-1.448-.761a.4.4 0 0 0-.372 0l-1.448.76a.4.4 0 0 1-.58-.42l.276-1.613a.4.4 0 0 0-.115-.354L.777 3.33a.4.4 0 0 1 .22-.683l1.62-.235a.4.4 0 0 0 .3-.219L3.641.727a.4.4 0 0 1 .718 0z" fill="'+ valRgb +'"/>'
		+'				</g>'
		+'			</svg>';

		for (var i = 0; i < valLevel; i++){
			totalScore += score;
		}
		var html = ''
		+'	<div class="badge_inner">'
		+'		<span class="badge_logo">'
		+'			<img src="../../assets/img/img_badge_logo_01.png" alt="" />'
		+'		</span>'
		+'		<span class="badge_channel">'
		+'			<img src="../../assets/img/img_badge_chanel_01.svg" alt="" />'
		+'		</span>'
		+'		<span class="badge_score">'
		+			totalScore
		+'		</span>'
		+'		<span class="badge_thumb">'
		+'			<img src="../../assets/img/badges_v2/img_badge_bg_'+ valColor + valIsPlus +'.svg" alt="" />'
		+'		</span>'
		+'	</div>';
		document.write(html);
	}
}

/* Ready */
$(function(){
	setStatusInit(); // 스크롤 상태 클래스
	layoutHasClass.init() // 레이아웃 구분 클래스
	safeArea.init() // Safe Area 공통처리
	tooltip.init(); // 툴팁 공통
	isSticky.init(); // Sticky 상태구분
	hasPlayerFixed.init(); // 플레이어 영역 고정
});
