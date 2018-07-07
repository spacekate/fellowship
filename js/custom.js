/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset with filters and search box.
 */

$(document).ready(function() {
    $.getJSON("/fellowship/fellows_dataset.json", function(data){

        $.each(data, function() {

            $("#fellows").append(
                $("<div>")
                    .text(this['name']['first'] + " " + this['name']['last'])
            );

            $("#fellows").append(
                $("<div>")
                    .text(this['age'])
            );
        });
    });
});