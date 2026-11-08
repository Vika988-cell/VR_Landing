document.addEventListener('DOMContentLoaded', () => {
		const burgerBtn = document.getElementById('burger-btn');
		const mobileMenu = document.getElementById('mobile-menu');

		burgerBtn.addEventListener('click', () => {
				// Переключаем класс активации для анимации иконок и открытия меню
				burgerBtn.classList.toggle('open');
				mobileMenu.classList.toggle('open');

				// Запрещаем скролл страницы при открытом меню
				document.body.classList.toggle('no-scroll');
			});

		// Закрываем меню при клике на любую ссылку
		const menuLinks = document.querySelectorAll('.menu__link');
		menuLinks.forEach(link => {
				link.addEventListener('click', () => {
						burgerBtn.classList.remove('open');
						mobileMenu.classList.remove('open');
						document.body.classList.remove('no-scroll');
				});
		});
});
