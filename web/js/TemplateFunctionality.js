/**
 * Created by Marios on 2/8/2016.
 */

$(document).ready(function () {
    $('.streamVideo').click(function (e) {
        var input = $('#input').val();
        if (input == null || input == "") {
            alert("Give me a Magnet or Torrent ID to stream for you ;)")
        } else {
            streamVideo(input);
        }
    });
});

function streamVideo(link) {
    //alert("Function streamVideo received :"+link);

    if (WebTorrent.WEBRTC_SUPPORT) {
        var client = new WebTorrent();
        var magnetURI = link;
        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            console.log('Client is downloading:', torrent.infoHash);

            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                alert("Now Playing link :" + magnetURI);
                file.appendTo('#VideoContainer');
            })
        })
    }
    else {
        alert("No WebRTC Support");
    }
}
