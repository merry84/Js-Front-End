function toggle() {
    const toggleButton = document.querySelector("#accordion .button");
    const extraContent = document.getElementById("extra");

    if (extraContent.style.display === "block") {

        extraContent.style.display = "none";
        toggleButton.textContent = "More";
    } else {

        extraContent.style.display = "block";
        toggleButton.textContent = "Less";
    }
}
/*function toggle() {
    const buttonElement = document.querySelector('#accordion .button');
    const moreElement = document.querySelector('#extra');

    if (moreElement.style.display === 'none' || !moreElement.style.display) {
        moreElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        moreElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}*/