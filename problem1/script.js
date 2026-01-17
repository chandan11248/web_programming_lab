let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        const result = eval(expression);
        display.value = result;
        addToHistory(expression + " = " + result);

    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    history.unshift(entry);
    if (history.length > 5) {
        history.pop();
    }
    updateHistoryUI();
}

function updateHistoryUI() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        const item = history[i];
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    }
}

function clearHistory() {
    history = [];
    updateHistoryUI();
}
