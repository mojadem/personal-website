var btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>

    btn.addEventListener("click", () => {

        if (btn.classList.contains("active")) {
            deactivate(btn);
            document.getElementById("info-viewport").classList.remove("active");
            btns.forEach((otherBtn) => {
                otherBtn.classList.remove("inactive");
            })
        } else {
            activate(btn);
            document.getElementById("info-viewport").classList.add("active");
            btns.forEach((otherBtn) => {
                if (!btn.isSameNode(otherBtn)) {
                    deactivate(otherBtn);
                }
            })
        }
    })
);

function activate(el) {
    var id = el.dataset.topic;
    var target = document.getElementById(id);
    target.classList.add("visible");
    el.classList.add("active");
    el.classList.remove("inactive");
}

function deactivate(el) {
    var id = el.dataset.topic;
    var target = document.getElementById(id);
    target.classList.remove("visible");
    el.classList.remove("active");
    el.classList.add("inactive");
}