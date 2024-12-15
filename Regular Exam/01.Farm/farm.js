function manageFarmers(input) {
  

    let farmers = {};
    const n = parseInt(input[0], 10);

    for (let i = 1; i <= n; i++) {
        const [name, workArea, tasks] = input[i].split(' ');
        farmers[name] = { workArea, tasks: tasks.split(',') };
    }

    for (let i = n + 1; i < input.length; i++) {
        const command = input[i];
        if (command === "End") break;

        const [action, name, arg1, arg2] = command.split(" / ");

        if (action === "Execute") {

            const [workArea, task] = [arg1, arg2];
            console.log(
                farmers[name].workArea === workArea && farmers[name].tasks.includes(task)
                    ? `${name} has executed the task: ${task}!`
                    : `${name} cannot execute the task: ${task}.`
            );

        } else if (action === "Change Area") {
            farmers[name].workArea = arg1;
            console.log(`${name} has changed their work area to: ${arg1}`);

        } else if (action === "Learn Task") {

            if (farmers[name].tasks.includes(arg1)) {
                console.log(`${name} already knows how to perform ${arg1}.`);
            } else {
                farmers[name].tasks.push(arg1);
                console.log(`${name} has learned a new task: ${arg1}.`);
            }
        }
    }

    Object.entries(farmers).forEach(([name, info]) => {

        const tasksSorted = info.tasks.sort().join(', ');
        
        console.log(`Farmer: ${name}, Area: ${info.workArea}, Tasks: ${tasksSorted}`);
    });
}

manageFarmers([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ]
  );
