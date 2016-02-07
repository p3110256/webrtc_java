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


    Enter a Magnet URI below to start streaming a video from WebTorrent...

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


    <script src="js/loadVideo.js"></script>


    <input id="uri" type="url" placeholder="Insert a Magnet URI here .."/>
    <button onclick="loadVideo()"> Load Video </button>

    <br>
    <br>
    <span id="video" style="background-color: dimgray">
      Video will go here :
      <br>
    </span>

    <br>

  </body>
</html>
