$(document).ready(function() {

	checkedBoxes = [];

	$('input[type=checked]').change( function() {
		if (this.checked) {
                        checkedBoxes.push($(this).attr('data-id'));
	        }
        	else {
			const idx = checkedBoxes.indexOf($(this).attr('data-id'));
		        checkedBoxes.pop(idx);
	        }
	});

	$('div.amenities h4').text(checkedBoxes.join(', '));
});
