let dvdLogo = document.getElementById("music");
const header = document.querySelector('header');
const footer = document.querySelector('footer');

loop();
function loop() {
    const headerHeight = header.clientHeight;
    const footerHeight = footer.clientHeight;


    const hRange = window.innerWidth - dvdLogo.clientWidth;
    const vRange = window.innerHeight - dvdLogo.clientHeight - headerHeight - footerHeight;

    const time = performance.now() * 0.2;

    const x = Math.abs((time % (hRange * 2)) - hRange);
    dvdLogo.style.left = `${x}px`;

    const y = Math.abs((time % (vRange * 2)) - vRange);
    dvdLogo.style.top = `${y}px`;

    requestAnimationFrame(loop);
}