/* ==========================================
   Option 1: Contact Input - Personal Greeting
========================================== */
const introduceBtn = document.getElementById("introduce");
const nameInput = document.getElementById("name");
const contactSection = document.getElementById("contact");

introduceBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    // Display a personalized greeting
    contactSection.innerHTML = `
      <p>Nice to meet you, <strong>${name}</strong> 👋! Thanks for introducing yourself.</p>
    `;
  } else {
    // If input is empty, show alert
    alert("Please enter your name!");
  }
});

/* ==========================================
   Option 2: Modal Article
========================================== */
// Create modal dynamically
const modal = document.createElement("div");
modal.id = "modal";
modal.style.cssText = `
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

modal.innerHTML = `
  <div style="
    background: white; 
    padding: 20px; 
    max-width: 500px; 
    width: 90%; 
    position: relative;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  ">
    <p id="modalContent" style="margin-bottom: 20px;"></p>
    <div id="alignmentWidget" style="margin-bottom: 10px;">
      <button class="alignBtn" data-align="left">Left</button>
      <button class="alignBtn" data-align="center">Center</button>
      <button class="alignBtn" data-align="right">Right</button>
    </div>
    <button id="closeModal" style="
      padding: 8px 16px;
      border: none;
      background-color: #6186ff;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    ">Close</button>
  </div>
`;
document.body.appendChild(modal);

const cards = document.querySelectorAll(".card");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");
const alignButtons = document.querySelectorAll(".alignBtn");

// Open modal when a card is clicked
cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalContent.textContent =
      card.querySelector("p").textContent || "No content available";
    modalContent.style.textAlign = "left"; // default alignment
    modal.style.display = "flex";

    // Reset alignment button font-weight
    alignButtons.forEach((b) => (b.style.fontWeight = "300"));
  });
});

// Close modal functionality
closeModalBtn.addEventListener("click", () => (modal.style.display = "none"));

// Close modal on pressing Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

/* ==========================================
   Option 3: Text Alignment Widget
========================================== */
alignButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const alignment = btn.dataset.align;
    modalContent.style.textAlign = alignment;

    // Highlight selected alignment button
    alignButtons.forEach((b) => (b.style.fontWeight = "300")); // reset
    btn.style.fontWeight = "700"; // selected
  });
});

/* ==========================================
   Warrior Option: Chuck Norris Quote in Header
========================================== */
const header = document.querySelector("header h1");

async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random?tags=technology,famous-quotes"); // fitting quotes
    const data = await res.json();
    header.textContent = `"${data.content}" — ${data.author}`;
  } catch (e) {
    header.textContent = "Level up your gaming experience!";
  }
}

fetchQuote();
setInterval(fetchQuote, 10000); // refresh every 10 seconds


// Fetch first quote on page load
fetchQuote();

// Update quote every 10 seconds
setInterval(fetchQuote, 10000);

/* ==========================================
   Option 4: Optional - Card Hover Effect
   Adds smooth highlight when hovering cards
========================================== */
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
    card.style.transition = "all 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
  });
});

/* ==========================================
   Option 5: Optional - Scroll Animation
   Smooth fade-in for sections when scrolling
========================================== */
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight;
  sections.forEach((section) => {
    if (scrollY > section.offsetTop + 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease-out";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    }
  });
});
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img")?.outerHTML || "";
    const text = card.querySelector("p")?.textContent || "No content available";
    modalContent.innerHTML = img + "<p>" + text + "</p>";
    modalContent.style.textAlign = "left"; // default alignment
    modal.style.display = "flex";

    alignButtons.forEach((b) => (b.style.fontWeight = "300"));
  });
});

