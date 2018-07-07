/* Custom JavaScript
 *
 * Author: Kate Currie
 * Created: 7 July 2018
 *
 * Description: Read and display a json dataset. Add filters
 */

$(document).ready(function() {
    $.getJSON("/fellowship/fellows_dataset.json", function(result){
        $.each(result, function(i, field){
            console.log(result);
        });
    });
});