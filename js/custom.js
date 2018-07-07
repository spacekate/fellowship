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
            var newFellow = $("<div>")
                .attr("id", fellowData["id"])
                .addClass("col-md-6 col-lg-4");
            var fellowBody = $("<div>")
                .addClass("fellow align-top");
            var name = $("<p>")
                .text(fellowData['name']['first'] + " " + fellowData['name']['last']);
            var fellowship = $("<p>")
                .text(fellowData['fellowship']);
            var age = $("<p>")
                .text("age: " + fellowData['age']);
            var email = $("<a>")
                .text(fellowData['email'])
                .attr("href", "mailto:" + fellowData['email']);
            var about = $("<p>")
                .text(fellowData['about']);

            if (!fellowData['isActive']) {
                $(newFellow).addClass("text-muted");
            }

            $(newFellow).append(fellowBody);
            $(fellowBody)
                .append(name)
                .append(fellowship)
                .append(age)
                .append(email)
                .append(about);
            $(this).append(newFellow);
        }
    });

    $.getJSON("/fellowship/fellows_dataset.json", function(data){

        $.each(data, function() {
            $("#fellows").appendFellow(this);
        });
    });
});