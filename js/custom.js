/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset with filters and search box.
 */

$(document).ready(function() {
    var response = "";
    var form_data = {
        username: "",
        password: "",
        is_ajax: 1
    };

    $.ajax({
        type: "POST",
        url: "/fellowship/fellows_dataset.json",
        data: form_data,
        success: function(response)
        {
            console.log(response);

            var json_obj = $.parseJSON(response); //parse JSON

            var output="<ul>";
            for (var i in json_obj)
            {
                output+="<li>" + json_obj[i].id + ",  " + json_obj[i].fellowship + "</li>";
            }
            output+="</ul>";

            $('#fellows').html(output);
        },
        dataType: "json"//set to JSON
    });
});