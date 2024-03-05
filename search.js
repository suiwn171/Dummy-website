function filterFunction(option) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById(option);
    button = div.getElementsByTagName("label");
    for (i = 0; i < button.length; i++) {
        txtValue = button[i].textContent || button[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            button[i].style.display = "inline-block";
        } else {
            button[i].style.display = "none";
        }
    }
}