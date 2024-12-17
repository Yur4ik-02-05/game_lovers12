let logo = document.getElementById("logo");
logo.addEventListener('click', function() {
    window.location.href = 'index.html'
})

let marks = document.getElementById("mark");
if (marks != null){
    marks.addEventListener('click', function() {
        window.location.href = 'awards.html'
    })
}
