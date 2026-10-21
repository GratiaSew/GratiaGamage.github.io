
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});

    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(contactForm);
        var payload = {};
        formData.forEach(function(value, key) {
          if (key === 'topic') {
            payload.topic = payload.topic || [];
            payload.topic.push(value);
          } else {
            payload[key] = value;
          }
        });

        payload._subject = 'Portfolio enquiry from ' + String(payload.name).trim();

        var submitButton = contactForm.querySelector('button[type="submit"]');
        var status = document.getElementById('contact-form-status');
        var originalLabel = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        status.textContent = 'Sending your message...';

        fetch(contactForm.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        })
          .then(function(response) {
            return response.json().then(function(result) {
              if (!response.ok || result.success === 'false' || result.success === false) {
                throw new Error(result.message || 'Message delivery failed.');
              }
              return result;
            });
          })
          .then(function() {
            status.textContent = 'Thanks. Your message was submitted successfully.';
            contactForm.reset();
          })
          .catch(function() {
            status.textContent = 'We could not send your message right now. Please email gratia12@gmail.com directly.';
          })
          .finally(function() {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel;
          });
      });
    }
    
  })(window.jQuery);


