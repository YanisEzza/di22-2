const p1 = document.querySelectorAll('.hover');
paragraphes.forEach(p => {
    p.addEventListener('mouseover', () => {
        console.log(p.innerHTML);
    })
});