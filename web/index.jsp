<%--
  Created by IntelliJ IDEA.
  User: a.polichronopoulos
  Date: 02-Feb-16
  Time: 22:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

  <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
  <head>
    <title>Index Page</title>
  </head>

  <body>

    Enter a Magnet URI below to start streaming a video from WebTorrent.

    <br>
    <br>
    <div>
      <a href="video.html">Stream a video</a>
    </div>
    <br>
    <div>
      <a href="upload.html">Seed a video</a>
    </div>
    <br>



    <script>
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
              file.appendTo('body');
            })
          })
        }
        else {
          // fallback
          alert("not ok");
        }
      }
    </script>

    <input id="uri" type="url" placeholder="Insert a Magnet URI here .."/>
    <button onclick="loadVideo()"> Load Video </button>

  </body>
</html>
