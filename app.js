$(document).ready(function(){
var localS = localStorage.getItem('localS');

	function start(){
		var editor = CodeMirror.fromTextArea(document.getElementById('markdown'), {
			value: "write markdown",
			mode: "text/x-markdown",
			lineNumbers: true,
			matchBrackets: true,
			autofocus: true
		});
		editor.on('change', function(){
			var val = editor.getValue();
			document.getElementById('textHtml').innerHTML= marked (val);
			localStorage.setItem('localS', 'editor');
		})
	}
	start();

});
