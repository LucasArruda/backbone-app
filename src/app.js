define(["require"], function(require) {

	var button = document.createElement("button");
	button.textContent = "CLICK ME to load.";
	button.onclick = function() {
		var test = require(["test"], function(test) {
			test();
			var p = document.createElement("p");
			p.innerHTML = "3. Console log will show loaded libs."; 
			document.body.appendChild(p);
		});
	}
	document.body.appendChild(button);

});