function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    if (!gradient) {
        console.error("Gradient element not found.");
        return;
    }

    gradient.addEventListener('mousemove', (event) => {
        const width = gradient.clientWidth; // Ширината на елемента
        const x = event.offsetX; // Позиция на мишката спрямо елемента

        if (width === 0) {
            console.error("Gradient width is 0.");
            return;
        }

        const percentage = Math.floor((x / width) * 100); // Изчисляване на процента
        result.textContent = `${percentage}%`; 
    });

    gradient.addEventListener('mouseout', () => {
        result.textContent = ''; 
    });
}
