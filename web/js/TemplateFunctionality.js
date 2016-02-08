/**
 * Created by Marios on 2/8/2016.
 */


function streamVideo(link) {

    if ( WebTorrent.WEBRTC_SUPPORT ) {
        var client = new WebTorrent();
        var magnetURI = link;
        alert(magnetURI);
        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            console.log('Client is downloading:', torrent.infoHash);

            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                alert(file.toString());
                file.appendTo('.contentdiv');
            })
        })
    }
    else {
        // fallback
        alert("not ok");
    }
}
