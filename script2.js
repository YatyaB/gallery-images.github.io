var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var originalBtn = document.querySelector('.original-btn');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function () {
        displayedImage.setAttribute('src', this.getAttribute('src'));
        }
    }

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    var button = btn.getAttribute('class');
    if (button === 'dark') {
        btn.setAttribute("class", 'white');
        btn.textContent = 'Светлее';
        overlay.style.backgroundColor = 'DarkGray';
        overlay.style.opacity = '0.5';
    } else if (button === 'white') {
        btn.setAttribute("class", 'dark');
        btn.textContent = 'Темнее';
        overlay.style.backgroundColor = "AntiqueWhite";
        overlay.style.opacity = '0.5';
    }
}

originalBtn.onclick = function () {
    overlay.style.opacity = '0';
}