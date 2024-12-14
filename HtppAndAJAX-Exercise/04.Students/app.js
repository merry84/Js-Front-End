function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

const tableBody = document.querySelector('#results tbody');
const submitButton = document.getElementById('submit');
const inputs = {
    firstName: document.querySelector('input[name="firstName"]'),
    lastName: document.querySelector('input[name="lastName"]'),
    facultyNumber: document.querySelector('input[name="facultyNumber"]'),
    grade: document.querySelector('input[name="grade"]'),
};


async function loadStudents() {
    tableBody.innerHTML = '';

    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Грешка при зареждане на студентите.');
        }

        const data = await response.json();

        Object.values(data).forEach(student => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.facultyNumber}</td>
                <td>${student.grade}</td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Грешка:', error);
    }
}

async function createStudent() {
    const firstName = inputs.firstName.value.trim();
    const lastName = inputs.lastName.value.trim();
    const facultyNumber = inputs.facultyNumber.value.trim();
    const grade = inputs.grade.value.trim();

    if (!firstName || !lastName || !facultyNumber || !grade || isNaN(Number(grade))) {
        alert('Моля, попълнете всички полета коректно!');
        return;
    }

    const student = {
        firstName,
        lastName,
        facultyNumber,
        grade: Number(grade),
    };

    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });

        Object.values(inputs).forEach(input => input.value = '');
        loadStudents(); 
    } catch (error) {
        console.error('Грешка при създаване на студент:', error);
    }
}

window.addEventListener('load', loadStudents);
submitButton.addEventListener('click', createStudent);
}

attachEvents();