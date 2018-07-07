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
                .addClass("col-lg-10 offset-lg-1");
            var fellowBody = $("<div>")
                .addClass("fellow");
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
            var isActive = $("<span>")
                .addClass("status");

            if (!fellowData['isActive']) {
                $(newFellow).addClass("text-muted");
                isActive.text("inactive");
            } else {
                isActive.text("active");
            }

            $(newFellow).append(fellowBody);
            $(fellowBody)
                .append(name)
                .append(fellowship)
                .append(age)
                .append(about)
                .append($("<p>").text("email: ").append(email))
                .append(isActive);
            $(this).append(newFellow);
        }
    });

    $.getJSON("/fellowship/fellows_dataset.json", function(data){

        $.each(data, function() {
            $("#fellows").appendFellow(this);
        });
    });
});