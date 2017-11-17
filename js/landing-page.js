// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// My own JS ////////////////////////////////////////

if (document.documentElement.clientWidth < 900) {

  $(function () {

      /* SET PARAMETERS */
      var change_img_time     = 3000;
      var transition_speed    = 100;
      var simple_slideshow    = $("#slideshow"),
          listItems           = simple_slideshow.children('div'),
          listLen             = listItems.length,
          i                   = 0,

          changeList = function () {
              listItems.eq(i).fadeOut(transition_speed, function () {
                  i += 1;
                  if (i === listLen) {
                      i = 0;
                  }
                  listItems.eq(i).fadeIn(transition_speed);
              });
          };
      listItems.not(':first').hide();
      setInterval(changeList, change_img_time);
  });
}

var paz = "Paz is LSE sociologist and ethnographer, with experience on the study of cultural economies and urban space. She is interested in participative action research. Her work has been conducted in London and Santiago, Chile."
// var ruben = "Ruben is an industrial designer, with experience in engineer design, product design and digital media. His research interests are technology for education, open design, social innovation and digital fabrication."
var cris = "Cris is an expert in spatial data analysis and data visualization. Consultant for nonprofit organizations and start-up’s in Europe and Latin America. Currently leading “Octal”."
var touraj = "Touraj is a journalist specialized in multimedia communications. He has several years of experience working on newspapers, news agencies, radio and television. His work is now focussed on Web Journalism."
var victor = "Victor is a geographer with experience in urban planning and local government. His research is focused on the relationship between urban areas and wellness, working with interdisciplinary research groups."
var pedro = "Pedro is an industrial designer and researcher with focus on lighting technologies. He is an expert in environment and light efficiency (MAVILE). Also, PhD Candidate from Universidad Nacional de Tucumán, Argentina."
var maricel = "Maricel is an engineer, expert in construction productivity. Her research focusses on digital printing and circular economy. She is also part of the &quot;Asociación de Consumidores Sustentables&quot; in Chile."
var paulina = "Paulina is an Architech granted with several light design awards. She is leading \"Noche Zero\" project. Also she is part of Dark Sky Association(US) and the International Advisory Council, IAC; Chinese Lighting Design Association, CLDA"
var mona = "Mona is LSE sociologist where she works and publishes on the sociology of design and urban planning, material culture and aesthetics and economic sociology as well as lighting design and public space. She also is co-founder and former member of the LSE-based research programme Configuring Light/Staging the Social which explores the role of light and lighting in everyday life and urban design. Mona tweets @mona_sloane"

$(document).ready(function(){
    $("#hide").append(paz);
    $("#paz").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(paz);
    });
    $("#hide").append(mona);
    $("#mona").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(mona);
    });
    $("#ruben").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(ruben);
    });
    $("#cris").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(cris);
    });
    $("#touraj").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(touraj);
    });
    $("#victor").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(victor);
    });
    $("#pedro").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(pedro);
    });
    $("#paulina").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(paulina);
    });
    $("#maricel").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(maricel);
    });
});
