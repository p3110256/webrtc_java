<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
    <script type="text/javascript" src="js/TemplateFunctionality.js"></script>

</head>
<body style="background: linear-gradient(#eee, #4d4d4d)">

<%--NAVIGATION MENU--%>
<div class="header">
    <div class="row">
        <nav class="navbar">
            <div class="col-lg-3">
                <div class="container-fluid">
                    <div class="navbar-header"
                         style="height: 10%;
                width: 10%;
                text-align: center;
                font-size: xx-large !important;
                font-weight: 900;
                font-family: cursive;">
                        <a class="navbar-brand" href="#" style="font-size: 190%; color:#4d4d4d">Torrs</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <ul class="nav navbar-nav" style="height: 4%;
                        text-align: center;
                        font-weight: bold;
                        font-family: cursive;
                        font-size: large;">
                    <li class="active"><a href="index.jsp" class="staticlinks" style="color:#4d4d4d; font-size: 120%;">Stream
                        a WebTorrent</a></li>
                    <li><a href="upload.jsp" class="staticlinks" style="color:#4d4d4d; font-size: 120%;">Upload a
                        Torrent</a></li>
                    <li><a href="streamTorrent.jsp" class="staticlinks" style="color:#4d4d4d; font-size: 120%;">Stream a
                        Torrent</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <%--SEARCH BAR--%>
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group">
                <input type="text" class="form-control" id="input" placeholder="Enter Magnet/Torrent ID"
                       style="
                        height: 4%;
                        text-align: center;
                        font-weight: bold;
                        font-family: cursive;
                        font-size: large;
                        ">
            </div>
        </div>
        <div class="col-md-12" style="text-align: center;">
            <button type="submit" id="myStateButton" data-complete-text="Done..."
                    class="btn btn-primary btn-lg streamVideo"
                    autocomplete="off">
                Submit
            </button>
        </div>
    </div>

</div>
<div class="body" style="min-height: 75%;">
    <div class="container">
        <div class="message" style="text-align: center;font-weight: bold;font-family: cursive;font-size: large;">
            <h1>Here we are going to place our Video</h1>
        </div>


        <div class="VideoContainer" id="VideoContainer"
             style="text-align: center;font-weight: bold;font-family: cursive;font-size: large;">
        </div>
        <div class="VideoInfo" id="VideoInfo">
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
<%--</div>--%>
<div class="footer" style="
    color: #1a1a1a;
    text-align: center;
    padding-top: 10px;
    margin: -50px auto 0 auto;
    font-weight: bold;
    font-family: cursive;
    font-size: large;">

    <div class="row">
        <div class="col-lg-12">
            <div class="container">
                <div class="clear"></div>
                <div id="copyrights">
                    <div class="inner">
                        <h4> Copyright 2015 | Alexandros Polichronopoulos | p3110256@dias.aueb.gr | Marios Kamperis
                            |
                            p3110068@dias.aueb.gr | </h4>
                        <a href="info.jsp">Info Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
