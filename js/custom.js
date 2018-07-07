/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset. Add filters
 */

$(document).ready(function() {
    $.getJSON("/fellowship/fellows_dataset.json", function(data){
        var fellow;

        $.each(fellows, function(key, value) {
            fellow = jQuery.parseJSON(value);
            $("#fellows").append(fellow.id);
        });
    });
});