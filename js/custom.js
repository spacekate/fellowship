/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset with filters and search box.
 */

$(document).ready(function() {
    $.getJSON("/fellowship/fellows_dataset.json", function(data){
        var fellow;
        alert(data[0]);

        /*
        $.each(data, function(key, value) {
            alert("key = " + key + " \nvalue = " + value.toString());
            fellow = JSON.parse(value);
            $("#fellows").append(fellow.id);
        });
        */
    });
});