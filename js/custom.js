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
            var fellow = $("div")
                .attr("id", this["id"])
            );

            $(fellow).append(
                $("<div>")
                    .text(this['name']['first'] + " " + this['name']['last'])
            );

            $(fellow).append(
                $("<div>")
                    .text(this['age'])
            );

            $("#fellows").append(fellow);
        });
    });
});