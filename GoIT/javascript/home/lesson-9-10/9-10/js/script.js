
$(function(){
	var $wrapper = $('.wrapper');
		$wrapper.append('<ul></ul>');
	var $menu = $('.wrapper ul');
		$menu.addClass('menu');
	
	for (var i=0; i<5; i++){
		$menu.append('<li></li>');
	}
	
	var $menu_item = $('li');
		$menu_item.append('<a>Menu</a>');
	var $link = $('a');
		$link.attr('href', '#');
		$menu_item.eq(2).append('<ul></ul>');

//-------------------Submenu---------------

	var $submenu = $('.menu ul');
		$submenu.addClass('submenu');

	for (var j=0; j<5; j++){
		$submenu.append('<li></li>');
	}
	var $submenu_item = $('.submenu li');
		$submenu_item.append('<a>Submenu_1</a>');
	var $submenu_link = $('.submenu a');
		$submenu_link.attr('href', '#');
		$submenu_item.eq(3).append('<ul></ul>');

//-------------------thirdMenu---------------

	var $thirdMenu = $('.submenu ul');
		$thirdMenu.addClass('thirdMenu');

	for (var k=0; k<5; k++){
		$thirdMenu.append('<li></li>');
	}

	var $thirdMenu_item = $('.thirdMenu li');
		$thirdMenu_item.append('<a>Submenu_2</a>');
	var $thirdMenu_link = $('.thirdMenu a');
		$thirdMenu_link.attr('href', '#');
		$thirdMenu_item.eq(1).append('<ul></ul>');

//-------------------fourthMenu---------------

	var $fourthMenu = $('.thirdMenu ul');
		$fourthMenu.addClass('fourthMenu');

	for (var l=0; l<5; l++){
		$fourthMenu.append('<li></li>');
	}

	var $fourthMenu_item = $('.fourthMenu li');
		$fourthMenu_item.append('<a>Submenu_3</a>');
	var $fourthMenu_link = $('.fourthMenu a');
		$fourthMenu_link.attr('href', '#');

//----------------------------------------------
	
	$submenu.hide();
	$thirdMenu.hide();
	$fourthMenu.hide();

	$menu_item.eq(2).hover(function(event){
				$submenu.show();
				}, 
			
				function(){
				$submenu.hide();
				}
	);//submenu.show()

	$submenu_item.eq(3).hover(function(event){
				$thirdMenu.show();
				}, 
			
				function(){
				$thirdMenu.hide();
				}
	);//thirdMenu.show()

	$thirdMenu_item.eq(1).hover(function(event){
				$fourthMenu.show();
				}, 
			
				function(){
				$fourthMenu.hide();
				}
	);//fourthMenu.show()
});