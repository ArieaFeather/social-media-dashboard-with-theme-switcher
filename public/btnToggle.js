$("#darktoggle").click(darkToggle);

function darkToggle() {
    $("body").toggleClass("dm--background-body");
    $(".btn-label").toggleClass("dm-text-1");
    $(".header").toggleClass("dm-text-2");
    $(".stat--main").toggleClass("dm-text-2");
    $(".stat--secondary").toggleClass("dm-text-2");
    $(".stat--type").toggleClass("dm-text-2");
    $(".dashboard--item").toggleClass("dm--background-card");
}
