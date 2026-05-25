// ===== TIREXPRESS â€” SHARED COMPONENTS =====
// Injects shared navbar and footer across all pages

(function () {
    'use strict';

    // --- Configuration ---
    const BRAND_NAME = 'TireXpress';
    const BRAND_TAGLINE = 'Mobile Tire Service â€” Anywhere, Anytime';
    const CURRENT_YEAR = new Date().getFullYear();
    const PHONE = '(555) 012-3456';

    const NAV_LINKS = [
        { label: 'Home',     href: 'index.html',    icon: 'fa-home' },
        { label: 'Home 2',   href: 'home2.html',    icon: 'fa-door-open' },
        { label: 'About',    href: 'about.html',    icon: 'fa-circle-info' },
        { label: 'Services', href: 'services.html', icon: 'fa-screwdriver-wrench' },
        { label: 'Pricing',  href: 'pricing.html',  icon: 'fa-tags' },
        { label: 'Tires',    href: 'tires.html',    icon: 'fa-circle-dot' },
        { label: 'Contact',  href: 'contact.html',  icon: 'fa-envelope' },
        { label: 'Dashboard',href: 'dashboard.html',icon: 'fa-gauge' },
    ];

    const SOCIAL_LINKS = [
        { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
        { icon: 'fab fa-instagram',  href: '#', label: 'Instagram' },
        { icon: 'fab fa-x-twitter',  href: '#', label: 'X / Twitter' },
        { icon: 'fab fa-youtube',    href: '#', label: 'YouTube' },
    ];

    const LOGO_SVG = `<svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Outer tire treads -->
        <circle cx="50" cy="50" r="44" stroke="#FF5500" stroke-width="8" stroke-dasharray="14 6"/>
        <circle cx="50" cy="50" r="44" stroke="#FF5500" stroke-width="2" opacity="0.4"/>
        <!-- Inner alloy rim rim -->
        <circle cx="50" cy="50" r="26" stroke="#475569" stroke-width="4"/>
        <circle cx="50" cy="50" r="10" fill="#FF5500"/>
        <!-- Alloy spokes -->
        <path d="M50 12 L50 88 M12 50 L88 50 M23 23 L77 77 M23 77 L77 23" stroke="#475569" stroke-width="4.5" stroke-linecap="round"/>
    </svg>`;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Render Navbar ---
    function renderNavbar() {
        const navLinksDesktop = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage;
            return `<a href="${link.href}" class="nav-link text-xs 2xl:text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:text-[#FF5500] relative group ${isActive ? 'text-[#FF5500]' : 'text-slate-700 dark:text-slate-300'}" style="font-family:'Plus Jakarta Sans',sans-serif;">
                ${link.label}
                <span class="absolute -bottom-1 left-0 h-0.5 bg-[#FF5500] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}"></span>
            </a>`;
        }).join('');

        const navLinksMobile = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage;
            return `<a href="${link.href}" class="nav-link flex items-center gap-3 px-4 py-3.5 text-sm font-bold border-b border-slate-100 dark:border-slate-800 hover:text-[#FF5500] transition-all duration-300 ${isActive ? 'text-[#FF5500] bg-[#FFF2EB] dark:bg-[#FF5500]/10' : 'text-slate-700 dark:text-slate-200'}">
                <i class="fas ${link.icon} w-5 text-sm opacity-50"></i> ${link.label}
            </a>`;
        }).join('');

        return `
        <div id="scroll-progress" style="width:0%"></div>
        <nav id="main-nav" class="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-2.5 group shrink-0 logo-spin">
                        ${LOGO_SVG}
                        <span class="font-black text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-[#FF5500] transition-colors" style="font-family:'Space Grotesk',sans-serif;">
                            Tire<span class="text-[#FF5500]">Xpress</span>
                        </span>
                    </a>

                    <!-- Desktop Nav Links -->
                    <div id="desktop-links" class="hidden xl:flex items-center space-x-4 2xl:space-x-6">
                        ${navLinksDesktop}
                    </div>

                    <!-- Right Side Actions -->
                    <div class="flex items-center gap-2">
                        <!-- RTL Toggle -->
                        <button id="dir-toggle" class="js-dir-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#FF5500]/50 transition-all group shrink-0" aria-label="Toggle text direction">
                            <span class="text-[10px] font-black text-slate-600 dark:text-slate-400 group-hover:text-[#FF5500] uppercase tracking-wider">LTR</span>
                        </button>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle-desktop" class="js-theme-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#FF5500]/50 transition-all group shrink-0" aria-label="Toggle theme">
                            <i class="fas fa-moon text-sm text-slate-600 dark:text-slate-400 group-hover:text-[#FF5500] transition-colors"></i>
                        </button>

                        <!-- Secondary CTA: Get a Quote -->
                        <a href="pricing.html" class="hidden xl:inline-flex items-center gap-1.5 border-2 border-slate-800 dark:border-slate-500 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700 transition-all">
                            Get a Quote
                        </a>

                        <!-- Primary CTA: Sign Up -->
                        <a href="signup.html" class="hidden xl:inline-flex items-center gap-1.5 btn-primary px-4 py-2 rounded-xl text-xs">
                            <i class="fas fa-user-plus text-xs"></i> Sign Up
                        </a>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-btn" class="xl:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" aria-label="Toggle menu">
                            <i class="fas fa-bars text-xl" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div class="max-w-7xl mx-auto px-4 pt-2 pb-6">
                    <div class="grid grid-cols-1 gap-0 mb-4">
                        ${navLinksMobile}
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-5">
                        <div class="flex gap-3 w-full sm:w-auto">
                            <button class="js-dir-toggle flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all flex-1 sm:flex-none text-xs font-black uppercase">
                                <i class="fas fa-arrows-left-right text-sm"></i>
                                <span>LTR / RTL</span>
                            </button>
                            <button class="js-theme-toggle flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all flex-1 sm:flex-none text-xs font-black uppercase">
                                <i class="fas fa-moon text-sm"></i>
                                <span>Theme</span>
                            </button>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <a href="pricing.html" class="flex-1 sm:flex-none text-center border-2 border-slate-800 dark:border-slate-500 text-slate-800 dark:text-slate-200 px-5 py-3.5 rounded-xl font-black uppercase tracking-wider text-xs hover:bg-slate-800 hover:text-white transition-all">
                                Get a Quote
                            </a>
                            <a href="signup.html" class="flex-1 sm:flex-none text-center btn-primary px-5 py-3.5 rounded-xl text-xs">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s =>
            `<a href="${s.href}" aria-label="${s.label}" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-[#FF5500] hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-[#FF5500]">
                <i class="${s.icon} text-sm"></i>
            </a>`
        ).join('');

        return `
        <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-6 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4">
                <!-- Main Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    <!-- Brand -->
                    <div class="lg:col-span-1 space-y-5">
                        <a href="index.html" class="flex items-center gap-2.5 group logo-spin">
                            ${LOGO_SVG}
                            <span class="font-black text-xl text-slate-900 dark:text-white" style="font-family:'Space Grotesk',sans-serif;">Tire<span class="text-[#FF5500]">Xpress</span></span>
                        </a>
                        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            ${BRAND_TAGLINE}. Professional mobile tire installation, flat repair & rotation services on demand.
                        </p>
                        <div class="flex gap-2.5">${socialLinksHtml}</div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-black mb-5 text-slate-900 dark:text-white uppercase text-xs tracking-widest" style="font-family:'Space Grotesk',sans-serif;">Quick Links</h4>
                        <ul class="text-sm space-y-3 text-slate-500 dark:text-slate-400">
                            <li><a href="index.html"    class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Home</a></li>
                            <li><a href="home2.html"    class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Home 2</a></li>
                            <li><a href="about.html"    class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">About Us</a></li>
                            <li><a href="services.html" class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Services</a></li>
                            <li><a href="pricing.html"  class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Pricing</a></li>
                            <li><a href="tires.html"    class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Tire Inventory</a></li>
                            <li><a href="contact.html"  class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Contact</a></li>
                        </ul>
                    </div>

                    <!-- Support -->
                    <div>
                        <h4 class="font-black mb-5 text-slate-900 dark:text-white uppercase text-xs tracking-widest" style="font-family:'Space Grotesk',sans-serif;">Support</h4>
                        <ul class="text-sm space-y-3 text-slate-500 dark:text-slate-400">
                            <li><a href="login.html"       class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Sign In</a></li>
                            <li><a href="signup.html"      class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Register</a></li>
                            <li><a href="dashboard.html"   class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Dashboard</a></li>
                            <li><a href="comingsoon.html"  class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Coming Soon</a></li>
                            <li><a href="404.html"         class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">404 Page</a></li>
                            <li><a href="#"                class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">FAQ</a></li>
                            <li><a href="#"                class="hover:text-[#FF5500] hover:ps-2 transition-all duration-200 block">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-red-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-red-100 dark:border-slate-700 hover:shadow-lg transition-all">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-circle-dot text-[#FF5500]"></i>
                            <h4 class="font-black text-slate-900 dark:text-white" style="font-family:'Space Grotesk',sans-serif;">Stay Updated</h4>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">Get exclusive deals, tire tips & service alerts.</p>
                        <form id="newsletter-form" class="space-y-2">
                            <input type="email" required placeholder="Your email address"
                                class="w-full px-4 py-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 rounded-xl outline-none transition-all" />
                            <button type="submit" class="btn-primary w-full py-3 rounded-xl text-sm">
                                Subscribe
                            </button>
                        </form>
                        <p id="newsletter-success" class="hidden text-[10px] text-green-500 mt-2 font-black uppercase tracking-wider text-center animate-pulse">
                            âœ“ You're subscribed! Thanks!
                        </p>
                    </div>
                </div> <!-- Closes .grid -->
                
                <!-- Bottom Bar -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-7">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p class="text-xs uppercase tracking-widest text-slate-400">
                            &copy; ${CURRENT_YEAR} TireXpress. <span class="mx-1">|</span> Mobile Tire Service. All rights reserved.
                        </p>
                        <div class="flex items-center gap-1 text-slate-400 text-xs">
                            <i class="fas fa-phone text-[#FF5500]"></i>
                            <span class="font-bold tracking-wider">${PHONE}</span>
                            <span class="mx-3 text-slate-300 dark:text-slate-700">|</span>
                            <a href="#" class="hover:text-[#FF5500] transition-colors uppercase tracking-wider">Privacy</a>
                            <span class="mx-2">·</span>
                            <a href="#" class="hover:text-[#FF5500] transition-colors uppercase tracking-wider">Terms</a>
                        </div>
                    </div>
                </div>
            </div> <!-- Closes .max-w-7xl -->
        </footer>

        <!-- Back to Top -->
        <button id="back-to-top" aria-label="Back to top">
            <i class="fas fa-chevron-up text-sm"></i>
        </button>`;
    }

    // --- Initialize ---
    function init() {
        const navContainer = document.getElementById('navbar-container');
        if (navContainer) navContainer.innerHTML = renderNavbar();

        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = renderFooter();

        initTheme();
        initDirection();
        initMobileMenu();
        initScrollEffects();
        initNewsletter();
        initScrollReveal();
        initSpotlight();
        initTypingText();
        initMagneticButtons();
        removePageLoader();
    }

    // --- Theme ---
    function initTheme() {
        const html = document.documentElement;
        const themeBtns = document.querySelectorAll('.js-theme-toggle');

        const setTheme = (isDark) => {
            if (isDark) {
                html.classList.add('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-sun text-sm text-yellow-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Light Mode';
                });
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-moon text-sm text-slate-600 dark:text-slate-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Dark Mode';
                });
                localStorage.setItem('theme', 'light');
            }
        };

        themeBtns.forEach(btn => btn.addEventListener('click', () => setTheme(!html.classList.contains('dark'))));

        if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true);
        }
    }

    // --- RTL/LTR ---
    function initDirection() {
        const html = document.documentElement;
        const dirBtns = document.querySelectorAll('.js-dir-toggle');

        const setDir = (dir) => {
            html.setAttribute('dir', dir);
            localStorage.setItem('dir', dir);
            dirBtns.forEach(btn => {
                const span = btn.querySelector('span');
                if (span) span.textContent = dir === 'rtl' ? 'RTL Mode' : 'LTR Mode';
                else {
                    const textNode = [...btn.childNodes].find(n => n.nodeType === 3);
                    if (textNode) textNode.textContent = dir.toUpperCase();
                    // fallback for the desktop toggle showing only text
                    const innerSpan = btn.querySelector('span');
                    if (innerSpan) innerSpan.textContent = dir.toUpperCase();
                }
            });
        };

        dirBtns.forEach(btn => btn.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir') || 'ltr';
            setDir(currentDir === 'ltr' ? 'rtl' : 'ltr');
        }));

        if (localStorage.getItem('dir') === 'rtl') setDir('rtl');
    }

    // --- Mobile Menu ---
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                if (menuIcon) menuIcon.className = isHidden ? 'fas fa-bars text-xl' : 'fas fa-times text-xl';
            });
        }
    }

    // --- Scroll Effects ---
    function initScrollEffects() {
        const scrollProgress = document.getElementById('scroll-progress');
        const backToTop = document.getElementById('back-to-top');
        const nav = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            if (scrollProgress) scrollProgress.style.width = scrollPercent + '%';

            if (backToTop) {
                backToTop.classList.toggle('visible', scrollTop > 400);
            }

            if (nav) nav.classList.toggle('shadow-lg', scrollTop > 10);
        });

        if (backToTop) {
            backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }
    }

    // --- Newsletter ---
    function initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const btn = this.querySelector('button');
                btn.innerHTML = '<i class="fas fa-circle-notch animate-spin-slow"></i> Subscribing...';
                setTimeout(() => {
                    this.classList.add('hidden');
                    const success = document.getElementById('newsletter-success');
                    if (success) success.classList.remove('hidden');
                }, 1500);
            });
        }
    }

    // --- Scroll Reveal ---
    function initScrollReveal() {
        const selectors = ['.reveal', '.reveal-left', '.reveal-right'];
        selectors.forEach(sel => {
            const elements = document.querySelectorAll(sel);
            if (elements.length === 0) return;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('active');
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            elements.forEach(el => observer.observe(el));
        });
    }

    // --- Page Loader ---
    function removePageLoader() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('loaded');
                setTimeout(() => loader.remove(), 500);
            }, 300);
        }
    }

    // --- Spotlight Effect ---
    function initSpotlight() {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    }

    // --- Typing Effect ---
    function initTypingText() {
        const elements = document.querySelectorAll('.js-typing-text');
        elements.forEach(el => {
            const textList = JSON.parse(el.getAttribute('data-typing-words') || '[]');
            if (textList.length === 0) return;
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let currentText = '';

            function type() {
                const fullWord = textList[wordIndex];
                if (isDeleting) {
                    currentText = fullWord.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    currentText = fullWord.substring(0, charIndex + 1);
                    charIndex++;
                }

                el.textContent = currentText;

                let typeSpeed = isDeleting ? 40 : 100;

                if (!isDeleting && charIndex === fullWord.length) {
                    typeSpeed = 1800; // pause at full word
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % textList.length;
                    typeSpeed = 400; // pause before typing next
                }

                setTimeout(type, typeSpeed);
            }
            el.classList.add('typing-cursor');
            type();
        });
    }

    // --- Magnetic Buttons Effect ---
    function initMagneticButtons() {
        const btns = document.querySelectorAll('.magnetic-btn');
        btns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.03)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // --- DOM Ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


