function solve() {
    const inputText = document.querySelector("textarea").value;
    const restaurants = JSON.parse(inputText); // Парсваме входа като масив

    const restaurantData = {};
//["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
    // Обработваме информацията за ресторантите
    for (const entry of restaurants) {
        const [restaurantName, workersData] = entry.split(" - ");
        const workersArray = workersData.split(", ").map(worker => {

            const [name, salary] = worker.split(" ");
            return { name, salary: Number(salary) };
        });

        if (!restaurantData[restaurantName]) {
            restaurantData[restaurantName] = { workers: [], avgSalary: 0, bestSalary: 0 };
        }

        // Добавяме новите към съществуващите работници
        restaurantData[restaurantName].workers.push(...workersArray);

        //Изчисляваме средната и най-добрата заплата
        const totalSalaries = restaurantData[restaurantName].workers.reduce((sum, worker) => sum + worker.salary, 0);

        restaurantData[restaurantName].avgSalary = totalSalaries / restaurantData[restaurantName].workers.length;
        restaurantData[restaurantName].bestSalary = Math.max(...restaurantData[restaurantName].workers.map(worker => worker.salary));
    }

    // Намираме най-добрия ресторант по средна заплата
    let bestRestaurantName = '';
    let bestAverageSalary = 0;

    for (const name in restaurantData) {

        if (restaurantData[name].avgSalary > bestAverageSalary) {

            bestRestaurantName = name;
            bestAverageSalary = restaurantData[name].avgSalary;
        }
    }

    // Вземаме работниците на най-добрия ресторант и ги сортираме
    const bestRestaurantWorkers = restaurantData[bestRestaurantName].workers.sort((a, b) => b.salary - a.salary);

   
    const bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${restaurantData[bestRestaurantName].bestSalary.toFixed(2)}`;
    const workersOutput = bestRestaurantWorkers  
        .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
        .join(" ");

  
    document.querySelector("#bestRestaurant p").textContent = bestRestaurantOutput;
    document.querySelector("#workers p").textContent = workersOutput;
}
