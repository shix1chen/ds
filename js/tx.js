$(function() {

	// 点击登录 
	$("#login").click(function() {

		// 初始化
		$("#fullbg").removeClass('hide');
		$('.content').css({
			"transform": "scale(1,1)"
		});

		$('#username').css({
			"transform": "scale(1,1)",
			"box-shadow": "0px 0px 10px #fff"
		});

		$('#password').css({
			"transform": "scale(1,1)"
		});
		
		$("#signIn").css("display", "none");

		// 显示遮罩层
		var bh = $("html").height(); //console.log(bh);
		var bw = $("html").width(); //console.log(bw);
		$("#fullbg").css({
			height: bh,
			width: bw,
			opacity: .6
		});

		// 计算弹出层位置
		var browserwidth = $(window).width(); // console.log(browserwidth);
		var browserheight = $(window).height(); // console.log(browserheight); 
		var scrollLeft = $(window).scrollLeft(); // console.log(scrollLeft);
		var scrollTop = $(window).scrollTop(); // console.log(scrollTop);
		var winwidth = $(".window").width(); // console.log(winwidth);
		var winheight = $(".window").height(); // console.log(winheight);
		var left = scrollLeft + (browserwidth - $(".window").width()) / 2; // console.log(left);
		var top = scrollTop + (browserheight - $(".window").height()) / 2; // console.log(top);

		// 显示弹出层
		$(".window").css({
			"left": left + 'px',
			"top": top + "px",
			"transform": "scale(1,1)",
			'opacity': '1',
			"box-shadow": "0px 0px 100px #fff"
		})

		$('#username,#password').animate({
			left: '45px',
			opacity: 1
		}, 1000, function() {
			$('.title').animate({
				top: '0px',
				opacity: 1
			}, 600, function() {
				$('#signBox').animate({
					top: '284px',
					opacity: 1
				}, 600, function() {
					$('#center').css({
						"box-shadow": "0px 0px 10px #fff"
					});
					$("#signIn").slideDown(300);
					$('#xiaci').slideDown(600);
					$('#username').focus();
				})
			})
		})
	})

	// 点击关闭
	$(".x").click(function() {

		$('#xiaci').slideUp(600);
		$('.title').animate({
			top: '-120px',
			opacity: 0
		}, 600);

		$('#username').css({
			"transform": "scale(1,0)",
			"box-shadow": "0px 0px 50px #fff"
		});

		$('#password').css({
			"transform": "scale(0,1)"
		});

		$('#signBox').animate({
			top: '386px',
			opacity: 0
		}, 600, function() {

			$('.content').css({
				"transform": "scale(0,1)"
			});

			setTimeout(function() {
				$('.window').css({
					opacity: '0',
					"transform": "scale(1,0)"
				})
				$("#fullbg").css({
					opacity: 0
				}).addClass('hide')
			}, 300);

		})

	})


	// 输入框聚焦/失焦
	$("input").focus(function() {
		$(this).css({
			"box-shadow": "0px 0px 10px #fff"
		});
	}).blur(function() {
		$(this).css({
			"box-shadow": "0 0 0px #fff"
		});
	})


	// 鼠标经过 商品列表
	$(".shop_item").hover(function() {
		$(this).find("img").stop().animate({
			'margin-top': '16px'
		}, 500);
	}, function() {
		$(this).find("img").stop().animate({
			'margin-top': '0px'
		}, 300);
	});


	$('.shopClass').hover(function() {
		$('.shopClass_show').removeClass('hide');
	}, function() {
		$('.shopClass_show').addClass('hide');
	})

	var timer = null;
	var isTop = true;
	$(window).scroll(function() {

		if ($(window).scrollTop() >= $(window).height()) {
			$("#to_top").show(1000)
		} else {
			$("#to_top").hide(1000)
		}

		if (!isTop) {
			clearInterval(timer)
		}
		isTop = false;

		var top = $(document).scrollTop();
		// console.log(top);
		var items = $("#content").find(".item");
		var currentId = "";
		items.each(function() {
			var m = $(this);
			var itemTop = m.offset().top;
			// console.log(itemTop);
			if (top > itemTop - 100) {
				currentId = "#" + m.attr("id");
			} else {
				return false;
			}
		});
		var menu = $("#menu");
		var currentLink = menu.find(".current");
		if (currentId && currentLink.attr("href") != currentId) {
			currentLink.removeClass("current");
			menu.find("[href=" + currentId + "]").addClass("current");
		}
	});

	$('#to_top').click(function() {

		timer = setInterval(function() {

			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(osTop / 6);

			isTop = true;
			document.documentElement.scrollTop = document.body.scrollTop = osTop - ispeed;
			if (osTop == 0) {
				clearInterval(timer);
			}

		}, 30)

	})


	// 导航栏渐变
	var c = document.getElementById("myCanvas");
	var cxt = c.getContext("2d");
	var grd = cxt.createLinearGradient(30, 0, 575, 420);
	grd.addColorStop(0, "#1369C0");
	grd.addColorStop(0.5, "#f0f");
	grd.addColorStop(1, "#1369C0");
	cxt.fillStyle = grd;
	cxt.fillRect(0, 0, 985, 200);


	// 导航栏切换菜单
	$(".navmenu").mouseover(function() {
		$(this).children("ul").show();
	});
	$(".navmenu").mouseout(function() {
		$(this).children("ul").hide();
	})


	// 分类导航
	var dls = $('.shopClass_item');
	for (var i = 0; i < dls.length; i++) {
		dls.hover(function() {
			$(this).addClass('shopClass_itemhover')
				// $(this).appendChild("<div style='
				// width:100%; height:100%; background:#f0f; position:absolute; top:0px;left:-190px;' id='flow'></div>")
			$('#flow').animate({
				'left': '20px'
			}, 600);
		}, function() {
			$(this).removeClass('shopClass_itemhover')
				// $('#flow').animate({'left':'-190px'},600).remove();
		})
	}


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

/*	document.onkeyup=function(event){
		console.log(event.keyCode);
	}*/
}) 