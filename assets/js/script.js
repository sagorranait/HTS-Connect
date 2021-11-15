// Change user photo change icon
$(function() {
  let icon = document.querySelector('.userEdit-icon');

  $(".edit-pro").click(function() {
    icon.src = './assets/images/Nav/close-icon.svg';
  });

  $('.changepic-close').click(function() {
    icon.src = './assets/images/Nav/edit-icon.svg';
  });

  $("#changePhoto").click(function(e) {
    icon.src = './assets/images/Nav/edit-icon.svg';
    console.log(e.target.className);
    if(e.target.className == 'modal-body' || e.target.className == 'changepic-content' ||  e.target.className == 'smediumx24l28-ro' ||  e.target.className == 'changeUser-photo' ||  e.target.className == 'sboldx14l18-ro' ||  e.target.className == 'change-options' ||  e.target.className == 'change-input' ||  e.target.className == 'remove-photo smediumx14l16-ro' ||  e.target.className == 'fileUpload-label' ||  e.target.className == 'takeAphoto' ||  e.target.className == 'takephotoimg' ||  e.target.className == 'ssmallx12-ro' ||  e.target.className == 'selectPotos'){
      icon.src = './assets/images/Nav/close-icon.svg';
    }
  })    
});