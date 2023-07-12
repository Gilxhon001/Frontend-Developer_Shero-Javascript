const myDiv = document.getElementById('myDiv');
const moveRightBtn = document.getElementById('moveRightBtn');
const moveLeftBtn = document.getElementById('moveLeftBtn');

moveRightBtn.addEventListener('click', function() {
    const currentPosition = parseInt(myDiv.style.left) || 0;
    myDiv.style.left = (currentPosition + 10) + 'px';
});

moveLeftBtn.addEventListener('click', function() {
    const currentPosition = parseInt(myDiv.style.left) || 0;
    myDiv.style.left = (currentPosition - 10) + 'px';
});
