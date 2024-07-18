const insert = document.getElementById('canvas');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='tableClass'>
    <table>
    <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Key name</th>
    </tr>
    <tr>
    <td>${e.key == " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
});