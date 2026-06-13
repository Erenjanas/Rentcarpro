document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const tomorrow = new Date(Date.now() + 86400000);
  if (pickupDate) pickupDate.value = now.toISOString().slice(0,16);
  if (returnDate) returnDate.value = tomorrow.toISOString().slice(0,16);
  Cars.load();
});
