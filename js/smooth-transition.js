// Select all toggle headers
document.querySelectorAll('.toggle-header').forEach(function(header) {
  header.addEventListener('click', function() {
      // Get the content div associated with the clicked header
      var content = header.nextElementSibling;

      // Toggle visibility of the content
      if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";  // Show content
      } else {
          content.style.display = "none";   // Hide content
      }
  });
});
