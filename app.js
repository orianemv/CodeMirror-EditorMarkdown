$(document).ready(function(){

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
		})
	}
	start();
});
