	$('#SignUp').click(()=>{
		console.log('click');
		$('#register').toggleClass('top0');
	})
	$('#register-close').click(()=>{
		$('#register').toggleClass('top0');
	})
	$('.error-login').addClass('left50');