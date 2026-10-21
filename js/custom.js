
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
        var topics = formData.getAll('topic');
        var subject = 'Portfolio enquiry from ' + formData.get('name').trim();
        var body = [
          'Name: ' + formData.get('name').trim(),
          'Email: ' + formData.get('email').trim(),
          'Interested in: ' + (topics.length ? topics.join(', ') : 'General enquiry'),
          '',
          formData.get('message').trim()
        ].join('\n');
        var mailto = 'mailto:gratia12@gmail.com'
          + '?subject=' + encodeURIComponent(subject)
          + '&body=' + encodeURIComponent(body);

        document.getElementById('contact-form-status').textContent =
          'Your email app should open with this draft. Review it and press Send to email me.';
        window.location.href = mailto;
      });
    }
    
  })(window.jQuery);


