function puzzleAnim() {
  let puzzlePics = document.querySelectorAll(".footer-card img");
  puzzlePics.forEach((x, i) => {
    x.classList.add("slide" + (i + 1));
  });
}

let ticking = false;
let viewHeight = document.documentElement.clientHeight;
let footer = document.querySelector(".footer-card");
let footerBottom = footer.getBoundingClientRect().bottom;

window.addEventListener("scroll", function(e) {
  viewHeight = document.documentElement.clientHeight;
  footerBottom = footer.getBoundingClientRect().bottom;

  if (!ticking) {
    if (footerBottom - viewHeight < 50) {
      puzzleAnim();
      ticking = true;
    }
  }
});

// client filter
const filters = document.querySelectorAll(".industry-list li");
const clients = document.querySelectorAll(".client-list .client");
let selectedFilters = [];

filters.forEach(el => {
  el.addEventListener("click", e => {
    let clientFilters = updateFilters(e);
    updateClients(clientFilters);
  });
});

function updateFilters(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    selectedFilters.push(e.target.dataset.industry);
  } else {
    e.target.classList.remove("active");
    selectedFilters = selectedFilters.filter(
      x => x !== e.target.dataset.industry
    );
  }

  return selectedFilters;
}

function updateClients(arr) {
  clients.forEach(client => {
    if (arr.length === 0) {
      client.classList.remove("hide-client");
    } else {
      if (arr.includes(client.dataset.industry)) {
        client.classList.remove("hide-client");
      } else {
        client.classList.add("hide-client");
      }
    }
  });
}
