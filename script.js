$('.neumorphic-tab-container__control').on('click', function(){
  if ($(this).hasClass('neumorphic-tab-container__control_active')){
    return false;
  }
  $('.neumorphic-tab-container__tab_shown').removeClass('neumorphic-tab-container__tab_shown');
  $('.neumorphic-tab-container__control_active').removeClass('neumorphic-tab-container__control_active');
  $(this).addClass('neumorphic-tab-container__control_active');
  $('#'+$(this).data('target')).addClass('neumorphic-tab-container__tab_shown');
});