// js/component-loader.js
export async function loadComponent(elementId, componentPath) {
    const mountPoint = document.getElementById(elementId);
    if (!mountPoint) return;

    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        
        const html = await response.text();
        mountPoint.innerHTML = html;
    } catch (error) {
        console.error(`Component Load Error:`, error);
        mountPoint.innerHTML = `<div class="error-state">Failed to load interface component.</div>`;
    }
}
