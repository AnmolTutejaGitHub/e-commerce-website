// deleting from row
const crosses = document.querySelectorAll(".fa-circle-xmark");

for (let i = 0; i < crosses.length; i++) {
    crosses[i].addEventListener('click', function (e) {
        e.preventDefault();
        const curr = crosses[i].closest('tr');
        curr.remove();
    })
}