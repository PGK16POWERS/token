window.addEventListener('DOMContentLoaded', function() {
    var slideshows = document.querySelectorAll('.slideshow');
  
    slideshows.forEach(function(slideshow) {
      var slides = slideshow.querySelectorAll('img');
      var currentIndex = 0;
  
      function showSlide(index) {
        slides[currentIndex].style.display = 'none';
        slides[index].style.display = 'block';
        currentIndex = index;
      }
  
      function showNextSlide() {
        var nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }
  
      function showPreviousSlide() {
        var prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      }
  
      var prevButton = document.createElement('button');
      prevButton.className = 'prevbtn';
      prevButton.innerText = 'Previous';
  
      var nextButton = document.createElement('button');
      nextButton.className = 'nextbtn';
      nextButton.innerText = 'Next';
  
      prevButton.addEventListener('click', showPreviousSlide);
      nextButton.addEventListener('click', showNextSlide);
  
      slideshow.appendChild(prevButton);
      slideshow.appendChild(nextButton);
  
      showSlide(currentIndex);
    });
  });
