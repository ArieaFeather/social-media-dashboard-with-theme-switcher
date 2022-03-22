let reflect = document.querySelectorAll(".stat--reflection");

for (let i = 0; reflect.length; i++)
    if (reflect[i].classList.contains("stat--reflection-up")) {
        reflect[i].insertAdjacentHTML(
            "afterbegin",
            '<img src="images/icon-up.svg" class="stat--reflection-img">'
        );
    } else {
        reflect[i].insertAdjacentHTML(
            "afterbegin",
            '<img src="images/icon-down.svg" class="stat--reflection-img">'
        );
    }
