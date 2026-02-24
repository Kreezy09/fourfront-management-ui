// ===========================
// MEMBERSHIP ACCORDION
// ===========================
function toggleMembership(type) {
  const card = document.getElementById(type + "Card");
  const body = document.getElementById(type + "Body");
  const isActive = card.classList.contains("active");

  // Close all
  ["foundation", "economy"].forEach((t) => {
    document.getElementById(t + "Card").classList.remove("active");
    document.getElementById(t + "Body").classList.remove("open");
  });

  // Open clicked if it was closed
  if (!isActive) {
    card.classList.add("active");
    body.classList.add("open");
  }
}