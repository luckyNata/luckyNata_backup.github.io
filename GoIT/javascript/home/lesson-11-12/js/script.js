$(function(){
	var htmlka = $('#test').html();
	var objData = [{
		name: 'Nataliia',
		job: 'an engineer',
		object: 'a job as Front End Developer',
		phone: '(050)xx-xx-xxx',
		link: 'https://www.linkedin.com/home?trk=nav_responsive_tab_home'
	},
	{
		name: 'Maksim',
		job: 'student',
		object: 'a job as Front End Developer',
		phone: '(097)xx-xx-xxx',
		link: 'https://www.vk.com/home?trk=nav_responsive_tab_home'
	}];

	var content = tmpl(htmlka, {data: objData}); 	
	$('body').append(content);
});