$(function(){

	var $divTabs = $('.tabs div');
	$divTabs.hide();
	$firstTab = $divTabs.first();
	$firstTab.show();
	var $linkAll = $('a');
	$linkAll.addClass('link2');
	var $linkFirst = $linkAll.first();
	$linkFirst.removeClass('link2');
	$linkFirst.addClass('link');
	
	var $label = $('form label');
	var $input = $('form input');
	var $button = $('form button');
	var title0 ='Please provide your firstname.';
	var title1 ='Please provide also your lastname.';
	var title2 = 'Your home or work address.';
//------------------------------------------------------------------------
		var $tooltipOne;
		var $tooltipTwo;
		var $tooltipThree;
		

	$linkAll.on('click',function(event){
		$divTabs.hide();
		$linkFirst.removeClass('link');
		$linkFirst.addClass('link2');
		var $index = $linkAll.index(this);
		console.log($index);
		var $activeDiv = $divTabs.eq($index);
		console.log($activeDiv); 
		$activeDiv.toggle();
		});
//----------------------------------------------------------------
	$input.hover(function(event){
				var $span = $('span');
				$span.remove();
					var $title = $(this).attr('title');
					var $activeLabel = $(this).parent();
					$activeLabel.append('<span><span>');
					var $tooltipActive = $('span').text($title);
					$(this).removeAttr("title");
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
				var title='title';
				var $tooltipActive = $('span');
				var $neighbor = $tooltipActive.siblings('input');
				var $value = $input.index($neighbor);
				var a = eval(title+$value);
				$neighbor.attr('title', ''+a);
				$tooltipActive.remove();
			}

		);
//---------------------------------------------------------------------------------
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
