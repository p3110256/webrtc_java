/**
 * Created by Marios on 2/8/2016.
 */

$(document).ready(function () {

    //Choosing File Logic
    $('#uploadfile').on('change', function (event, numFiles, label) {
        alert("File Name :"+label+"  Number Of Files :"+numFiles);
        seed($('#uploadfile').get(0).files)
    });

});

////For choosing File button
//$(document).on('change', '.btn-file :file', function() {
//    var input = $(this),
//        numFiles = input.get(0).files ? input.get(0).files.length : 1,
//        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
//    input.trigger('fileselect', [numFiles, label]);
//});


function seed(files) {

    if (files.length == 0) return;
    console.log('Seeding ' + files.length + ' files');

    if (WebTorrent.WEBRTC_SUPPORT) {
        var client = new WebTorrent();
        //client.seed(files, onTorrent);
        alert("seeding ??");
        client.seed(files, function (torrent) {
            console.log('Client is seeding ' + torrent.infoHash)
            console.log('Client is seeding ' + torrent.name)
            console.log('Client is seeding ' + torrent.magnetURI)
        });
    }
    else {
        alert("No WebRTC Support");
    }

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
