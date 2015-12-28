$(function(){
	var $submenu = $('.submenu');
	$submenu.hide();
	$firstSubmenu = $submenu.first();
	$firstSubmenu.show();
	var $linkAll = $('a');
	$linkAll.addClass('link2');
	var $linkFirst = $linkAll.first();
	$linkFirst.removeClass('link2');
	$linkFirst.addClass('link');
	
	var $wrapper = $('.wrapper');
	$wrapper.append('<form></form>');
	var $form = $('form');
	$form.append('<div></div>');
	var $div = $form.children();
	$div.addClass('inputs'); 
	$div.append('<div></div>');
	var $div = $form.children('div');
	$div
		.append('<label>Firstname <input></label>')
		.append('<label>Lastname <input></label>')
		.append('<label>Address <input></label>');
	
	var $input = $('input');
	$input.attr('type', 'text');
	$input.eq(2).css('margin-left', '14px');
	var $label = $('label');
	var $firstLabel = $label.eq(0);
	$firstLabel.append('<span>Please provide your firstname.</span>');
	var $secondLabel = $label.eq(1);
	$secondLabel.append('<span>Please provide also your lastname.</span>');
	var $thirdLabel = $label.eq(2);
	$thirdLabel.append('<span>Your home or work address.</span>');
	var $tooltip = $('span');
	$tooltip.hide();


	$form.append('<button>Show help</button>');
	var $button = $form.children('button');
	$button.addClass('button');

	$linkAll.on('click',function(event){
		$submenu.hide();
		$linkFirst.removeClass('link');
		$linkFirst.addClass('link2');
		var $activeSubmenu = $(this).siblings('.submenu');
		$activeSubmenu.toggle();
		});

	$input.hover(function(event){
					var $tooltipActive = $(this).siblings('span');
					$tooltipActive.addClass('tooltipStyle');
					$tooltipActive.offset(function(i, coord){
									        var  newCoord = {};	
       										newCoord.top = coord.top;	
        									newCoord.left = coord.left + 30;	
       										 return newCoord;
   											});

					$tooltipActive.show();
				}, 
			function(){
				var $tooltipActive = $(this).siblings('span');
				$tooltipActive.hide();
				$tooltipActive.offset(function(i, coord){
									        var  newCoord = {};	
       										newCoord.top = coord.top;	
        									newCoord.left = coord.left-30;	
       										 return newCoord;
   											});

			}

		);
	$button.one('click', function(event){
		$tooltip.offset(function(i, coord){
									        var  newCoord = {};	
       										newCoord.top = coord.top;	
        									newCoord.left = coord.left + 30;	
       										 return newCoord;
   											});
		$tooltip.addClass('tooltipStyle');

		$tooltip.show();
	}

	);

});
