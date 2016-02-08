/**
 * Created by Marios on 2/8/2016.
 */


//function streamVideo(link) {
//    //alert("Function streamVideo received :"+link);
//
//    if ( WebTorrent.WEBRTC_SUPPORT ) {
//        var client = new WebTorrent();
//        var magnetURI = 'magnet:?xt=urn:btih:643f08d6e61cff5b2d963794db08fe57c0d5c9d6&dn=dcs.legends.of.tomorrow.102.hdtv-lol%5Bettv%5D.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io';
//        alert("Received link :"+magnetURI);
//        client.add(magnetURI, function (torrent) {
//            // Got torrent metadata!
//            console.log('Client is downloading:', torrent.infoHash);
//
//            torrent.files.forEach(function (file) {
//                // Display the file by appending it to the DOM. Supports video, audio, images, and
//                // more. Specify a container element (CSS selector or reference to DOM node).
//                alert(file.toString());
//                file.appendTo('body');
//            })
//        })
//    }
//    else {
//        // fallback
//        alert("No WebRTC Support");
//    }
//}
