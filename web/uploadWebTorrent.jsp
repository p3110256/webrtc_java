<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Torrs Upload WebTorrent</title>

    <link href="css/main.css" rel="stylesheet" type="text/css"/>
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
<body style="background: linear-gradient(#eee, #4d4d4d);">

<div id="wrap">
    <div id="main">

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
                            <ul class="nav navbar-nav navbar-nav-right" style="text-align: center; font-weight: bold; font-family: cursive; font-size: large;">
                                <li><a href="streamWebTorrent.jsp"><span class="">Stream a WebTorrent</span></a></li>
                                <li><a href="uploadWebTorrent.jsp"><span class="" style="color:whitesmoke">Upload a WebTorrent</span></a></li>
                                <li><a href="streamTorrent.jsp"><span class="">Stream a Torrent</span></a></li>
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
                            Select a local file to upload in a WebTorrent
                        </h1>
                    </div>
                </div>
                <div class="col-md-12" style="text-align: center;">
                    <span class="btn btn-default btn-file">Choose a File
                        <input type="file" id="uploadfile">
                    </span>

                    <div style="display: none; width:100%; margin:auto; margin-left:-40px" id="overlay"><img
                            style="height:150px; margin:auto" src="images/loading.gif" alt="Loading"/>Loading...
                    </div>
                </div>
            </div>

        </div>

        <div class="body" style="margin-top:40px">
            <div class="container" id="magnetURIdiv" style="display: none">

                <div class="col-lg-12">
                    <div class="form-group">
                        <h1 style="text-align: center; font-weight: bold; font-family: cursive;">
                            Use this Magnet URI to share the video as a WebTorrent :
                        </h1>
                        <textarea id="videoMagnetURI"
                                  style="width: 100%; text-align: center; resize: none; padding: 15px; border: 3px solid #1b6d85; margin:auto"
                                > No magnet URI </textarea>

                    </div>

                    <div class="VideoContainer" id="VideoContainer"
                         style="text-align: center; font-weight: bold;font-family: cursive;font-size: large; ">
                    </div>
                    <div class="VideoInfo" id="VideoInfo" style="margin-top:40px!important">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>File Size</th>
                                <th>File name</th>
                                <th>Path</th>
                                <th>Upload Speed</th>
                                <th>No of Peers</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td id="file_size"></td>
                                <td id="file_name"></td>
                                <td id="path"></td>
                                <td id="uploadSpeed"></td>
                                <td id="peersLength"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<div id="footer" class="footer" style="
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
                        <h4> Copyright 2016 |
                            Alexandros Polichronopoulos (p3110256) |
                            Marios Kamperis (p3110068) |
                            Jiorgos Pelekanos (p3050151) </h4>
                        <a href="index.jsp">Info Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
