// js/app.js
import { loadComponent } from './component-loader.js';

class AppBootstrap {
    constructor() {
        this.pageKey = document.body.dataset.page;
        this.init();
    }

    async init() {
        await this.loadShell();
        this.highlightActiveNav();
        // page-initializer will be invoked here based on this.pageKey in the next step
    }

    async loadShell() {
        // Paths are relative to the root for now; a path resolver will be added for nested pages
        await Promise.all([
            loadComponent('sidebar-mount', 'components/sidebar.html'),
            loadComponent('header-mount', 'components/header.html')
        ]);
    }

    highlightActiveNav() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.dataset.module === this.pageKey) {
                link.setAttribute('aria-current', 'page');
                link.style.fontWeight = 'bold';
                link.style.color = 'var(--color-accent)';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.PersonalLifeOS = new AppBootstrap();
});
