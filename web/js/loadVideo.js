/**
 * Created by Alexandros on 7/2/2016.
 */



function loadVideo() {

    if ( WebTorrent.WEBRTC_SUPPORT ) {
        var client = new WebTorrent();
        //        var magnetURI = 'magnet:?xt=urn:btih:ff1bb246fe27e403bd6cafd0c07b11cbf3cdc968&dn=Heroes.Reborn.S01E12.HDTV.x264-KILLERS%5Bettv%5D.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io'

        var magnetURI = document.getElementById("uri").value;
        alert(magnetURI);
        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            console.log('Client is downloading:', torrent.infoHash);

            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                alert(file.toString());
                file.appendTo('span');
            })
        })
    }
    else {
        // fallback
        alert("not ok");
    }
}