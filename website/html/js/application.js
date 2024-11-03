function toggleOption(contentId) {
    var content = document.getElementById(contentId);
    var header = content.previousElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
        header.classList.remove("active");
    } else {
        content.style.display = "block";
        header.classList.add("active");
    }
}
