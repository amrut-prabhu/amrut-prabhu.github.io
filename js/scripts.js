/*!
    Description: This file contains all the scripts associated with the
    single-page portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav bar option is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Animate to section when hyperlink is clicked
    $(document).ready(function() {
        $('a[href*=\\#]').on('click', function(e){
            e.preventDefault();

            var hyperlink = $(this).attr('href');//this.hash;
            var scrollDistance = $(hyperlink).offset().top;
            $('html, body').animate({
                scrollTop : scrollDistance + 'px'
            }, 500);
        });
    });

    // Animate to project when hyperlink is clicked
    $(document).ready(function() {
        $('a[href*=\\#project-]').on('click', function(e){
            e.preventDefault();

            var hyperlink = $(this).attr('href');//this.hash;
            var scrollDistance = $(hyperlink).offset().top - 90;
            $('html, body').animate({
                scrollTop : scrollDistance + 'px'
            }, 500);
        });
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
            $('#view-less-projects').fadeIn(300);
        });
    });

    // Collapse additional projects
    $('#view-less-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#last-visible-project').click();
            $('#more-projects').fadeOut(300, function(e){
                $('#view-more-projects').fadeIn(300);
            });
        });
    });

    // Highlight current section in nav bar
    $(window).on("scroll", function() {
        var currentPos = $(window).scrollTop();

        $('.nav li a').each(function() {
            var sectionLink = $(this);
            // capture the height of the navbar
            var navHeight = $('#nav-wrapper').outerHeight() + 1;
            var section = $(sectionLink.attr('href'));

            // subtract the navbar height from the top of the section
            if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
              $('.nav li a').removeClass('active');
              sectionLink.addClass('active');
            } else {
              sectionLink.removeClass('active');
            }
        });
    });

})(jQuery);
