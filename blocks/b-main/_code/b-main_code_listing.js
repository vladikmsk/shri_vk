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
