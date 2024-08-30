const originalGradient = document.getElementsByTagName("h1")[0].style.backgroundImage;
document.getElementById('Btn').addEventListener('click', function() {
    document.getElementById('initialContent').style.display = 'none';
    document.getElementById('gif-div').style.display = 'block';
    document.getElementsByTagName("h1")[0].style.backgroundImage = "none";
    document.getElementsByTagName("h1")[0].style.backgroundColor = "pink";
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('initialContent').style.display = 'block';
    document.getElementById('gif-div').style.display = 'none';
    document.getElementsByTagName("h1")[0].style.backgroundImage = originalGradient;
    document.getElementsByTagName("h1")[0].style.backgroundColor = "";
});