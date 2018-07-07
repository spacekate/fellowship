/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset with filters and search box.
 */

$(document).ready(function() {
    var fellowship_data; // variable to store data

    $.fn.extend( {
        /*
         * appendFellow function
         * Display fellow data as html dom elements
         */
        appendFellow: function (fellowData) {
            var newFellow = $("<div>")
                .attr("id", fellowData["id"])
                .addClass("col-lg-10 offset-lg-1");
            var fellowBody = $("<div>")
                .addClass("fellow");
            var name = $("<h3>")
                .text(fellowData['name']['first'] + " " + fellowData['name']['last']);
            var fellowship = $("<p>")
                .text("Fellowship: " + fellowData['fellowship']);
            var age = $("<p>")
                .text("age: " + fellowData['age']);
            var about = $("<p>")
                .text(fellowData['about']);
            var email = $("<a>")
                .text(fellowData['email'])
                .attr("href", "mailto:" + fellowData['email']);
            var registered = $("<span>")
                .text("Registered: " + fellowData['registered'])
                .addClass("small");
            var isActive = $("<span>")
                .addClass("status small");
            var idNumber = $("<span>")
                .addClass("small idNumber")
                .text("Id: " + fellowData['id']);

            if (!fellowData['isActive']) {
                $(newFellow).addClass("text-muted");
                isActive.text("inactive");
            } else {
                isActive.text("active").addClass("active");
            }

            $(newFellow).append(fellowBody);
            $(fellowBody)
                .append(name)
                .append(fellowship)
                .append(age)
                .append(about)
                .append($("<p>").text("email: ").append(email))
                .append(registered)
                .append(idNumber)
                .append(isActive);
            $(this).append(newFellow);
        }
    });

    /*
     * On page load, read the fellows_dataset json and output to dom
     */
    $.getJSON("/fellowship/fellows_dataset.json", function(data){
        fellowship_data = data;
        refreshFellows(fellowship_data);
    });

    /*
     * Search function
     * Create an array containing the matching data and refresh display
     */
    $("#search").submit(function(event) {
        // ensure page does not reload when form is submitted
        event.preventDefault();

        var filteredData = []; // initialize empty array for search results
        var searchTerm = $("#searchFor").val().toLowerCase();


        $.each(fellowship_data, function() {
            if ((this["about"].toLowerCase().indexOf(searchTerm) != -1)
                || (this["name"]["first"].toLowerCase().indexOf(searchTerm) != -1)
                || (this["name"]["last"].toLowerCase().indexOf(searchTerm) != -1)
                || (this["fellowship"].toLowerCase().indexOf(searchTerm) != -1)) {
                filteredData.push(this);
            }
        });

        refreshFellows(filteredData);
    });

    /*
     * Filter function
     * Sort the existing data array by the given filter and refresh display
     */
    $("#filter").submit(function(event) {
        // ensure page does not reload when form is submitted
        event.preventDefault();

        var filterType = ($("select#filterBy option:selected").val());
        // clear search box to minimize confusion
        $("#searchFor").val("");

        switch (filterType) {
            case "fellowship":
                // order by fellowship
                fellowship_data.sort(fellowshipSort);
                refreshFellows(fellowship_data);
                break;
            case "active":
                // order by active/inactive
                fellowship_data.sort(activeSort);
                refreshFellows(fellowship_data);
                break;
            default:
                // order alphabetically
                fellowship_data.sort(lastNameSort);
                refreshFellows(fellowship_data);
        }
    });

    /*
     * Refresh display
     * This function clears and repopulates the "fellows" dom element
     */
    function refreshFellows (data) {
        $("#fellows").empty();
        $.each(data, function() {
            $("#fellows").appendFellow(this);
        });
    }

    /*
     * Sort Functions
     * The following four functions sort the data by the relevant criteria
     */
    function fellowshipSort(a, b) {
        return attributeSort(a["fellowship"], b["fellowship"]);
    }

    function activeSort(a, b) {
        return attributeSort(b["isActive"], a["isActive"]);
    }

    function lastNameSort(a, b) {
        return attributeSort(a["name"]["last"], b["name"]["last"]);
    }

    function attributeSort(aName, bName) {
        if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    }
});