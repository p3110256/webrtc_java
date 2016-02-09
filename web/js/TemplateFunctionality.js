/**
 * Created by Marios on 2/8/2016.
 */

$(document).ready(function () {
    //$('#myButton').on('click', function () {
    //    var input = $('#input').val();
    //    if (input == null || input == "") {
    //        alert("Give me a Magnet or Torrent ID to stream for you ;)")
    //    } else {
    //        streamVideo(input);
    //    }
    //});
    $("#myStateButton").click(function () {
        var $btn = $(this);
        $btn.button('loading');
        // simulating a timeout
        var input = $('#input').val('');
        input='magnet:?xt=urn:btih:1a8ff368252a2635d4f6340a6c267a52d496ad91&dn=star.wars.rebels.s02e01.the.siege.of.lothal.hdtv.x264-w4f.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io';
        if (input == null || input == "") {
            alert("Give me a Magnet or Torrent ID to stream for you ;)")
            setTimeout(function () {
                $('#myStateButton').button('reset');
            }, 500);
        } else {
            streamVideo(input);

        }
    });

    //$('.streamVideo').click(function (e) {
    //    var input = $('#input').val();
    //    if (input == null || input == "") {
    //        alert("Give me a Magnet or Torrent ID to stream for you ;)")
    //    } else {
    //        streamVideo(input);
    //    }
    //});
});

function streamVideo(link) {
    var $btn = $(this).button('loading');


    if (WebTorrent.WEBRTC_SUPPORT) {
        var client = new WebTorrent();
        var magnetURI = link;
        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            console.log('Client is downloading:', torrent.infoHash);

            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                //Append file to body and let themagic begin
                file.appendTo('#VideoContainer');
                //Set file_size and file_name
                var file_size =parseInt(file.length);
                document.getElementById("file_size").innerHTML = humanFileSize(file_size,true);
                document.getElementById("file_name").innerHTML = file.name;;
                //UnsetLoading Button after 3 seconds
                setTimeout(function () {
                    $('#myStateButton').button('reset');
                }, 3000);
                $('#message').hide();
            });
            document.getElementById("swarm").innerHTML =torrent.swarm;
            document.getElementById("received").innerHTML =torrent.received;
            document.getElementById("downloaded").innerHTML =torrent.downloaded;
            document.getElementById("timeRemaining").innerHTML =torrent.timeRemaining;
            document.getElementById("downloadSpeed").innerHTML =torrent.downloadSpeed;

            console.log(torrent.swarm);
            console.log(torrent.received);
            console.log(torrent.downloaded);
            console.log(torrent.timeRemaining);
            console.log(torrent.downloadSpeed);

        });

    }
    else {
        alert("No WebRTC Support");
    }
}
function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
        : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1)+' '+units[u];
}