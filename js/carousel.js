$(function(){

	var prevv = $('#prev');
	var nextv = $('#next');

	// 经过分类导航时，隐藏轮播图箭头
	$(".shopClass_item").mouseover(function() {
		prevv.animate({
			left: '-50px'
		}, 300);
		nextv.animate({
			right: '-50px'
		}, 300);
	})


	// 鼠标经过轮播区域时
	$('#scroll').hover(function() {
		prevv.animate({
			left: '0px'
		}, 300);
		nextv.animate({
			right: '0px'
		}, 300);
	}, function() {
		prevv.animate({
			left: '-22px'
		}, 300);
		nextv.animate({
			right: '-22px'
		}, 300);
	})



	var animated = false;
	var ul = document.getElementById('imgBox');

	function animate(offset) {

		if (offset == 0) {
			return;
		}
		animated = true;
		var time = 300;
		var interval = 10;
		var speed = offset / (time / interval);
		var left = parseInt(ul.style.left) + offset;

		var go = function() {

			if ((speed > 0 && parseInt(ul.style.left) < left) || (speed < 0 && parseInt(ul.style.left) > left)) {
				ul.style.left = parseInt(ul.style.left) + speed + 'px';
				setTimeout(go, interval);

			} else {

				ul.style.left = left + 'px';

				if (left > -810) {
					ul.style.left = -810 * 6 + 'px';
				}
				if (left < (-810 * 6)) {
					ul.style.left = '-810px';
				}

				animated = false;

			}
		}
		go();
	}


	// 点击箭头时
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	next.onclick = function() {
		if (animated) {
			return;
		}
		if (index == 6) {
			index = 1;
		} else {
			index += 1;
		}

		showButton();
		animate(-810);
		// ul.style.left = parseInt(ul.style.left) - 810 + 'px';
	}
	prev.onclick = function() {
		if (animated) {
			return;
		}
		if (index == 1) {
			index = 6;
		} else {
			index -= 1;
		}

		showButton();
		animate(810);
		// ul.style.left = parseInt(ul.style.left) + 810 + 'px';
	}


	// 点击方块时
	var index = 1;
	var buttons = document.getElementById('buttons').getElementsByTagName('a');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onmouseover = function() {
			if (this.className == 'active') {
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			// console.log(myIndex);
			// console.log(index)
			// return;
			var offset = -810 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		}
	}


	// 亮起小方块
	function showButton() {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == 'active') {
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'active';
	}


	// 自动播放
	var timer;
	function play() {
		timer = setTimeout(function() {
			next.onclick();
			play();
		}, 3000);
	}

	function stop() {
		clearTimeout(timer);
	}

	var container = document.getElementById('scroll');
	container.onmouseover = stop;
	container.onmouseout = play;

	play();

});
