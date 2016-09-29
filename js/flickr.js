$(document).ready(function () {
    $('form').submit(function (evt) {
       evt.preventDefault();
        var $search = $('#search');
        var $submitButton = $('#submit');
        $search.prop('disabled', true);
        $submitButton.attr("disabled", true).val("Searching....");
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var animal = $search.val();
        var flickrOptions = {
            tags: animal,
            format: "json"
        };
        
        function displayphotos(data){
            var photoHTML= '<ul>';
            $.each(data.items, function(i, photo){
                photoHTML+= '<li class="grid-25 tablet-grid-50">';
                photoHTML+= '<a href="'+photo.link + '" class="image">';
                photoHTML+='<img src="'+photo.media.m+ '"></a></li>';
            });
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
            $search.prop('disabled', false);
            $submitButton.attr('disabled', false).val('Search');
        };
        $.getJSON(flickerAPI, flickrOptions, displayphotos);
    });
});
