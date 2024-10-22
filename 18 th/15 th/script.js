// Selecting the element with the ID 'project'
const select = document.getElementById('project');

// Adding an event listener to the window object to detect key presses
window.addEventListener('keydown', (e) => {
    // Update the innerHTML of the 'project' element with a table displaying key information
    select.innerHTML = `
    <div>
        <table>
            <tr>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>`;
});
