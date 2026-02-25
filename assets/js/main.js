// ===========================
// MEMBERSHIP ACCORDION
// ===========================
function toggleMembership(type) {
  const card = document.getElementById(type + "Card");
  const body = document.getElementById(type + "Body");

  // Toggle the clicked card independently
  card.classList.toggle("active");
  body.classList.toggle("open");
}

// ===========================
// MODAL
// ===========================
function openModal() {
  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
}

function closeModalOutside(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}
