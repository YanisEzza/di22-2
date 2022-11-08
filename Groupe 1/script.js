const p1 = document.querySelectorAll('.hover');
p1.forEach(p => {
    p.addEventListener('mouseover', () => {
        console.log(p.innerHTML);
    })
});