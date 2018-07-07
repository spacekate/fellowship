/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset with filters and search box.
 */

$(document).ready(function() {
    $.ajax({
        url: "/fellowship/fellows_dataset.json",
        type: "POST",
        success: function(response)
        {
            console.log(response);

            var json_obj = $.parseJSON(response);

            var output="<ul>";
            for (var i in json_obj)
            {
                output+="<li>" + json_obj[i].id + ",  " + json_obj[i].fellowship + "</li>";
            }
            output+="</ul>";

            $('#fellows').html(output);
            alert(response);
        },
        dataType: "json"
    });
});