const container = document.getElementById('container');

for (let i = 0; i < 7; i++) {
    const div = document.createElement('div');
    const innerDiv = document.createElement('div');

    innerDiv.textContent = 'GILXHON'[i];
    innerDiv.classList.add('hide')

    div.appendChild(innerDiv);
    container.appendChild(div);

    div.addEventListener('mouseover', () => {
        div.classList.add('background');
        innerDiv.classList.remove('hide');
        innerDiv.classList.add('show');
    });

    div.addEventListener('mouseout', () => {
        div.classList.remove('background');
        innerDiv.classList.remove('show');
        innerDiv.classList.add('hide');
    });
}