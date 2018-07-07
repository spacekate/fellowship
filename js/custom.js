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
            var fellow = $("<div>", {id: this['id']});
            var activityIndicator = $("<p>", {innerHTML: this['isActive']});
            var age = $("<span>", {innerHTML: this['age']});

            fellow.append(activityIndicator);
            fellow.append(age);

            $("#fellows").append(fellow);
        });
    });
});