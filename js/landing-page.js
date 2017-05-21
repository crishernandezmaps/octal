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
	// scripts
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);
}

$(document).ready(function(){
    $("#paz").mouseover(function(){
      $("#hide").empty();
      $("#hide").append("Antropóloga Social (Universidad de Chile), candidata a Doctora en Sociología (London School of Economics). Paz es etnógrafa y especialista en investigación en las áreas de antropología y sociología económica, sociología cultural y estudios urbanos.");
    });
    $("#ruben").mouseover(function(){
      $("#hide").empty();
      $("#hide").append("Diseñador Industrial, Universidad de Valparaíso, 13 años de experiencia profesional y académica en áreas de diseño de ingeniería, diseño de productos, medios digitales. Egresado en Magister en Gestión Tecnológica. Interés en áreas de investigación en  tecnologías educativas, open design, innovación social, diseño industrial y fabricación digital.");
    });
    $("#cris").mouseover(function(){
      $("#hide").empty();
      $("#hide").append("Cristian Hernández is an expert in spatial analysis and natural language processing. He works as a consultant for nonprofit organizations and start-up’s in Europe and Latin America. Cristian is currently leading a citizen data science project on light pollution called “Octal”, part of the Stars4All Program (EU funded), aimed at training people in data science methods and designing experiences using data visualizations");
    });
    $("#touraj").mouseover(function(){
      $("#hide").empty();
      $("#hide").append("I am a journalist specialized in multimedia communications and with extensive experience on blogs and social media. Lately I've been focusing on Web Journalism, although I have several years of experience, working with traditional media such as newspapers, news agencies and radio and television.");
    });
});
