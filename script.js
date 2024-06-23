document.getElementById('Btn').addEventListener('click', function() {
    document.getElementById('initialContent').style.display = 'none';
    document.getElementById('gif-div').style.display = 'block';
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('initialContent').style.display = 'block';
    document.getElementById('gif-div').style.display = 'none';
});