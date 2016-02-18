$(document).ready(function () {
    //Choosing File Logic
    $('#uploadfile').on('change', function (e) {
        console.log($(this).get(0).files);
        console.log($(this).val());
        seed($(this).get(0).files);
    });
    var streaming = false;
    //window.onbeforeunload = function (e) {
    //    e = e || window.event;
    //    // For IE and Firefox prior to version 4
    //    if (e && streaming==true) {
    //        e.returnValue = 'You are streaming right now. Are you sure you want to close the tab?';
    //    }
    //    // For Safari
    //    if(streaming==true){
    //        return 'You are streaming right now. Are you sure you want to close the tab?';
    //    }
    //};

});

function seed(files) {

    if (files.length == 0) return;
    console.log('Seeding ' + files.length + ' files');

    $('#overlay').css("display", "block");

    if (WebTorrent.WEBRTC_SUPPORT) {

        var client = new WebTorrent();
        console.log("client ok");
        client.seed(files, function onseed(torrent) {
            console.log("client.seed ok");
            console.log('Client is seeding ' + torrent.infoHash)
            console.log('Client is seeding ' + torrent.name)
            console.log('Client is seeding ' + torrent.magnetURI)

            torrent.files.forEach(function (file) {
                streaming=true;
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                //Append file to body and let themagic begin
                file.appendTo('#VideoContainer');
                var file_size = parseInt(file.length);
                document.getElementById("file_size").innerHTML = humanFileSize(file_size, true);
                document.getElementById("file_name").innerHTML = file.name;

            });

            window.onbeforeunload = function (e) {
                e = e || window.event;
                // For IE and Firefox prior to version 4
                if (e && streaming == true) {
                    e.returnValue = 'You are streaming right now. Are you sure you want to close the tab?';
                }
                // For Safari
                if (streaming == true) {
                    return 'You are streaming right now. Are you sure you want to close the tab?';
                }
            };
            $('#file_size').text(humanFileSize(parseInt(torrent.length), true));
            $('#file_name').text(torrent.name);
            $('#videoMagnetURI').text(torrent.magnetURI);
            $('videoMagnetURI').autoResize();

            $('#magnetURIdiv').fadeIn('slow');
            // PAGE IS FULLY LOADED , FADE OUT YOUR OVERLAYING DIV
            $('#overlay').hide('slow');

            setInterval(function () {
                document.getElementById("path").innerHTML = torrent.path;
                document.getElementById("uploadSpeed").innerHTML = humanFileSize(torrent.uploadSpeed, true);
                document.getElementById("peersLength").innerHTML = torrent.swarm._peersLength;
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
