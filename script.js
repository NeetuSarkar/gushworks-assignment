// FAQ
const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
  });
});

// Manufacturing tabs
const tabs = document.querySelectorAll(".tab");
const title = document.querySelector(".tab-details h2");
const desc = document.querySelector(".tab-details p");

const processData = {
  "Raw Material": {
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
  },
  Extrusion: {
    title: "Precision Extrusion Process",
    desc: "Advanced extrusion machines melt HDPE material and shape it into pipes with consistent thickness and strength.",
  },
  Cooling: {
    title: "Efficient Cooling Process",
    desc: "Cooling tanks stabilize the pipe structure and ensure dimensional accuracy during production.",
  },
  Sizing: {
    title: "Accurate Pipe Sizing",
    desc: "Vacuum sizing ensures the pipe maintains a perfect circular shape and exact diameter.",
  },
  "Quality Control": {
    title: "Strict Quality Inspection",
    desc: "Each pipe undergoes multiple quality checks including pressure testing and dimensional inspection.",
  },
  Marking: {
    title: "Product Identification",
    desc: "Pipes are marked with product specifications, batch numbers, and compliance standards.",
  },
  Cutting: {
    title: "Precision Cutting Process",
    desc: "Automated cutters trim pipes to required lengths with smooth and accurate edges.",
  },
  Packaging: {
    title: "Secure Packaging",
    desc: "Finished pipes are safely packed to prevent damage during transport and storage.",
  },
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const key = tab.innerText.trim();
    const data = processData[key];

    title.textContent = data.title;
    desc.textContent = data.desc;
  });
});

// Industry slider
const industries = document.querySelector(".industries");
const nextBtn = document.querySelector(".industry-next");
const prevBtn = document.querySelector(".industry-prev");

nextBtn.addEventListener("click", () => {
  industries.scrollBy({
    left: 440,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  industries.scrollBy({
    left: -440,
    behavior: "smooth",
  });
});

// Auto scroll reviews
const reviewContainer = document.querySelector(".reviews-cards");

let direction = 1;
const scrollSpeed = 1;

function autoScrollReviews() {
  reviewContainer.scrollLeft += scrollSpeed * direction;

  const maxScroll = reviewContainer.scrollWidth - reviewContainer.clientWidth;

  if (reviewContainer.scrollLeft >= maxScroll) direction = -1;
  if (reviewContainer.scrollLeft <= 0) direction = 1;

  requestAnimationFrame(autoScrollReviews);
}

autoScrollReviews();

// Image zoom
const container = document.getElementById("imageContainer");
const lens = document.getElementById("lens");
const preview = document.getElementById("zoomPreview");

const zoom = 3;

container.addEventListener("mouseenter", () => {
  lens.style.display = "block";
  preview.style.display = "block";
});

container.addEventListener("mouseleave", () => {
  lens.style.display = "none";
  preview.style.display = "none";
});

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();

  let x = e.clientX - rect.left - lens.offsetWidth / 2;
  let y = e.clientY - rect.top - lens.offsetHeight / 2;

  x = Math.max(0, Math.min(x, rect.width - lens.offsetWidth));
  y = Math.max(0, Math.min(y, rect.height - lens.offsetHeight));

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  preview.style.backgroundSize =
    rect.width * zoom + "px " + rect.height * zoom + "px";

  preview.style.backgroundPosition = `-${x * zoom}px -${y * zoom}px`;
});

// Sticky header
const stickyHeader = document.querySelector(".sticky-header");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight) {
    stickyHeader.classList.add("show");
  } else {
    stickyHeader.classList.remove("show");
  }
});

const datasheetModal = document.getElementById("datasheetModal");
const quoteModal = document.getElementById("quoteModal");

document.getElementById("openDatasheet").onclick = () => {
  datasheetModal.classList.add("show");
};

document.getElementById("closeDatasheet").onclick = () => {
  datasheetModal.classList.remove("show");
};

const openQuoteBtns = document.querySelectorAll(".openQuote");

openQuoteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    quoteModal.classList.add("show");
  });
});

document.getElementById("closeQuote").onclick = () => {
  quoteModal.classList.remove("show");
};
