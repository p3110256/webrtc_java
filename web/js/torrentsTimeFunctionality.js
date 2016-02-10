/**
 * Created by Alexis on 2/11/2016.
 */

$(document).ready(function () {

    $("#myStateButton").click(function () {
        var $btn = $(this);
        $btn.button('loading');
        // simulating a timeout
        var input = $('#input').val();
        if (input == null || input == "") {
            alert("Give me a Magnet or Torrent ID to stream for you ;)")
            setTimeout(function () {
                $('#myStateButton').button('reset');
            }, 500);
        } else {


            var video_element = '<script>torrentsTime.init()</script>' +
                '<div class="torrentsTime" id="torrentsTime"' +
                'data-setup=\'{"source": "' +
                input + '"}\'></div>';

                // hardcoded magnet backup
                //'magnet:?xt=urn:btih:73A3E1F9492BA6B0FA5AFB95FEEBA59C001ABF62&dn=the+flash+2014+s02e13+hdtv+x264+lol+ettv&tr=udp%3A%2F%2Ftracker.publicbt.com%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce' +

            $('#VideoContainer').append(video_element);
            $('#myStateButton').button('reset');
            $('#container').css('display','block');
        }
    });

});
