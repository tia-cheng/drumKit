// Add loop mode toggle functionality
document.getElementById("loop-mode").addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.innerHTML = "Looping...";
      // Add logic to start loop
    } else {
      this.innerHTML = "Toggle Loop";
      // Add logic to stop loop
    }
  });
  
  // Add custom file input functionality
  document.getElementById("custom-sound").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      alert(`File selected: ${file.name}`);
      // Add logic to handle the uploaded file
    }
  });  