// Shared layout components injected into every page

function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return file;
}

function renderHeader() {
    const current = getCurrentPage();
    const navLinks = [
        { href: 'index.html', label: 'Home' },
        { href: 'staff.html', label: 'Staff' },
        { href: 'workshops.html', label: 'Workshops' },
        { href: 'venue.html', label: 'Venue' },
        { href: 'schedule.html', label: 'Schedule' },
        // { href: 'registration.html', label: 'Registration' },
        { href: 'gifts.html', label: '🎁' },
    ];

    const nav = navLinks
        .map(link => {
            const active = current === link.href ? ' class="active"' : '';
            return `<a href="${link.href}"${active}>${link.label}</a>`;
        })
        .join('\n');

    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
        <div class="header-inner">
            <a href="index.html" class="logo">
                <img src="img/Header-light.png" alt="CozySwing" class="logo-img">
            </a>
            <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
                <span class="menu-bar"></span>
                <span class="menu-bar"></span>
                <span class="menu-bar"></span>
            </button>
            <nav class="main-nav">
                ${nav}
            </nav>
        </div>
    `;

    document.body.prepend(header);

    const toggle = header.querySelector('.menu-toggle');
    const mainNav = header.querySelector('.main-nav');

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.classList.toggle('open');
    });
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-inner">
            <div class="footer-links">
                <a href="terms.html">Terms &amp; Conditions</a>
                <a href="imprint.html">Imprint</a>
                <a href="privacy.html">Privacy Policy</a>
            </div>
            <p class="footer-copy">&copy; ${new Date().getFullYear()} CozySwing</p>
        </div>
    `;
    document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});
