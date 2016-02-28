$(function(){
	$('.email__button').on('click', showModal);

	function showModal(){
		var email = $('.email__your').val();
		var jsonData = '{ \"email\" : \"'+email+'\" }';
		var modal = $('<div></div>');
		modal.text(jsonData);
		var footer = $('.footer');
		modal.addClass('modal');
		footer.append(modal);
	}
});