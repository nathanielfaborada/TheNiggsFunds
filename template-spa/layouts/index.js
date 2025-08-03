
export function loadMainLayout() {
    const app = document.getElementById('app') || document.body;

    layoutContainer.appendChild(contentsDiv);
    app.appendChild(layoutContainer);
}