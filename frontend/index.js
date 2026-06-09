window.addEventListener("load", () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight + 30}px`);
    document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
    setTimeout(() => {
            history.replaceState(null, '', window.location.pathname);
            }, 50);
        });
    });
})