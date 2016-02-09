/**
 * Created by Marios on 2/8/2016.
 */

$(document).ready(function () {

    //Choosing File Logic
    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
        alert("File Name :" + label + "  Number Of Files :" + numFiles);
        //console.log(label);
    });
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
    $("#myButton").click(function () {
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

            //<div class="torrentsTime" id="torrentsTime" data-setup='{"source": "4"'></div>

            $( "#VideoContainer" ).append('<div class="torrentsTime" id="torrentsTime" data-setup="{\"source\" : \"'+input+'\"}"></div>');

            //( "#first-tab" ).append('<div><label for="name">Test</label></div>');
            //$('#torrentsTime').attr('data-setup','{"source": "'+input+'"}');
            //streamVideo(input);
            setTimeout(function () {
                $('#myStateButton').button('reset');
            }, 500);
        }
    });
});
//For choosing File button
$(document).on('change', '.btn-file :file', function () {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});
function streamVideo(link) {
    var $btn = $(this).button('loading');


    if (WebTorrent.WEBRTC_SUPPORT) {
        var client = new WebTorrent();
        var magnetURI = link;// 'magnet:?xt=urn:btih:90d40b39ea5806b46e4b5f640061d390976ce147&dn=Marvels.Agents.of.S.H.I.E.L.D.S03E07.INTERNAL.HDTV.x264-KILLERS%5Bettv%5D.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io';
        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            console.log('Client is downloading:', torrent.infoHash);

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
                }, 3000);
                $('#message').hide();
            });
            torrent.get
            //document.getElementById("swarm").innerHTML = torrent.swarm;
            //document.getElementById("received").innerHTML = torrent.received;
            //document.getElementById("downloaded").innerHTML = torrent.downloaded;
            //document.getElementById("timeRemaining").innerHTML = torrent.timeRemaining;
            //document.getElementById("downloadSpeed").innerHTML = torrent.downloadSpeed;
            //
            //console.log(torrent.swarm);
            //console.log(torrent.received);
            //console.log(torrent.downloaded);
            //console.log(torrent.timeRemaining);
            //console.log(torrent.downloadSpeed);


            //torrent.on('infoHash', function () {
            //    t.equal(torrent.infoHash, common.leaves.parsedTorrent.infoHash)
            //    t.equal(torrent.magnetURI, common.leaves.magnetURI)
            //
            //    t.equal(client.torrents.length, 0)
            //
            //})
        });

        client.on('torrent', function (torrent) {
            //UnsetLoading Button after 3 seconds
            //alert("Now the torrent is ready to use");
            //console.log("ok");
            setTimeout(function () {
                $('#myStateButton').button('reset');
            }, 3000);
            $('#message').hide();

        });


    }
    else {
        alert("No WebRTC Support");
    }
    //setInterval(function() {
    //    console.log(onTorrent());
    //}, 1000);
}

//function onTorrent (torrent) {
//    //alert('torrent');
//    console.log(
//        'Torrent info hash: ' + torrent.infoHash() + ' ' +
//        '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
//        '<a href="' + torrent.torrentFileURL + '" target="_blank" download="' + torrentFileName + '">[Download .torrent]</a>'
//    )
//}

function uploadVideo() {
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
                var file_size = parseInt(file.length);

                document.getElementById("file_size").innerHTML = humanFileSize(file_size, true);
                document.getElementById("file_name").innerHTML = file.name;

                //UnsetLoading Button after 3 seconds
                setTimeout(function () {
                    $('#myStateButton').button('reset');
                }, 3000);
                $('#message').hide();
            });


            console.log(torrent.swarm);
            console.log(torrent.received);
            console.log(torrent.downloaded);
            console.log(torrent.timeRemaining);
            console.log(torrent.downloadSpeed);

        });
        client.on('torrent', function (torrent) {

            document.getElementById("swarm").innerHTML = torrent.swarm;
            document.getElementById("received").innerHTML = torrent.received;
            document.getElementById("downloaded").innerHTML = torrent.downloaded;
            document.getElementById("timeRemaining").innerHTML = torrent.timeRemaining;
            document.getElementById("downloadSpeed").innerHTML = torrent.downloadSpeed;
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