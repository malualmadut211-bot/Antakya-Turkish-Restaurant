document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Gallery Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active styles from all buttons
        filterBtns.forEach((b) => {
          b.classList.remove(
            "bg-primary",
            "font-bold",
            "text-white",
            "hover:bg-primary-dark",
          );
          b.classList.add(
            "bg-surface-dark",
            "font-medium",
            "text-slate-300",
            "hover:bg-surface-dark/80",
            "hover:text-white",
            "border",
            "border-border-dark",
          );
        });

        // Add active styles to clicked button
        btn.classList.remove(
          "bg-surface-dark",
          "font-medium",
          "text-slate-300",
          "hover:bg-surface-dark/80",
          "hover:text-white",
          "border",
          "border-border-dark",
        );
        btn.classList.add(
          "bg-primary",
          "font-bold",
          "text-white",
          "hover:bg-primary-dark",
        );

        const filterValue = btn.getAttribute("data-filter");

        galleryItems.forEach((item) => {
          if (
            filterValue === "All" ||
            item.getAttribute("data-category") === filterValue
          ) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});
