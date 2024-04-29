// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const form = document.querySelectorAll("form");

	const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;

		breakpoint = window.matchMedia(breakpoint);

		const enableSwiper = function (className, settings) {
			swiper = new Swiper(className, settings);

			if (callback) {
				callback(swiper);
			}
		}

		const checker = function () {
			if (breakpoint.matches) {
				return enableSwiper(swiperClass, swiperSettings);
			} else {
				if (swiper !== undefined) swiper.destroy(true, true);
				return;
			}
		};

		breakpoint.addEventListener('change', checker);
		checker();
	}

	const someFunc = (instance) => {
		if (instance) {
			instance.on('slideChange', function (e) {
				console.log('*** mySwiper.activeIndex', instance.activeIndex);
			});
		}
	};

	resizableSwiper(
		'(max-width: 575px)',
		'.slider-ben',
		{
			spaceBetween: 20,
			slidesPerView: 1.2,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		},
	);

	resizableSwiper(
		'(max-width: 575px)',
		'.slider-why',
		{
			spaceBetween: 20,
			slidesPerView: 1.2,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		}
	);

	resizableSwiper(
		'(max-width: 575px)',
		'.slider-points',
		{
			spaceBetween: 20,
			slidesPerView: 1.2,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		},
	);

	resizableSwiper(
		'(max-width: 575px)',
		'.slider-offer',
		{
			spaceBetween: 20,
			slidesPerView: 1.2,
			navigation: {
				nextEl: '.swiper-button-next_offer',
				prevEl: '.swiper-button-prev_offer',
			},
		},
	);

	resizableSwiper(
		'(max-width: 575px)',
		'.slider-form',
		{
			spaceBetween: 20,
			slidesPerView: 1.2,
		},
	);

	const range = new Swiper('.b-range__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next-range',
			prevEl: '.swiper-button-prev-range',
		},
	});

	const reviews = new Swiper('.slider-rev', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next_rev',
			prevEl: '.swiper-button-prev_rev',
		},
	});

	resizableSwiper(
		'(max-width: 575px)',
		'.slider-team',
		{
			spaceBetween: 20,
			slidesPerView: 1.2,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		},
	);

	const swiperTeam1Small = new Swiper(".swiper-team1-small", {
		spaceBetween: 12,
		slidesPerView: 4,
		direction: 'horizontal',
		slideThumbActiveClass: 'b-card__slide-small_active',

		breakpoints: {
			1200: {
				direction: 'horizontal',
			},

			576: {
				direction: 'vertical',
			},
		},
	});

	const swiperTeam1 = new Swiper(".swiper-team1", {
		spaceBetween: 20,
		thumbs: {
			swiper: swiperTeam1Small,
		},
	});

	const swiperTeam2Small = new Swiper(".swiper-team2-small", {
		spaceBetween: 17,
		slidesPerView: 4,
		slideThumbActiveClass: 'b-card__slide-small_active',
		direction: 'horizontal',
		breakpoints: {
			1200: {
				direction: 'horizontal',
			},

			576: {
				direction: 'vertical',
			},
		},
	});

	const swiperTeam2 = new Swiper(".swiper-team2", {
		spaceBetween: 20,
		thumbs: {
			swiper: swiperTeam2Small,
		},
	});

	const swiperDarkside = new Swiper('.swiper-darkside', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next_darkside',
			prevEl: '.swiper-button-prev_darkside',
		},
	});

	const we = new Swiper('.swiper-we', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next-we',
			prevEl: '.swiper-button-prev-we',
		},
	});

	const buttonsTabs = document.querySelectorAll('.b-tabs__nav-button');
	const boxesTabs = document.querySelectorAll('.b-tabs__box');

	buttonsTabs.forEach((item, index) => {
		item.addEventListener('click', () => {
			boxesTabs[index].classList.add('active');

			let boxesTabsArray = Array.from(boxesTabs)

			boxesTabsArray.splice(index, 1);
			boxesTabsArray.forEach((ep) => {
				ep.classList.remove('active')
			})

			buttonsTabs[index].classList.add('active');

			let buttonsTabsArray = Array.from(buttonsTabs)

			buttonsTabsArray.splice(index, 1);
			buttonsTabsArray.forEach((ep) => {
				ep.classList.remove('active')
			})
		});
	});

	if (document.querySelector(".b-quick-view")) {
		const link = document.querySelectorAll('.link');
		const popApp = document.querySelector('.b-quick-view');
		const overlay = document.querySelector('.b-quick-view__overlay');
		const box = document.querySelector('.b-quick-view__box');
		const close = document.querySelector('.b-quick-view__close');

		link.forEach(e => e.addEventListener('click', () => {
			popApp.classList.add('open');
			body.classList.add('not-scroll');
			setTimeout(function () {
				box.classList.add('open-box');
			}, 300);
		}))

		overlay.addEventListener('click', () => {
			box.classList.remove('open-box');
			body.classList.remove('not-scroll');
			setTimeout(function () {
				popApp.classList.remove('open');
			}, 300);
		})

		close.addEventListener('click', () => {
			box.classList.remove('open-box');
			body.classList.remove('not-scroll');
			setTimeout(function () {
				popApp.classList.remove('open');
			}, 300);
		})
	}

	if (document.querySelector(".b-modal")) {
		const link = document.querySelectorAll('.link-modal');
		const popApp = document.querySelector('.b-modal');
		const overlay = document.querySelector('.b-modal__overlay');
		const box = document.querySelector('.b-modal__box');
		const close = document.querySelector('.b-modal__close');

		link.forEach(e => e.addEventListener('click', () => {
			popApp.classList.add('open');
			body.classList.add('not-scroll');
			setTimeout(function () {
				box.classList.add('open-box');
			}, 300);
		}))

		overlay.addEventListener('click', () => {
			box.classList.remove('open-box');
			body.classList.remove('not-scroll');
			setTimeout(function () {
				popApp.classList.remove('open');
			}, 300);
		})

		close.addEventListener('click', () => {
			box.classList.remove('open-box');
			body.classList.remove('not-scroll');
			setTimeout(function () {
				popApp.classList.remove('open');
			}, 300);
		})


	}

	form.forEach((ep) => {
		ep.addEventListener("submit", (e) => {
			e.preventDefault();

			const popAppDone = document.querySelector('.b-modal-done');
			const overlayDone = document.querySelector('.b-modal-done__overlay');
			const boxDone = document.querySelector('.b-modal-done__box');


			popAppDone.classList.add('open');
			body.classList.add('not-scroll');
			setTimeout(function () {
				boxDone.classList.add('open-box');
			}, 300);
			setTimeout(function () {
				boxDone.classList.remove('open-box');
				body.classList.remove('not-scroll');
				setTimeout(function () {
					popAppDone.classList.remove('open');
				}, 300);
			}, 5000);

			overlayDone.addEventListener('click', () => {
				boxDone.classList.remove('open-box');
				body.classList.remove('not-scroll');
				setTimeout(function () {
					popAppDone.classList.remove('open');
				}, 300);
			})

			const popApp = document.querySelector('.b-modal');
			const box = document.querySelector('.b-modal__box');

			box.classList.remove('open-box');
			body.classList.remove('not-scroll');
			setTimeout(function () {
				popApp.classList.remove('open');
			}, 300);
		})
	})

	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);

		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}

		}

		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}

	}

	maskPhone('.b-input_tel');

	const input = document.querySelectorAll(".b-input")
	input.forEach((e) => {
		e.addEventListener("invalid", (ep) => {
			ep.preventDefault();
			e.classList.add('invalid-class')
		});
	})

	// блок "материалы"

	if (document.querySelector('.b-materials__select')) {

		document.querySelector('.b-materials__select').addEventListener('change', function () {
			const select = [].slice.call(document.querySelector('.b-materials__select'));
			select.forEach((item, index) => {
				if (item.selected) {
					let tab = document.querySelectorAll('.b-materials__tab');
					tab.forEach((e) => {
						e.classList.remove('active');
					})
					tab[index].classList.toggle('active')
				}
			})
		})

		const tab = document.querySelectorAll('.b-materials__tab');

		tab.forEach((e) => {
			const select2 = e.querySelector('.b-materials__select2');
			const tab2 = e.querySelectorAll('.b-materials__tab2');
			select2.addEventListener('change', function () {
				tab2.forEach((n, i) => {
					n.classList.toggle('active', i === this.selectedIndex);
				});
			});
		})


		const buttonsMaterials = document.querySelectorAll('.b-materials__nav-button');
		const boxesMaterials = document.querySelectorAll('.b-materials__tab');

		const buttonsMaterials2 = document.querySelectorAll('.b-materials__nav-button2');
		const boxesMaterials2 = document.querySelectorAll('.b-materials__tab2');

		buttonsMaterials.forEach((item, index) => {
			item.addEventListener('click', () => {
				boxesMaterials[index].classList.add('active');

				let buttonsMaterials22 = boxesMaterials[index].querySelectorAll('.b-materials__nav-button2');
				buttonsMaterials22[0].classList.add('active');

				let boxesMaterials22 = boxesMaterials[index].querySelectorAll('.b-materials__tab2');
				boxesMaterials22[0].classList.add('active');

				let boxesTabsArray = Array.from(boxesMaterials)

				boxesTabsArray.splice(index, 1);
				boxesTabsArray.forEach((ep) => {
					ep.classList.remove('active')
				})

				buttonsMaterials[index].classList.add('active');

				let buttonsTabsArray = Array.from(buttonsMaterials)

				buttonsTabsArray.splice(index, 1);
				buttonsTabsArray.forEach((ep) => {
					ep.classList.remove('active')
				})
			});
		});

		// const selects2 = document.querySelectorAll('.b-materials__select2');

		// selects2.forEach((item, index) => {
		// 	let boxesMaterials22 = boxesMaterials[index].querySelectorAll('.b-materials__tab2');
		// 	boxesMaterials22[0].classList.add('active');

		// 	item.addEventListener('change', function () {
		// 		document.querySelectorAll('.b-materials__tab2').forEach((n, i) => {
		// 			n.classList.toggle('active', i === this.selectedIndex);
		// 		});
		// 	});
		// })

		buttonsMaterials2.forEach((item, index) => {
			item.addEventListener('click', () => {
				boxesMaterials2[index].classList.add('active');

				let boxesTabsArray = Array.from(boxesMaterials2)

				boxesTabsArray.splice(index, 1);
				boxesTabsArray.forEach((ep) => {
					ep.classList.remove('active')
				})

				buttonsMaterials2[index].classList.add('active');

				let buttonsTabsArray = Array.from(buttonsMaterials2)

				buttonsTabsArray.splice(index, 1);
				buttonsTabsArray.forEach((ep) => {
					ep.classList.remove('active')
				})
			});
		});

		boxesMaterials2.forEach((item, index) => {
			const buttonsMaterials = item.querySelectorAll('.b-materials__button-img');
			const boxesMaterials = item.querySelectorAll('.b-materials__tab-img');
			buttonsMaterials.forEach((item, index) => {
				let boxesTabsArray = Array.from(boxesMaterials);
				let buttonsTabsArray = Array.from(buttonsMaterials);
				item.addEventListener('click', () => {
					boxesTabsArray.forEach((ep) => {
						ep.classList.remove('active');
					})

					buttonsTabsArray.forEach((ep) => {
						ep.classList.remove('active')
						ep.classList.remove('prev-active');
						ep.classList.remove('next-active');
					})

					boxesMaterials[index].classList.add('active');

					buttonsMaterials[index].classList.add('active');
					if (buttonsMaterials[index - 1] !== undefined) {
						buttonsMaterials[index - 1].classList.add('prev-active');
					}
					if (buttonsMaterials[index + 1] !== undefined) {
						buttonsMaterials[index + 1].classList.add('next-active');
					}
				});
			});
		});

		// boxesMaterials2.forEach((item, index) => {
		// 	const buttonsMaterials = item.querySelectorAll('.b-materials__button-img');
		// 	const boxesMaterials = item.querySelectorAll('.b-materials__tab-img');
		// 	buttonsMaterials.forEach((item, index) => {
		// 		let boxesTabsArray = Array.from(boxesMaterials);
		// 		let buttonsTabsArray = Array.from(buttonsMaterials);
		// 		item.addEventListener('click', () => {
		// 			boxesTabsArray.forEach((ep) => {
		// 				ep.classList.remove('active');
		// 			})

		// 			buttonsTabsArray.forEach((ep) => {
		// 				ep.classList.remove('active')
		// 				ep.classList.remove('prev-active');
		// 				ep.classList.remove('next-active');
		// 			})

		// 			boxesMaterials[index].classList.add('active');

		// 			buttonsMaterials[index].classList.add('active');
		// 			if (buttonsMaterials[index - 1] !== undefined) {
		// 				buttonsMaterials[index - 1].classList.add('prev-active');
		// 			}
		// 			if (buttonsMaterials[index + 1] !== undefined) {
		// 				buttonsMaterials[index + 1].classList.add('next-active');
		// 			}
		// 		});
		// 	});
		// });

	}

	if (document.documentElement.clientWidth > 767) {

		$(function () {
			$(".twentytwenty-container").twentytwenty({
				default_offset_pct: 0.5,
			});
		});
	}
	if (document.documentElement.clientWidth < 768) {
		$(function () {
			$(".twentytwenty-container").twentytwenty({
				default_offset_pct: 0.5,
				orientation: 'vertical',
			});
		});
	}

	const burgerButton = document.querySelector('.b-header__burger-button');
	const burgerMenu = document.querySelector('.b-burger');
	const burgerLink = burgerMenu.querySelectorAll('.menu-item');

	const addMenu = () => {
		burgerMenu.classList.add('dflex');
		setTimeout(() => {
			burgerMenu.classList.add('open');
			burgerMenu.classList.add("shadow");
			body.classList.add("scroll");
		}, 300);
	}

	const removeMenu = () => {
		burgerMenu.classList.remove('open');
		burgerMenu.classList.remove("shadow");
		body.classList.remove("scroll");
		setTimeout(() => {
			burgerMenu.classList.remove('dflex');
		}, 300);
	}

	burgerLink.forEach((ep) => {
		ep.querySelector('a').addEventListener('click', e => {
			e.stopPropagation();
			addMenu();
		});
	})

	burgerButton.addEventListener('click', e => {
		e.stopPropagation();
		addMenu();
	});

	document.addEventListener('click', e => {
		let target = e.target;
		let its_burgerMenu = target == burgerMenu || burgerMenu.contains(target);
		let its_burgerButton = target == burgerButton;
		let burgerMenu_is_open = burgerMenu.classList.contains('open');

		if (!its_burgerMenu && !its_burgerButton && burgerMenu_is_open) {
			removeMenu();
		}
	})

	// if (document.querySelector("#map")) {

	let map_container = document.getElementById('map');
	let options_map = {
		once: true,//запуск один раз, и удаление наблюдателя сразу
		passive: true,
		capture: true
	};
	map_container.addEventListener('click', start_lazy_map, options_map);
	map_container.addEventListener('mouseover', start_lazy_map, options_map);
	map_container.addEventListener('touchstart', start_lazy_map, options_map);
	map_container.addEventListener('touchmove', start_lazy_map, options_map);

	let map_loaded = false;
	function start_lazy_map() {
		if (!map_loaded) {
			let map_block = document.getElementById('ymap_lazy');
			map_loaded = true;
			map_block.setAttribute('src', map_block.getAttribute('data-src'));
			map_block.removeAttribute('data_src');
			console.log('YMAP LOADED');
		}
	}

	// ymaps.ready(function () {

	// 	var map = new ymaps.Map("map", {
	// 		center: [55.687863, 37.301285],
	// 		zoom: 16.5,
	// 	});

	// 	var shop_2 = new ymaps.Placemark(
	// 		[55.687863, 37.301285],
	// 		{
	// 			hintContent: 'бульвар Маршала Крылова, 25А'
	// 		},
	// 		{
	// 			iconLayout: 'default#image',
	// 			iconImageHref: 'images/dist/baloon.svg',
	// 			iconImageSize: [48, 60],
	// 			iconImageOffset: [-25, -50]
	// 		}
	// 	);
	// 	map.geoObjects.add(shop_2);
	// });
	// }

	if (document.documentElement.clientWidth < 575) {
		const slideRev = document.querySelectorAll('.swiper-slide-rev');

		slideRev.forEach((e) => {
			const revText = e.querySelectorAll('.b-reviews__text');
			if (revText.length > 1) {
				const textAdd = e.querySelector('.b-reviews__text-add');

				textAdd.classList.add('b-reviews__text-add_flex');

				revText.forEach((ep) => {
					ep.classList.add('b-reviews__text_none');
				})

				revText[0].classList.remove('b-reviews__text_none')

				textAdd.addEventListener('click', () => {
					revText.forEach((ep) => {
						ep.classList.remove('b-reviews__text_none');
						textAdd.classList.remove('b-reviews__text-add_flex');
					})
				})
			}
		})
	}

	if (document.querySelector('.b-up')) {
		const buttonUp = document.querySelector('.b-up');
		window.onscroll = function () {
			buttonUpFunc();
		}

		function buttonUpFunc() {
			if (window.pageYOffset >= 350) {
				buttonUp.classList.add('b-up__open')
			} else {
				buttonUp.classList.remove('b-up__open')
			}
		}
	}
});


