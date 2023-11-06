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
=======
$(document).ready(function () {
  const dict = {};
  const $amenitiesCheck = $('input[type=checkbox]');
  const $selectedAmenities = $('div.amenities h4');

  $amenitiesCheck.click(function () {
    if ($(this).is(':checked')) {
      dict[$(this).data('id')] = $(this).data('name');
      $selectedAmenities.text(Object.values(dict).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete dict[$(this).data('id')];
      $selectedAmenities.text(Object.values(dict).join(', '));
    }
  });
});
