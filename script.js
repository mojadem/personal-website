var btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>

    btn.addEventListener("click", () => {

        if (btn.classList.contains("active")) {
            var id = btn.dataset.topic;
            var target = document.getElementById(id);

            deactivate(btn);
            target.parentNode.classList.remove("active"); // deactivate info-viewport

            btns.forEach((otherBtn) => {
                if (btn.parentNode.isSameNode(otherBtn.parentNode)) {
                    otherBtn.classList.remove("inactive");
                }
            })
        } else {
            var id = btn.dataset.topic;
            var target = document.getElementById(id);

            activate(btn);
            target.parentNode.classList.add("active"); // activate info-viewport

            btns.forEach((otherBtn) => {
                if (!btn.isSameNode(otherBtn) && btn.parentNode.isSameNode(otherBtn.parentNode)) {
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