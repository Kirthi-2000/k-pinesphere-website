$(document).ready(function(){
    $('.nav-tabs a').on('click', function(event){
      event.preventDefault();
      $(this).tab('show');
    });
  });