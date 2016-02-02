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
    <title>omg test working no1</title>
  </head>

  <body>

  This is a test
  <script>
    if (WebTorrent.WEBRTC_SUPPORT) {
      // webrtc support!
      alert("web rtc support");

     // var WebTorrent = require('webtorrent');

      var client = new WebTorrent();
      var magnetURI = 'magnet:?xt=urn:btih:4356A9C32A93006932E3C2B8BDDB08C3628D1C18&dn=The.Vampire.Diaries.S07E10.HDTV.x264-LOL%5bettv%5d&tr=http%3a%2f%2fretracker.krs-ix.ru%2fannounce&tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce';
      var magnetURI = 'magnet:?xt=urn:btih:643f08d6e61cff5b2d963794db08fe57c0d5c9d6&dn=dcs.legends.of.tomorrow.102.hdtv-lol%5Bettv%5D.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io'
      //var magnetURI = 'magnet:?xt=urn:btih:efc31c61cc62b3b6621b0ac31fd08c53caf1d65e&dn=2.broke.girls.505.hdtv-lol%5Bettv%5D.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io';
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

    } else {
      // fallback
    }
  </script>

  </body>
</html>
