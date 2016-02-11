/**
 * Created by Marios on 2/8/2016.
 */

$(document).ready(function () {

    //Choosing File Logic
    $('#uploadfile').on('change', function (e) {
        seed($(this).get(0).files)
    });

});


function seed(files) {

    if (files.length == 0) return;
    console.log('Seeding ' + files.length + ' files');

    $('#overlay').css("display","block");

    if (WebTorrent.WEBRTC_SUPPORT) {
        var client = new WebTorrent();
        //alert("seeding ??");
        client.seed(files, function onseed(torrent) {
            console.log('Client is seeding ' + torrent.infoHash)
            console.log('Client is seeding ' + torrent.name)
            console.log('Client is seeding ' + torrent.magnetURI)
            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                //Append file to body and let themagic begin
                file.appendTo('#VideoContainer');
                var file_size = parseInt(file.length);
                document.getElementById("file_size").innerHTML = humanFileSize(file_size, true);
                document.getElementById("file_name").innerHTML = file.name;

            });
            $('#file_size').text(humanFileSize(parseInt(torrent.length), true));
            $('#file_name').text(torrent.name);
            $('#videoMagnetURI').text(torrent.magnetURI);
            $('videoMagnetURI').autoResize();


            $('#magnetURIdiv').css("display","block");
            // PAGE IS FULLY LOADED , FADE OUT YOUR OVERLAYING DIV
            $('#overlay').hide('slow');

            setInterval(function(){
                //<th>File Size</th>
                //<th>File name</th>
                //<th>Path</th>
                //<th>Upload Speed</th>
                //<th>No of Peers</th>
                //<th>Time Remaining</th>
                //<th>Ip Adresses</th>
                //console.log(torrent.swarm);

                //document.getElementById("downloaded").innerHTML = humanFileSize(torrent.received,true);
                document.getElementById("path").innerHTML = torrent.path;
                document.getElementById("uploadSpeed").innerHTML =humanFileSize(torrent.uploadSpeed,true);
                document.getElementById("timeRemaining").innerHTML = millisToMinutesAndSeconds(torrent.timeRemaining)+" min";
                document.getElementById("peersLength").innerHTML = torrent.swarm._peersLength;
                //console.log(torrent.swarm._peers.get);

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

//function onTorrent (torrent) {
//    upload.value = upload.defaultValue // reset upload element
//
//    var torrentFileName = path.basename(torrent.name, path.extname(torrent.name)) + '.torrent'
//
//    util.log('"' + torrentFileName + '" contains ' + torrent.files.length + ' files:')
//    torrent.files.forEach(function (file) {
//        util.log('&nbsp;&nbsp;- ' + file.name + ' (' + prettyBytes(file.length) + ')')
//    })
//
//    util.log(
//        'Torrent info hash: ' + torrent.infoHash + ' ' +
//        '<a href="/#' + torrent.infoHash + '" onclick="prompt(\'Share this link with anyone you want to download this torrent:\', this.href);return false;">[Share link]</a> ' +
//        '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
//        '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrentFileName + '">[Download .torrent]</a>'
//    )
//
//    function updateSpeed () {
//        var progress = (100 * torrent.progress).toFixed(1)
//        util.updateSpeed(
//            '<b>Peers:</b> ' + torrent.swarm.wires.length + ' ' +
//            '<b>Progress:</b> ' + progress + '% ' +
//            '<b>Download speed:</b> ' + prettyBytes(window.client.downloadSpeed) + '/s ' +
//            '<b>Upload speed:</b> ' + prettyBytes(window.client.uploadSpeed) + '/s'
//        )
//    }
//
//    torrent.on('download', throttle(updateSpeed, 250))
//    torrent.on('upload', throttle(updateSpeed, 250))
//    setInterval(updateSpeed, 5000)
//    updateSpeed()
//
//    torrent.files.forEach(function (file) {
//        // append file
//        file.appendTo(util.logElem, function (err, elem) {
//            if (err) return util.error(err)
//        })
//
//        // append download link
//        file.getBlobURL(function (err, url) {
//            if (err) return util.error(err)
//
//            var a = document.createElement('a')
//            a.target = '_blank'
//            a.download = file.name
//            a.href = url
//            a.textContent = 'Download ' + file.name
//            util.log(a)
//        })
//    })
//}
