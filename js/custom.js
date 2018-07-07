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
            var newFellow = $("div").attr("id", fellowData["id"]).className("col-lg-6");
            var name = $("<p>").text(fellowData['name']['first'] + " " + fellowData['name']['last']);
            var fellowship = $("<p>").text(fellowData['fellowship']);
            var age = $("<p>").text(fellowData['age']);
            var email = $("<a>").text(fellowData['email']).attr("href", "mailto:" + fellowData['email']);
            var about = $("<p>").text(fellowData['about']);
            var isActive = false;
            if (fellowData['isActive'] == "true") {
                isActive = true;
            }
            $(this).append(name).append(age).append(email);
        }
    });

    $.getJSON("/fellowship/fellows_dataset.json", function(data){

        $.each(data, function() {
            $("#fellows").appendFellow(this);
        });
    });
});