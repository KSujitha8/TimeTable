document.getElementById('addClass').addEventListener('click', addOrUpdateClass);

function addOrUpdateClass() {
    const className = document.getElementById('className').value;
    const staffName = document.getElementById('staffName').value;
    const day = document.getElementById('day').value;
    const timeSlot = document.getElementById('timeSlot').value;

    if (className && staffName && day && timeSlot) {
        const timetable = document.getElementById('timetable').getElementsByTagName('tbody')[0];
        const row = Array.from(timetable.rows).find(row => row.cells[0].textContent === day);

        if (row) {
            const cell = row.cells[timeSlot];
            if (!cell.textContent || confirm('This slot is already occupied. Do you want to overwrite it?')) {
                cell.textContent = `${className}\n(${staffName})`;
            }
        }
    } else {
        alert('Please fill in all the details.');
    }

    clearInputs();
}

function clearInputs() {
    document.getElementById('className').value = '';
    document.getElementById('staffName').value = '';
    document.getElementById('day').value = 'Monday';
    document.getElementById('timeSlot').value = '1';
}

document.getElementById('timetable').addEventListener('click', function(event) {
    const cell = event.target;
    if (cell.tagName === 'TD' && cell.cellIndex > 0) {
        const day = cell.parentNode.firstChild.textContent;
        const timeSlot = cell.cellIndex;

        const [className, staffName] = cell.textContent.split('\n');

        document.getElementById('className').value = className || '';
        document.getElementById('staffName').value = staffName ? staffName.replace(/[()]/g, '') : '';
        document.getElementById('day').value = day;
        document.getElementById('timeSlot').value = timeSlot;
    }
});



