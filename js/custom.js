$(window).on('load', function () {
	$('#verifyForm').on('submit', function(e){
		var form = $(this);
		var error = false;
		form.find('.required').each(function(){
			if($(this).val() == ''){
				$(this).addClass('error');
				$(this).next('.error_empty').addClass('errorEmpty');
				error = true;
			}
			else if($(this).hasClass('pass')){
				var pass2 = $('.pass2');
				if($(this).val() != pass2.val()){
					pass2.next('.error_empty').text('invalid password').addClass('errorEmpty');
					error = true;
				}
			}
			else if($(this).hasClass('mail')){
				var email = $(this);
				if(!(isEmailValid(email.val()))){
					email.next('.error_empty').text('invalid email').addClass('errorEmpty');
					error = true;
				}
			}
		});
		if(!(error)){
			form.hide();
			$('.success').show();
			console.log(form.serialize());
			return form.serialize();
		}
		else{
			return false;
		}
		e.preventDefault();
	});
	$("#phone").mask("+(999)(99) 999-99-99");
	$('.required').on('focus', function(){
		$(this).removeClass('error');
		$(this).next('.error_empty').text('*').removeClass('errorEmpty');
	});
	$('.onlyText').on('input',function(){ 
    	var regexp = /[^a-zA-Z]/g;
  		if($(this).val().match(regexp)){
    		$(this).val( $(this).val().replace(regexp,'') );
  		} 
	});
	function isEmailValid(emailAddress){
    	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    	return pattern.test(emailAddress);
	};
});