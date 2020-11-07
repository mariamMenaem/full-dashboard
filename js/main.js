// nav toggle handeler 
$('.nav-toggle').click(function (e) {
  if ($('.main_content').hasClass('content-open')) {
    $('.main_content').removeClass('content-open').addClass('content-closed');
    $('.sidebar').removeClass('sidebar-closed').addClass('sidebar-open');
  } else {
    $('.main_content').removeClass('content-closed').addClass('content-open');
    $('.sidebar').removeClass('sidebar-open').addClass('sidebar-closed');
  }
})

// check password strength
$('.password').keyup(function () {
  let p_length = this.value.length;

  if (p_length === 0) {
    $('.progress-bar_item').each(function () {
      $(this).removeClass('active')
    });

    $('.active').css('background-color', 'transparent');

  } else if (p_length > 0 && p_length <= 4) {
    $('.active').css({ 'background-color': 'red' });
    $('.progress-bar-wrap').find('div').eq(0).addClass('active').siblings('div').removeClass('active');

  } else if (p_length > 4 && p_length <= 8) {
    $('.progress-bar-wrap').find('div').eq(1).addClass('active');
    $('.active').css('background-color', '#F9AE35');
  } else {
    $('.progress-bar_item').each(function () {
      $(this).addClass('active');
    });
    $('.active').css('background-color', '#2DAF7D');
  }
});

// check password matching
$('.confirm-password').keyup(function () {
  if ($(this).val() === $(".password").val()) {
    $(".check").css('color', 'darkslategrey')
  } else {
    $(".check").css('color', 'red')
  }
});

// validate form inputs 
var regex = {
  name: /^[A-Za-z ]{10,20}$/,
  email: /^[\w]{6,10}@[a-z]{4}\.[a-z]{3}$/,
  user: /^[A-Za-z0-9]{6,10}$/,
  password: /^[\w !@#$!%^&*()-\.]{6,20}$/
}

$('.submit').on('click', function (e) {
  e.preventDefault();
  $.each($('.form-box input:not([type="radio"])'), function () {
    if (!regex[$(this).attr('name')].test($(this).val())) {
      $(this).addClass('error');
    } else {
      $(this).removeClass('error');
    }
  });
  if ($('.form-box input:not([type="radio"])').hasClass('error') == false) {
    location.href = 'dashboard.html';
  }
})
