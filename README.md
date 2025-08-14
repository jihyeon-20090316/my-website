# my-website
## index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMT Game Webpage</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Navbar -->
  <nav>
    <div class="logo">🎮 BMT Games</div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Header -->
  <header>
    <h1>Welcome to BMT Games</h1>
  </header>

  <!-- About Section -->
  <section id="about" class="about">
    <h2>About BMT Games</h2>
    <p>Discover the ultimate luxury gaming experience. Our games are crafted with precision, style, and elegance. Join the elite gaming community now.</p>
  </section>

  <!-- Dashboard Section -->
  <section id="dashboard" class="dashboard">
    <h2>Dashboard</h2>
    <div class="cards">
      <div class="card">
        <h3>BMT Games</h3>
        <h4>Latest Hits</h4>
        <p>Experience the most thrilling and visually stunning games available today.</p>
      </div>
      <div class="card">
        <h3>Top Scores</h3>
        <h4>Leaderboard</h4>
        <p>Compete with players worldwide and climb the exclusive BMT Games leaderboard.</p>
      </div>
      <div class="card">
        <h3>Game Insights</h3>
        <h4>Analytics</h4>
        <p>Track your progress and improve your strategy with detailed analytics.</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <input type="text" id="name" placeholder="Enter your name">
    <button id="introduce">Introduce Yourself</button>
  </section>

  <div class="card">
  <img src="carbon-copy/images/images.png" alt="Description" style="width:100%; border-radius:8px;">
  <!-- Audio -->
  <audio id="music" src="carbon-copy/images/dj-cat-oii-a-ii.mp3"></audio>
  <p>I love BMT! </p>
  <script>
  const card = document.getElementById('card');
    const music = document.getElementById('music');

    card.addEventListener('click', () => {
  
      if (!music.paused) {
        music.pause();
        music.currentTime = 0;
      }
      music.play();
    });
    </script>
</div>
  <!-- Footer -->
  <footer>
    <p>&copy; 2025 bmthighschool. All Rights Reserved.</p>
    <ul>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Support</a></li>
    </ul>
  </footer>

  <script src="script.js"></script>
</body>
</html>




## styles.css
/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: linear-gradient(to right, #1e1e2f, #2c2c3c);
  color: #eee;
  line-height: 1.6;
}

/* Navbar */
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  position: fixed;
  width: 100%;
  background: rgba(30,30,30,0.9);
  backdrop-filter: blur(5px);
  z-index: 100;
}

nav .logo {
  font-weight: 700;
  font-size: 28px;
  color: #ffd700;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul a {
  text-decoration: none;
  color: #eee;
  font-weight: 600;
  transition: 0.3s;
}

nav ul a:hover {
  color: #ffd700;
  transform: scale(1.1);
}

/* Header */
header {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('assets/game-background.jpg') center/cover no-repeat;
  color: #fff;
  padding-top: 80px;
}

header h1 {
  font-size: 60px;
  text-shadow: 2px 2px 15px #000;
  animation: fadeIn 2s ease-in-out;
}

/* Sections */
section {
  padding: 100px 50px;
  opacity: 0;
  transform: translateY(50px);
}

section h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #ffd700;
}

section p {
  font-size: 18px;
  max-width: 700px;
}

/* Dashboard Cards */
.cards {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 15px;
  padding: 30px;
  flex: 1 1 300px;
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}

.card h3 {
  color: #ffd700;
  margin-bottom: 10px;
}

.card h4 {
  color: #fff;
  font-weight: 400;
  margin-bottom: 15px;
}

/* Contact */
input, button {
  padding: 15px 20px;
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 300px;
  max-width: 100%;
  display: block;
  background: rgba(255,255,255,0.1);
  color: #fff;
  transition: 0.3s;
}

input::placeholder {
  color: #ccc;
}

button {
  cursor: pointer;
  background: #ffd700;
  color: #1e1e2f;
  font-weight: 700;
  border: none;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

/* Footer */
footer {
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  background: rgba(30,30,30,0.95);
  border-top: 1px solid #444;
}

footer ul {
  display: flex;
  gap: 20px;
}

footer a {
  text-decoration: none;
  color: #eee;
}

footer a:hover {
  color: #ffd700;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px);}
  to { opacity: 1; transform: translateY(0);}
}


## script.js
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


