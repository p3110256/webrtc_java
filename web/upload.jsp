<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Texnologia Polumeswn</title>

    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>

    <!--// Javascript Online//-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
    <%--//Local Scripts--%>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/uploadFunctionality.js"></script>
    <script src="http://css-tricks.com/examples/TextareaTricks/js/autoresize.jquery.min.js"></script>


</head>
<body style="background: linear-gradient(#eee, #4d4d4d)">

<%--NAVIGATION MENU--%>
<div class="header">
    <div class="row">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.jsp" style="
                        /*width: 10%;*/
                        text-align: center;
                        font-size: xx-large !important;
                        font-weight: 900;
                        font-family: cursive;
                    ">Torrs</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav" style="height: 4%;
                        text-align: center;
                        font-weight: bold;
                        font-family: cursive;
                        font-size: large;">
                        <li><a href="index.jsp" class="staticlinks" style=" font-size: 120%; ">Stream a WebTorrent</a>
                        </li>
                        <li><a href="upload.jsp" class="staticlinks" style=" font-size: 120%; color: whitesmoke">Upload
                            a WebTorrent</a></li>
                        <li><a href="streamTorrent.jsp" class="staticlinks" style=" font-size: 120%;">Stream a
                            Torrent</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="index.jsp"><span class=""></span></a></li>
                        <li><a href="upload.jsp"><span class=""></span></a></li>
                        <li><a href="streamTorrent.jsp"><span class=""></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>


    <%--UPLOAD BOX--%>
    <div class="row" id="uploadBox">
        <div class="col-lg-12">
            <div class="form-group">
                <h1 style="text-align: center; font-weight: bold; font-family: cursive;">
                    Select a Local File for Upload
                </h1>
            </div>
        </div>
        <div class="col-md-12" style="text-align: center;">
            <span class="btn btn-default btn-file">Choose a File
                <input type="file" id="uploadfile">
            </span>

        </div>

        <div class="col-md-12" style="display: none; width:80%; margin:auto" id="overlay">
            <img style="height:200px;margin:auto" src="images/loading.gif" alt="Loading" />
            Loading...
        </div>
    </div>

</div>

<div class="body" style="min-height: 75%; margin-top:40px">
    <div class="container" id="magnetURIdiv" style="display: none">

        <div class="col-lg-12">
            <div class="form-group">
                <h1 style="text-align: center; font-weight: bold; font-family: cursive;">
                    Use this Magnet URI to share the video as a WebTorrent :
                </h1>
                <textarea id="videoMagnetURI" disabled="disabled"
                          style="width: 100%; text-align: center; resize: none; padding: 15px; border: 3px solid #1b6d85; margin:auto"
                        > No magnet URI </textarea>

            </div>
        </div>


        <div class="VideoContainer" id="VideoContainer" style="text-align: center; font-weight: bold;font-family: cursive;font-size: large; ">
        </div>
        <div class="VideoInfo" id="VideoInfo" style="margin-top:40px!important">
            <table class="table">
                <thead>
                <tr>
                    <th>File Size</th>
                    <th>File name</th>
                    <th>Swarm</th>
                    <th>Received</th>
                    <th>Downloaded</th>
                    <th>Time Remaining</th>
                    <th>Progress</th>
                    <th>Download Speed</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td id="file_size"></td>
                    <td id="file_name"></td>
                    <td id="swarm"></td>
                    <td id="received"></td>
                    <td id="downloaded"></td>
                    <td id="timeRemaining"></td>
                    <td id="downloadSpeed"></td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</div>


<div class="footer" style="
    color: #1a1a1a;
    text-align: center;
    padding-top: 10px;
    font-weight: bold;
    font-family: cursive;
    font-size: large;">

    <div class="row">
        <div class="col-lg-12" style="margin-bottom: 10px">
            <div class="container">
                <div class="clear"></div>
                <div id="copyrights">
                    <div class="inner">
                        <h4> Copyright 2015 | Alexandros Polichronopoulos | p3110256@dias.aueb.gr | Marios Kamperis |
                            p3110068@dias.aueb.gr </h4>
                        <a href="info.jsp">Info Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
