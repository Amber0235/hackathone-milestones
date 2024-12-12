var togglerButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
togglerButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
