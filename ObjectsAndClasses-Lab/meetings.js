function messages(input) {
    const meetings = {};

    input.forEach(element => {
        const [weekday, person] = element.split(' ');

        // If the weekday already has a meeting scheduled, print a conflict message
        if (meetings[weekday]) {
            console.log(`Conflict on ${weekday}!`);

        }
        // If no conflict, schedule the meeting and store it
        else {
            meetings[weekday] = person;
            console.log(`Scheduled for ${weekday}`);

        }

    });
    for (const weekday in meetings) {

        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}
messages(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);