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

var paz = "Paz is an ethnographer, expert in anthropology and economic and cultural sociology research with focus on urban studies. Her research has been conducted in Europe (London) and Latin America (Santiago)."
var ruben = "Ruben is an industrial designer, focused on engineer design, product design and digital media. His research interests are technology for education, open design, social innovation and digital fabrication."
var cris = "Cris is a geographer, expert in spatial analysis and natural language processing. Consultant for nonprofit organizations and start-up’s in Europe and Latin America. Currently leading “Octal”."
var touraj = "Touraj is a journalist, specialized in multimedia communications. Several years of experience on newspapers, news agencies, radio and television. Lately his work is focused on Web Journalism."
var victor = "Victor is a geographer with experience in urban planning and local government. He's research focused on the relationship within urban areas and wellness, working on interdisciplinary groups."
var pedro = "Industrial Designer and researcher with focus in Lighting Technologies. Pedro is an expert in environment and light efficiency (MAVILE), also Phd candidate from Universidad Nacional de Tucumán, Argentina."
var paulina = "Paulina is an Architech granted with several light design awards. She is leading \"Noche Zero\" project. Also she is part of Dark Sky Association(US) and the International Advisory Council, IAC; Chinese Lighting Design Association, CLDA"
var maricel = "Maricel is an Engineer expert in construction productivity. Their research focused on digital printing and circular economy. She is also part of the fundation \"Association Consumidores Responsables\" in Chile."

$(document).ready(function(){
    $("#hide").append(paz);
    $("#paz").mouseover(function(){
      $("#hide").empty();
      $("#hide").append(paz);
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
