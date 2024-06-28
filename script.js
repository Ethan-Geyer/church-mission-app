// Default password for the application
const defaultPassword = "1234";

function enterDigit(digit) {
    document.getElementById('password').value += digit;
}

function clearPassword() {
    document.getElementById('password').value = '';
}

function verifyPassword() {
    const enteredPassword = document.getElementById('password').value;
    if (enteredPassword === defaultPassword) {
        window.location.href = 'menu.html';
    } else {
        document.getElementById('message').innerText = 'Incorrect Password. Please try again.';
        clearPassword();
    }
}
// app

function updateUserInfo() {
    const userInfo = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        birthdate: document.getElementById('birthdate').value,
        password: document.getElementById('userPassword').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        gender: document.getElementById('gender').value
    };
    
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    document.getElementById('updateMessage').innerText = 'Information updated successfully!';
}

function loadUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        document.getElementById('firstName').value = userInfo.firstName;
        document.getElementById('lastName').value = userInfo.lastName;
        document.getElementById('birthdate').value = userInfo.birthdate;
        document.getElementById('userPassword').value = userInfo.password;
        document.getElementById('phoneNumber').value = userInfo.phoneNumber;
        document.getElementById('gender').value = userInfo.gender;
    }
}

function saveNewEntry() {
    const newEntry = {
        date: document.getElementById('date').value,
        ministeredTo: document.getElementById('ministeredTo').value,
        itemsDonated: document.getElementById('itemsDonated').value,
        hours: document.getElementById('hours').value
    };
    
    let workLog = JSON.parse(localStorage.getItem('workLog')) || [];
    workLog.push(newEntry);
    localStorage.setItem('workLog', JSON.stringify(workLog));
    document.getElementById('entryMessage').innerText = 'New entry saved successfully!';
}

function loadWorkLog() {
    const workLog = JSON.parse(localStorage.getItem('workLog')) || [];
    const logContainer = document.getElementById('activity-log');
    logContainer.innerHTML = '';
    
    workLog.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerHTML = `
            <p>Date: ${entry.date}</p>
            <p>Ministered To: ${entry.ministeredTo}</p>
            <p>Items Donated: ${entry.itemsDonated}</p>
            <p>Hours: ${entry.hours}</p>
        `;
        logContainer.appendChild(entryDiv);
    });
}

function clearHistory() {
    localStorage.removeItem('workLog');
    loadWorkLog();
    alert('All history cleared!');
}
