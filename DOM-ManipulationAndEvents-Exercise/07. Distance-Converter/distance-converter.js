document.addEventListener('DOMContentLoaded', solve);

function solve() {
   
    const conversionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    function convertDistance() {

        const inputDistance = parseFloat(document.getElementById("inputDistance").value);
        const inputUnit = document.getElementById("inputUnits").value;
        const outputUnit = document.getElementById("outputUnits").value;      

        const distanceInMeters = inputDistance * conversionRates[inputUnit];

        const convertedDistance = distanceInMeters / conversionRates[outputUnit];

        document.getElementById("outputDistance").value = convertedDistance.toFixed(2);
    }

    document.getElementById("convert").addEventListener("click", convertDistance);

}