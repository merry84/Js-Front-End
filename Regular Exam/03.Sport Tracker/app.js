window.addEventListener("load", solve);

function solve() {
    const API_URL = "http://localhost:3030/jsonstore/workout/";

    const workoutInput = document.querySelector("#workout");
    const locationInput = document.querySelector("#location");
    const dateInput = document.querySelector("#date");
    const addBtn = document.querySelector("#add-workout");
    const editBtn = document.querySelector("#edit-workout");
    const loadBtn = document.querySelector("#load-workout");
    const listContainer = document.querySelector("#list");

    let currWorkoutId = null; 

  
    loadBtn.addEventListener("click", async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            listContainer.innerHTML = "";

            Object.values(data).forEach(({ _id, workout, location, date }) => {
                const workoutDiv = createWorkoutElement(_id, workout, location, date);
                listContainer.appendChild(workoutDiv);
            });

            editBtn.disabled = true; 
        } catch (error) {
            console.error("Error loading workouts:", error);
        }
    });

  
    addBtn.addEventListener("click", async () => {
        const workout = workoutInput.value.trim();
        const location = locationInput.value.trim();
        const date = dateInput.value.trim();

        if (!workout || !location || !date) {
            return alert("All fields must be filled!");
        }

        try {
            await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ workout, location, date }),
            });

          
            loadBtn.click();
            clearInputs();
        } catch (error) {
            console.error("Error adding workout:", error);
        }
    });

  
    editBtn.addEventListener("click", async () => {
        const workout = workoutInput.value.trim();
        const location = locationInput.value.trim();
        const date = dateInput.value.trim();

        if (!workout || !location || !date) {
            return alert("All fields must be filled!");
        }

        try {
            await fetch(`${API_URL}${currWorkoutId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ workout, location, date }),
            });

            
            loadBtn.click();
            clearInputs();
            addBtn.disabled = false;
            editBtn.disabled = true;
        } catch (error) {
            console.error("Error editing workout:", error);
        }
    });

   
    function createWorkoutElement(id, workout, location, date) {
        const container = document.createElement("div");
        container.className = "container";

        const h2 = document.createElement("h2");
        h2.textContent = workout;

        const h3Date = document.createElement("h3");
        h3Date.textContent = date;

        const h3Location = document.createElement("h3");
        h3Location.textContent = location;

        const btnContainer = document.createElement("div");
        btnContainer.id = "buttons-container";

        const chanceBtn = document.createElement("button");
        chanceBtn.className = "change-btn";
        chanceBtn.textContent = "Change";
        chanceBtn.addEventListener("click", () => {
            workoutInput.value = workout;
            locationInput.value = location;
            dateInput.value = date;
            currWorkoutId = id;

            addBtn.disabled = true;
            editBtn.disabled = false;
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Done";
        deleteBtn.addEventListener("click", async () => {
            try {
                await fetch(`${API_URL}${id}`, { method: "DELETE" });
                loadBtn.click();
            } catch (error) {
                console.error("Error deleting workout:", error);
            }
        });

        btnContainer.appendChild(chanceBtn);
        btnContainer.appendChild(deleteBtn);

        container.appendChild(h2);
        container.appendChild(h3Date);
        container.appendChild(h3Location);
        container.appendChild(btnContainer);

        return container;
    }

    
    function clearInputs() {
        workoutInput.value = "";
        locationInput.value = "";
        dateInput.value = "";
    }
}
