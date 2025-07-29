const up = document.querySelector("#up");
        up.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                up.classList.remove("d-none");
            } else {
                up.classList.add("d-none");
            }
        });

const stickyHeader = document.getElementById("stickyHeader");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      stickyHeader.classList.add("position-fixed", "top-0", "start-0", "px-5", "w-100", "shadow");
    } else {
      stickyHeader.classList.remove("position-fixed", "top-0", "start-0", "px-5", "w-100", "shadow");
    }
  });

  const input = document.querySelector("#searchInput");
  const dropdown = document.querySelector("#searchDropdown");
  const overlay = document.querySelector("#searchOverlay");
  const container = document.querySelector("#searchContainer");
  const links = dropdown.querySelectorAll("a");

  input.addEventListener("focus", () => {
    dropdown.classList.remove("d-none");
    overlay.classList.add("show");
  });

  document.addEventListener("click", function (e) {
    if (!container.contains(e.target)) {
      dropdown.classList.add("d-none");
      overlay.classList.remove("show");
    }
  });

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      input.value = this.innerText;
      dropdown.classList.add("d-none");
      overlay.classList.remove("show");
    });
  });