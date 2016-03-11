define(
	'controller',
	['model', 'view', 'jquery'],
	function() {
		function Controller(model, view){
 			var self = this;
 			view.elements.addBtn.on('click', addItem);
 			view.elements.listContainer.on('click', '.item-delete', removeItem);
 			view.elements.listContainer.on('click', '.item-edit', activeItem);
 			view.elements.listContainer.on('focusout', '.item-list', loseFocus);

			function addItem(){
		 		var newItem = view.elements.input.val();
		 		model.addItem(newItem);
		 		view.renderList(model.data);
		 		view.elements.input.val('');
			}
  
 			function removeItem(){
 			 	var item = $(this).attr('data-value');
 			 	model.removeItem(item);
 			 	view.renderList(model.data);
 			}

 		 	function loseFocus(){
 		 	 	$(this).removeClass('activeInput');
 		 	 	view.renderList(model.data);
 		 	}
  
 			function activeItem(){
 		  		var activeInput = $(this).siblings('input');
 		  		$('.item-list').not(activeInput).removeClass('activeInput');
 		  		var oldTitle = activeInput.val();
 		  		activeInput.removeAttr('disabled').addClass('activeInput');
 		  		activeInput.keypress(function(e){
 		    		if(e.keyCode===13){
 		      			var newTitle = activeInput.val();
 		      			model.changeItem(newTitle, oldTitle);
 		      			view.renderList(model.data);
 		    		}
 		  		}); //KEYPRESS 
 			} 
		}//Controller
		return Controller;
	}

);