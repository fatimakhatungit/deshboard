
/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */



(function ($) {
	"use strict";



	/*----------------------------------------
			 SVG Inject With Vivus(After Inject) 
		------------------------------------------*/
	SVGInject(document.querySelectorAll("img.svgInject"), {
		makeIdsUnique: true,
		afterInject: function (img, svg) {
			new Vivus(svg, {
				duration: 80
			});
		}
	});

	// Vivus On Hover   
	$('[data-vivus-hover]').hover(function () {
		var svg = $(this).find('svg')[0];
		new Vivus(svg, {
			duration: 50
		});
	})

	// data-background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})



	const list = document.querySelectorAll('.list')
	function activeLink() {
		list.forEach((item) => item.classList.remove('active'))
		this.classList.add('active')
	}

	list.forEach((item) => item.addEventListener('click', activeLink))



$(document).click(function(event) {
  if(
    $('.toggle > input').is(':checked') &&
    !$(event.target).parents('.toggle').is('.toggle')
  ) {
    $('.toggle > input').prop('checked', false);
  } 
})

$("#check-box").change(function(){
	$('.line-group-wrapper').toggleClass('dropdown-active'); 
	$('.balance-nav').toggleClass('active'); 
  });







})(jQuery);



(function (window, document, $, undefined) {
	'use strict';

	let dsbJs = {
		i: function (e) {
			dsbJs.d();
			dsbJs.methods();
			dsbJs.swiperSlider();
		},
		d: function (e) {
			this._window = $(window),
				this._document = $(document),
				this._body = $('body'),
				this._html = $('html')
		},

		methods: function (e) {
			dsbJs.headerSticky();
			// dsbJs.searchPopup();
			dsbJs.searchBar();
			dsbJs.sideBar();
			dsbJs.searchMenu();
			dsbJs.searchMenu2();
			dsbJs.searchMenu3();
			dsbJs.searchMenu4();
			dsbJs.lineChart();
			dsbJs.lineChart2();
			dsbJs.Animation();

		},
		searchBar: function () {
			$(".searchbtn").click(function () {
				$(this).toggleClass("bg-green");
				$(".fas").toggleClass("color-white");
				$(".input").focus().toggleClass("active-width").val('');
			})
		},

		sideBar: function () {
			
var tabsVerticalInner = $('#accordian');
var selectorVerticalInner = $('#accordian').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();
$(".selector-active").css({
	"top":itemPosVerticalTop.top + "px", 
	"left":itemPosVerticalLeft.left + "px",
	"height": activeWidthVerticalHeight + "px"
	// "width": activeWidthVerticalWidth + "px"
});
$("#accordian").on("click","li",function(e){
	$('#accordian ul li').removeClass("active");
	$(this).addClass('active');
	var activeWidthVerticalHeight = $(this).innerHeight();
	var activeWidthVerticalWidth = $(this).innerWidth();
	var itemPosVerticalTop = $(this).position();
	var itemPosVerticalLeft = $(this).position();
	$(".selector-active").css({
		"top":itemPosVerticalTop.top + "px", 
		"left":itemPosVerticalLeft.left + "px",
		"height": activeWidthVerticalHeight + "px"
		// "width": activeWidthVerticalWidth + "px"
	});
});


// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.html';
  }

  var target = $('#accordian ul li a[href="'+path+'"]');
  // Add active class to target link
  target.parent().addClass('active');
});
		},

		lineChart: function () {
			var acquisition = document.getElementById('acquisition');

			var acChart = new Chart(acquisition, {
				// The type of chart we want to create
				type: 'line',

				// The data for our dataset
				data: {
					labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],

					datasets: [
						{
							label: "Referral",
							backgroundColor: '#d93535',
							borderColor: 'rgba(76, 132, 255,0)',
							data: [10, 10, 10, 10, 20, 20, 20, 30, 30, 30, 30, 40, 60],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(76, 132, 255,0)',
							pointHoverBackgroundColor: '#d93535',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						},
						{
							label: "Direct",
							backgroundColor: '#3dbb61',
							borderColor: 'rgba(254, 196, 0,0)',
							data: [30, 20, 30, 47, 50, 70, 45, 55, 67, 70, 75, 85, 100],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(254, 196, 0,0)',
							pointHoverBackgroundColor: '#3dbb61',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						},
						{
							label: "Social",
							backgroundColor: '#fcbb0a',
							borderColor: 'rgba(41, 204, 151,0)',
							data: [60, 65, 70, 75, 80, 95, 70, 70, 110, 135, 110, 90],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(41, 204, 151,0)',
							pointHoverBackgroundColor: '#fcbb0a',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						},
						{
							label: "MiseEquity",
							backgroundColor: '#0a82d5',
							borderColor: 'rgba(41, 204, 151,0)',
							data: [90, 95, 100, 120, 120, 120, 140, 160, 250, 150, 300, 350],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(41, 204, 151,0)',
							pointHoverBackgroundColor: '#0a82d5',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						}
					]
				},

				// Configuration options go here
				options: {
					legend: {
						display: false
					},

					scales: {
						xAxes: [{
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								display: true
							},
							ticks: {
								beginAtZero: true,
							},
						}]
					},
					tooltips: {
					}
				}
			})
		},
		lineChart2: function () {
			var acquisition2 = document.getElementById('acquisition2');

			var acChart = new Chart(acquisition2, {
				// The type of chart we want to create
				type: 'line',

				// The data for our dataset
				data: {
					labels: ["2016", "2017", "2018", "2019", "2020"],
					datasets: [
						{
							label: "Direct",
							backgroundColor: '#0a82d5',
							borderColor: 'rgba(254, 196, 0,0)',
							data: [20, 20, 25, 30, 25, 30, 30],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(254, 196, 0,0)',
							pointHoverBackgroundColor: '#0a82d5', 
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						},
						{
							label: "MiseEquity",
							backgroundColor: '#fcbb0a',
							borderColor: 'rgba(41, 204, 151,0)',
							data: [30, 35, 35, 40, 35, 35, 40],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(41, 204, 151,0)',
							pointHoverBackgroundColor: '#fcbb0a',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						},
						
						{
							label: "Social",
							backgroundColor: '#3dbb61',
							borderColor: 'rgba(41, 204, 151,0)',
							data: [40, 40, 45, 45, 40, 45, 50], 
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(41, 204, 151,0)',
							pointHoverBackgroundColor: '#3dbb61',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						}, 
						{
							label: "Referral",
							backgroundColor:  '#d93535',
							borderColor: 'rgba(76, 132, 255,0)',
							data: [45, 45, 50, 50, 50, 50, 140],
							lineTension: 0.3,
							pointBackgroundColor: 'rgba(76, 132, 255,0)',
							pointHoverBackgroundColor:  '#d93535',
							pointHoverRadius: 3,
							pointHitRadius: 30,
							pointBorderWidth: 2,
							pointStyle: 'rectRounded'
						}
					]
				},

				// Configuration options go here
				options: {
					legend: {
						display: false
					},

					scales: {
						xAxes: [{
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								display: true
							},
							ticks: {
								beginAtZero: true,
							},
						}]
					},
					tooltips: {
					}
				}
			})
		},


		headerSticky: function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 250) {
					$('.header-sticky').addClass('sticky')
				} else {
					$('.header-sticky').removeClass('sticky')
				}
			})
		},
		swiperSlider: function () {
			var swiper = new Swiper(".slide-container", {
				slidesPerView: 5,
				spaceBetween: 0,
				slidesPerGroup: 1,
				loop: true,
				loopFillGroupWithBlank: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		},

		// search modal js 

		searchMenu: function () {
			$('.open-nav').click(function () {

				$('body').toggleClass('right-side-nav-active');
			});
			$('.nav-close-btn').click(function () {

				$('body').removeClass('right-side-nav-active');
			});
		},
		searchMenu2: function () {
			$('.open-slide').click(function () {

				$('body').toggleClass('right-side-slider-active');
			});
			$('.slide-close').click(function () {

				$('body').removeClass('right-side-slider-active');
			});
		},
		searchMenu3: function () {
			$('.open-notification').click(function () {

				$('body').toggleClass('right-side-notification-active');
			});
			$('.notification-close').click(function () {

				$('body').removeClass('right-side-notification-active');
			});
		},
		searchMenu4: function () {
			$('.open-lock').click(function () {

				$('body').toggleClass('right-side-lock-active');
			});
			$('.lock-close').click(function () {

				$('body').removeClass('right-side-lock-active');
			});
		},

		Animation: function() {
			var wow = new WOW({
				boxClass: 'wow', 
				animateClass: 'animated', 
				offset: 0, 
				mobile: true, 
				live: true, 
			});
			wow.init();
		},

	}

	dsbJs.i();


})(window, document, jQuery)




