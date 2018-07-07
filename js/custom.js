/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset with filters and search box.
 */

$(document).ready(function() {
    $.fn.extend( {
        appendFellow: function (fellowData) {
            $(this).append($("<div>").text(fellowData['name']['first'] + " " + fellowData['name']['last']));
        }
    });

    $.getJSON("/fellowship/fellows_dataset.json", function(data){

        $.each(data, function() {
            $("#fellows").appendFellow(this);
        });
    });
});