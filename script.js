document.querySelectorAll(".btn").forEach((el) =>

    el.addEventListener("click", () => {

        // var id = el.dataset.food;

        // var target = document.getElementById(id);

        // target.classList.toggle("visible");

        if (el.classList.contains("active")) {
            el.classList.remove("active");
        } else {
            el.classList.add("active");
        }
    })
);
