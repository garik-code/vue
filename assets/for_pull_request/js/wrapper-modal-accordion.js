var acc = document.getElementsByClassName("wrapper-modal-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var options = document.getElementsByClassName("option");

for (var o = 0; o < options.length; o++) {
    options[o].addEventListener('click', function(e) {
        this.parentElement.previousElementSibling.innerHTML = this.dataset.value;

        /* alert(e.target.dataset.value);  */
    })
}
