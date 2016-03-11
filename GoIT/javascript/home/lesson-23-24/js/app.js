requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
		'tmpl': 'template'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	['jquery', 'tmpl', 'model', 'view', 'controller'],
	function(jquery, tmpl, model, view, controller) {
		var firstToDoList = ['Do exam', 'Find a job', 'Learn Angular'];
		var model = new model(firstToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	}
);