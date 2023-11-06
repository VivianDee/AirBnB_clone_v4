$(document).ready(function() {
    const checkedBoxes = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id'); 

        if ($(this).prop("checked")) {
            checkedBoxes[amenityId] = $(this).data('name');
        } else {
                delete checkedBoxes[amenityId]; 
        }

        $('div.amenities h4').text(Object.values(checkedBoxes).join(', '));
    });
});

