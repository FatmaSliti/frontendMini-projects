let el = document.querySelector(".scroller")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);


window.addEventListener("scroll", () => {
    let scrollVal = document.documentElement.scrollTop;
    el.style.width = `${(scrollVal / height) * 100}%` 
})
