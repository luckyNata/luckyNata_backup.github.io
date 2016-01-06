$(function(){

	var $divTabs = $('.wrapper div');
	$divTabs.hide();
	$firstTab = $divTabs.first();
	$firstTab.show();
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
	$div
		.append('<label>Firstname </label>')
		.append('<label>Lastname </label>')
		.append('<label>Address </label>');
	
	var $label = $('label');
	var $firstLabel = $label.eq(0);
	//console.log($firstLabel);
	$firstLabel.attr('for', 'firstname');
	var $secondLabel = $label.eq(1);
	$secondLabel.attr('for', 'lastname');
	var $thirdLabel = $label.eq(2);
	$thirdLabel.attr('for', 'address');
	$label.append('<input>');
	
	var $input = $('input');
	var $firstInput =$input.eq(0);
	var $secondInput =$input.eq(1);
	var $thirdInput =$input.eq(2);
	$input.attr('type','text');
	$firstInput
			.attr('title', 'Please provide your firstname.')
			.attr('id', 'firstname');
	$secondInput
			.attr('title', 'Please provide also your lastname.')
			.attr('id', 'lastname');
	$thirdInput
			.attr('title', 'Your home or work address.')
			.attr('id', 'address')
			.css('margin-left', '14px');

	$form.append('<button>Show help</button>');
	var $button = $form.children('button');
	$button.addClass('button');
	//------------------------------------------------------------------------
		var $tooltipOne;
		var $tooltipTwo;
		var $tooltipThree;
		

	$linkAll.on('click',function(event){
		$divTabs.hide();
		$linkFirst.removeClass('link');
		$linkFirst.addClass('link2');
		var $value = $(this).attr('id');
		var $activeDiv = $('div[aria-labelledby='+$value+']'); 
		$activeDiv.toggle();
		});

	$input.hover(function(event){
				var $span = $('span');
				$span.remove();
					var $title = $(this).attr('title');
					var $activeLabel = $(this).parent();
					$activeLabel.append('<span><span>');
					var $tooltipActive = $('span').text($title);
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
				var $tooltipActive = $('span');
				$tooltipActive.remove();
			}

		);
	$button.on('click', function(event){
		var $span = $('span');
		$span.remove();
		$label.append('<span></span>');
		var $tooltipSpan = $('span');
		var $input = $('input');
		var $tooltipTitleOne = $input.eq(0).attr('title');
		var $tooltipTitleTwo = $input.eq(1).attr('title');
		var $tooltipTitleThree = $input.eq(2).attr('title');
			$tooltipOne = $tooltipSpan.eq(0).text($tooltipTitleOne);
			$tooltipTwo = $tooltipSpan.eq(1).text($tooltipTitleTwo);
			$tooltipThree = $tooltipSpan.eq(2).text($tooltipTitleThree);
		
		$tooltipOne.offset(function(i, coord){
									        var  newCoord = {};	
       										newCoord.top = coord.top;	
        									newCoord.left = coord.left + 30;	
       										 return newCoord;
   											});
		$tooltipTwo.offset(function(i, coord){
									        var  newCoord = {};	
       										newCoord.top = coord.top;	
        									newCoord.left = coord.left + 30;	
       										 return newCoord;
   											});
		$tooltipThree.offset(function(i, coord){
									        var  newCoord = {};	
       										newCoord.top = coord.top;	
        									newCoord.left = coord.left + 30;	
       										 return newCoord;
   											});
		$tooltipOne.addClass('tooltipStyle');
		$tooltipTwo.addClass('tooltipStyle');
		$tooltipThree.addClass('tooltipStyle');
	});//закончилась button.on() 
		
});
