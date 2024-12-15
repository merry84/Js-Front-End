window.addEventListener("load", solve);

function solve() {
  const emailInput = document.getElementById("email");
  const eventInput = document.getElementById("event");
  const locationInput = document.getElementById("location");
  const nextBtn = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const eventList = document.getElementById("event-list");

  function checkInputs() {
    nextBtn.disabled = !(
      emailInput.value.trim() &&
      eventInput.value.trim() &&
      locationInput.value.trim()
    );
  }

  emailInput.addEventListener("input", checkInputs);
  eventInput.addEventListener("input", checkInputs);
  locationInput.addEventListener("input", checkInputs);

  nextBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const event = eventInput.value.trim();
    const location = locationInput.value.trim();

    if (!email || !event || !location) return;

    const li = document.createElement("li");
    li.className = "application";

    li.innerHTML = `
      <article>
        <h4>Email: ${email}</h4>
        <p><strong>Event:</strong><br> ${event}</p>
        <p><strong>Location:</strong><br> ${location}</p>
      </article>
      <button class="action-btn edit">edit</button>
      <button class="action-btn apply">apply</button>
    `;

    previewList.appendChild(li);

    clearInputs();

    const editBtn = li.querySelector(".edit");
    const applyBtn = li.querySelector(".apply");

    editBtn.addEventListener("click", () => {
      emailInput.value = email;
      eventInput.value = event;
      locationInput.value = location;
      li.remove();
      checkInputs();
    });

    applyBtn.addEventListener("click", () => {
      li.innerHTML = `
        <article>
          <h4>${email}</h4>
          <p><strong>Event:</strong><br> ${event}</p>
          <p><strong>Location:</strong><br>${location}</p>
        </article>
      `;
      eventList.appendChild(li);
    });
  });

  function clearInputs() {
    emailInput.value = "";
    eventInput.value = "";
    locationInput.value = "";
    nextBtn.disabled = true;
  }
}
