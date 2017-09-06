// Select color input
var color = document.getElementById("colorPicker");

// Select size input
var sizePicker = document.getElementById("sizePicker");

sizePicker.addEventListener("submit", function (e) {
    e.preventDefault();

    makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    var width = document.getElementById("input_width").value;
    var height = document.getElementById("input_height").value;

    var table = document.getElementById("pixel_canvas");
    table.innerHTML = "";
    for(var i = 0; i < width; i++) {
    	var tr = document.createElement('tr');
    	for(var j = 0; j < height; j++) {
    		var td = document.createElement('td');
    		tr.appendChild(td);
    		td.addEventListener("click", function () {
            	this.style.background = color.value;
        	})
    	}
    	table.appendChild(tr);
    }
};
