function Model(data){
  var self = this;
  self.data = data;

  self.addItem = function(item){
  	if(item.length === 0){
  		return;
  	}
  	self.data.push(item);
  	return self.data;

  }
  self.removeItem = function(item){
  	var index = self.data.indexOf(item);
  	  	
  	  	if(index === -1){
  		    return;
  		  }
  	self.data.splice(index, 1);
  	return self.data;
  }
  self.changeItem = function(newTitle, oldTitle){
    var title = newTitle;
    var index = self.data.indexOf(oldTitle);
    self.data[index] = title;
    return self.data;
  }
}

function View(model){
	var self = this;

	function init(){
		var wrapper = tmpl($('#wrapper-template').html());

		$('body').append(wrapper);

		self.elements ={
			input: $('.item-value'),
			addBtn: $('.item-add'),
			listContainer: $('.item-list')
		};
    self.renderList(model.data);
	}
	self.renderList = function(data){
		var list = tmpl($('#list-template').html(), {data: data});
		self.elements.listContainer.html(list);
	};
	
	init();

}

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
    });  
  } 
}

$(function(){
  var firstToDoList = ['one', 'two', 'three'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);

});

