$(function() {

	$("#login").click(function(){
		$(".mask_layer, .login_box").fadeIn();
		// $('#username').focus()
	});

	$('.close').click(function(){
		$(".mask_layer, .login_box").fadeOut();
	});

	$('.remember').click(function(event) {
		$(this).toggleClass('checked');
	});


	$('.des_item').click(function(){
		$(this).addClass("	des_item_active").siblings().removeClass('des_item_active');
		var parent = $(this).parent();
		if(parent.hasClass('color')){
			$('.selected_color').text($(this).text());
		} else if(parent.hasClass('version')){
			$('.selected_version').text($(this).text());
		}
	});


	$(".area_select").click(function(e){
		e.stopPropagation();
		$(this).find(".options").toggle();
	});


	$(".area_select .options li").click(function(e){
		e.stopPropagation();
		$('.selected_area').text($(this).text());
		$(this).parent().parent().hide()
	});

	$(document).click(function(){
		$(".area_select .options").hide()
	});

	var numInput = $('.des_number input');
	$('.plus').click(function(){
		var nowNum = parseInt($(this).prev().find('input').val()) + 1;//alert(nowNum)
		if(nowNum <= 9){
			numInput.val(parseInt(nowNum));
		}
	});

	$('.reduction').click(function(){
		var nowNum = parseInt($(this).next().find('input').val()) - 1;//alert(nowNum)
		if(nowNum >= 1){
			numInput.val(parseInt(nowNum));
		}
	});

	numInput.keyup(function(){
		var num = $(this).val();
		if(isNaN(num) !=false && num < 1 || num > 9){
			numInput.val(parseInt(num))
		}
	});


	$(".des_tit li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var cur = $(this).index();
		$('.des_infoContent .item').eq(cur).show().siblings(".item").hide();
	});


	

	// // 点击登录 
	// $("#login").click(function() {

	// 	// 初始化
	// 	$(".mask_layer, .window").fadeIn();
	// 	/*$('.content').css({
	// 		"transform": "scale(1,1)"
	// 	});

	// 	$('#username').css({
	// 		"transform": "scale(1,1)",
	// 		"box-shadow": "0px 0px 10px #fff"
	// 	});

	// 	$('#password').css({
	// 		"transform": "scale(1,1)";
	// 	});
		
	// 	$("#signIn").css("display", "none");	

	// 	// 计算弹出层位置
	// 	var browserwidth = $(window).width(); // console.log(browserwidth);
	// 	var browserheight = $(window).height(); // console.log(browserheight); 
	// 	var scrollLeft = $(window).scrollLeft(); // console.log(scrollLeft);
	// 	var scrollTop = $(window).scrollTop(); // console.log(scrollTop);
	// 	var winwidth = $(".window").width(); // console.log(winwidth);
	// 	var winheight = $(".window").height(); // console.log(winheight);
	// 	var left = scrollLeft + (browserwidth - $(".window").width()) / 2; // console.log(left);
	// 	var top = scrollTop + (browserheight - $(".window").height()) / 2; // console.log(top);

	// 	// 显示弹出层
	// 	$(".window").css({
	// 		"left": left + 'px',
	// 		"top": top + "px",
	// 		"transform": "scale(1,1)",
	// 		'opacity': '1',
	// 		"box-shadow": "0px 0px 100px #fff"
	// 	})*/

	// 	$('#username,#password').animate({
	// 		left: '45px',
	// 		opacity: 1
	// 	}, 1000, function() {
	// 		$('.title').animate({
	// 			top: '0px',
	// 			opacity: 1
	// 		}, 600, function() {
	// 			$('#signBox').animate({
	// 				top: '284px',
	// 				opacity: 1
	// 			}, 600, function() {
	// 				$('#center').css({
	// 					"box-shadow": "0px 0px 10px #fff"
	// 				});
	// 				$("#signIn").slideDown(300);
	// 				$('#xiaci').slideDown(600);
	// 				$('#username').focus();
	// 			})
	// 		})
	// 	})
	// })

	// // 点击关闭
	// $(".x").click(function() {

	// 	$('#xiaci').slideUp(600);
	// 	$('.title').animate({
	// 		top: '-120px',
	// 		opacity: 0
	// 	}, 600);

	// 	$('#username').css({
	// 		"transform": "scale(1,0)",
	// 		"box-shadow": "0px 0px 50px #fff"
	// 	});

	// 	$('#password').css({
	// 		"transform": "scale(0,1)"
	// 	});

	// 	$('#signBox').animate({
	// 		top: '386px',
	// 		opacity: 0
	// 	}, 600, function() {

	// 		$('.content').css({
	// 			"transform": "scale(0,1)"
	// 		});

	// 		setTimeout(function() {
	// 			$('.window').css({
	// 				opacity: '0',
	// 				"transform": "scale(1,0)"
	// 			})
	// 			$("#fullbg").css({
	// 				opacity: 0
	// 			}).addClass('hide')
	// 		}, 300);

	// 	})

	// })

	// // 输入框聚焦/失焦
	// $("input").focus(function() {
	// 	$(this).css({
	// 		"box-shadow": "0px 0px 10px #fff"
	// 	});
	// }).blur(function() {
	// 	$(this).css({
	// 		"box-shadow": "0 0 0px #fff"
	// 	});
	// });



	// 全部商品分类列表
	$('.shopClass').hover(function() {
		$('.shopClass_show').removeClass('hide');
	}, function() {
		$('.shopClass_show').addClass('hide');
	});


	// 分类导航
	/*var dls = $('.shopClass_item');
	for (var i = 0; i < dls.length; i++) {
		dls.hover(function() {
			$(this).addClass('shopClass_itemhover');
			$('#flow').animate({
				'left': '20px'
			}, 600);
		}, function() {
			$(this).removeClass('shopClass_itemhover');
		})
	}*/
	$('.shopClass_item').hover(function() {
		$(this).toggleClass('shopClass_itemhover');
	});


	// 回到顶部
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



	if($('.step').length != 1){

		// 导航栏渐变
		var c = document.getElementById("myCanvas");
		var cxt = c.getContext("2d");
		var grd = cxt.createLinearGradient(30, 0, 575, 420);
		grd.addColorStop(0, "#1369C0");
		grd.addColorStop(0.5, "#f0f");
		grd.addColorStop(1, "#1369C0");
		cxt.fillStyle = grd;
		cxt.fillRect(0, 0, 985, 200);

	}




	// 导航栏切换菜单
	// $(".navmenu").mouseover(function() {
	// 	$(this).children("ul").show();
	// });
	// $(".navmenu").mouseout(function() {
	// 	$(this).children("ul").hide();
	// })

	$(".navmenu").hover(function(){
		$(this).children('ul').toggle()
	})


	


	// document.onkeyup=function(event){
	// 	console.log(event.keyCode);
	// }

});