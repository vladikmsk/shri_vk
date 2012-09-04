/* ../../blocks/b-head/__logo/b-head__logo.js: begin */ /**/
$('.b-head__logo')
    .live('mouseover', function() { $(this).fadeOut().fadeIn() });

/* ../../blocks/b-head/__logo/b-head__logo.js: end */ /**/

/* ../../blocks/b-menu/b-menu.js: begin */ /**/
$(document).ready(function(){
		$('b-menu__item').hover(
			function() { $('ul', this).css('display', 'block'); },
			function() { $('ul', this).css('display', 'none'); });
});




window.onload = function()
	{
		var lis = document.getElementsByTagName('li');
		for(i = 0; i < lis.length; i++)
		{
			var li = lis[i];
			if (li.className == 'b-menu__item')
			{
				li.onmouseover = function() { this.getElementsByTagName('ul').item(0).style.display = 'block'; }
				li.onmouseout = function() { this.getElementsByTagName('ul').item(0).style.display = 'none'; }
			}
		}
	}

/* ../../blocks/b-menu/b-menu.js: end */ /**/

/* ../../blocks/b-main/_code/b-main_code_listing.js: begin */ /**/
$(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
  $('#txtBash').hide();
  $('#txtPy').hide();
  $('#txtPl').hide();	
 
  $('#txtPy-toggle').click(function() {
    $('#txtPy').toggle(400);
    return false;
  });
 
  $('#txtPl-toggle').click(function() {
    $('#txtPl').toggle(400);
    return false;
  });
 
  $('#txtBash-toggle').click(function() {
    $('#txtBash').toggle(400);
    return false;
  });
});

/* ../../blocks/b-main/_code/b-main_code_listing.js: end */ /**/

