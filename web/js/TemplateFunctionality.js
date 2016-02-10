/**
 * Created by Marios on 2/8/2016.
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

            streamVideo(input);

        }
    });
});
function streamVideo(link) {
    var $btn = $(this).button('loading');


    if (WebTorrent.WEBRTC_SUPPORT) {
        var client = new WebTorrent();
        var magnetURI = 'magnet:?xt=urn:btih:730f7e584ddf03ea58e7da1dd61fa8d9183c9974&dn=the.flash.2014.210.hdtv-lol%5Bettv%5D.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io';
        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            console.log('Client is downloading:', torrent.toString());

            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                //Append file to body and let themagic begin
                file.appendTo('#VideoContainer');
                //Set file_size and file_name
                var file_size = parseInt(file.length);
                document.getElementById("file_size").innerHTML = humanFileSize(file_size, true);
                document.getElementById("file_name").innerHTML = file.name;

                //UnsetLoading Button after 3 seconds
                setTimeout(function () {
                    $('#myStateButton').button('reset');
                    $('#container').css('display','block');
                }, 3000);
                $('#message').hide();
            });

            torrent.on('download',function(e){
                //console.log("Inside download :"+ e.infoHash);
            });
        });
        client.on('torrent', function(torrent){
            setInterval(function(){
                document.getElementById("downloaded").innerHTML = humanFileSize(torrent.received,true);
                document.getElementById("timeRemaining").innerHTML = millisToMinutesAndSeconds(torrent.timeRemaining)+" min";
                document.getElementById("downloadSpeed").innerHTML = humanFileSize(torrent.downloadSpeed,true);
                document.getElementById("uploadSpeed").innerHTML =humanFileSize(torrent.uploadSpeed,true);
                var progress=torrent.progress*100;
                document.getElementById("progress").innerHTML =progress.toFixed(2)+"%";

            }, 1000);
        });
    }
    else {
        alert("No WebRTC Support");
    }
}


function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}