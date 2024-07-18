document.getElementById('loadButton').addEventListener('click', async () => {
    const module = await import('./module.js');
    module.showMessage();
});