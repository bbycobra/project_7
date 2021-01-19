const alertBanner = document.querySelector('#banner');

const alertBannerClose = document.querySelector('.alert-banner-close');
alertBannerClose.addEventListener('click', e => {
    const element = e.target;
    alertBanner.style.display = "none"
});
