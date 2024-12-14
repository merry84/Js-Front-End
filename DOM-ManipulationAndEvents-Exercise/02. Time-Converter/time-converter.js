document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const daysInput = document.getElementById("days-input");
    const hoursInput = document.getElementById("hours-input");
    const minutesInput = document.getElementById("minutes-input");
    const secondsInput = document.getElementById("seconds-input");

    const round = (num) => num.toFixed(2); 
    const convert = (source, value) => {
        const days = source === "days" ? value : 
                     source === "hours" ? value / 24 : 
                     source === "minutes" ? value / 1440 : 
                     value / 86400;

        daysInput.value = round(days);
        hoursInput.value = round(days * 24);
        minutesInput.value = round(days * 1440);
        secondsInput.value = round(days * 86400);
    };

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = form.querySelector("input[type='number']");
            const type = input.id.split("-")[0];
            const value = parseFloat(input.value);
            if (!isNaN(value)) convert(type, value);
        });
    });
}
