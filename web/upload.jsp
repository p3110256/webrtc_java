<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Texnologia Polumeswn</title>
    <!--// Stylesheets //-->
    <%--<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">--%>
    <%--<link href="css/style.css" rel="stylesheet" type="text/css"/>--%>
    <%--<link href="css/ddsmoothmenu.css" rel="stylesheet" type="text/css"/>--%>
    <%--<link href="css/scrollbar.css" rel="stylesheet" type="text/css"/>--%>
    <%--&lt;%&ndash;//getskeleton&ndash;%&gt;--%>
    <%--<link href="css/skeleton.css" rel="stylesheet" type="text/css"/>--%>
    <%--<link href="css/normalize.css" rel="stylesheet" type="text/css"/>--%>


    <link href="css/boostrap.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap-theme.css.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap-theme.min.css.css" rel="stylesheet" type="text/css"/>


    <!--// Javascript //-->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.1.4.2.js"></script>
    <script type="text/javascript" src="js/TemplateFunctionality.js"></script>
    <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <%--<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>--%>
</head>
<body>
<%--NAVIGATION MENU--%>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Torrs</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="index.jsp" class="staticlinks">Stream a WebTorrent</a></li>
            <li><a href="upload.jsp" class="staticlinks">Upload a Torrent</a></li>
            <li><a href="streamTorrent.jsp" class="staticlinks">Stream a Torrent</a></li>
        </ul>
    </div>
</nav>
<%--SEARCH BAR--%>
<div class="row">
    <div class="col-lg-8">
        <div class="form-group">
            <input type="text" class="form-control" id="input" placeholder="Enter Magnet/Torrent ID">
        </div>
    </div>
    <div class="col-md-4">
        <button type="submit" class="btn btn-primary btn-lg streamVideo">Submit</button>
    </div>
</div>
<div class="jumbotron">
    <div class="container">
        <div class="VideoContainer">
            <h1>Here we are going to place our Video</h1>
        </div>
    </div>
</div>

<div class="jumbotron" style="
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 0px;
    background-color: #eee;
    margin-bottom: 0px;">
    <div class="container">
        <div class="clear"></div>`
        <div id="copyrights">
            <div class="inner">
        <span>
            <span>Copyright 2015 | </span>
            <span>Alexandros Polichronopoulos | </span>
            <span>p3110256@dias.aueb.gr | </span>
            <span>Marios Kamperis | </span>
            <span>p3110068@dias.aueb.gr  | </span>
            <a href="info.jsp">Info Page</a>
        </span>
            </div>
        </div>
    </div>
</div>
</body>
<%--<body>--%>
<%--<span class="biglines">&nbsp;</span>--%>
<%--<!-- Wrapper -->--%>
<%--<div id="wrapper_sec">--%>
<%--<!-- Top Section -->--%>
<%--<div class="top_sec">--%>

<%--</div>--%>
<%--<div class="clear"></div>--%>
<%--<!-- Header -->--%>
<%--<div id="masthead">--%>

<%--<nav class="navbar navbar-inverse" style="float:left;">--%>
<%--<div class="container-fluid">--%>
<%--<div class="navbar-header">--%>
<%--<a class="navbar-brand" href="#">Torrs</a>--%>
<%--</div>--%>
<%--<ul class="nav navbar-nav">--%>
<%--<li class="active"><a href="index.html" class="staticlinks">Stream a WebTorrent</a></li>--%>
<%--<li><a href="upload.jsp" class="staticlinks">Upload a Torrent</a></li>--%>
<%--<li><a href="streamTorrent.jsp" class="staticlinks">Stream a Torrent</a></li>--%>
<%--</ul>--%>
<%--</div>--%>
<%--</nav>--%>

<%--<form class="form-inline" role="form">--%>
<%--<div class="form-group">--%>
<%--<input type="text" class="form-control" id="input" placeholder="Enter Magnet/Torrent ID">--%>
<%--</div>--%>
<%--<button type="submit" class="btn btn-primary streamVideo">Submit</button>--%>
<%--</form>--%>
<%--</div>--%>
<%--<div class="clear"></div>--%>
<%--<!-- Banner -->--%>
<%--<div id="banner">--%>
<%--<div id="videoContainer">--%>

<%--</div>--%>
<%--</div>--%>
<%--<div class="clear"></div>--%>
<%--</div>--%>
<%--<div class="clear"></div>--%>
<%--<div id="copyrights">--%>
<%--<div class="inner">--%>
<%--<p>Created by Alex Polycronopoulos & Kamperis Marios.</p>--%>

<%--</div>--%>
<%--</div>--%>
<%--</body>--%>
<%--SOME BASIC JAVASCRIPT FUNCTIONALITY--%>
<script>

    $(document).ready(function () {
        $('.streamVideo').click(function (e) {
            var input = $('#input').val();
            if (input != null) {
                streamVideo(input);
            } else {
                alert("Give me a Magnet or Torrent ID to stream for you ;)")
            }
        });

    });

    function streamVideo(link) {
        //alert("Function streamVideo received :"+link);

        if (WebTorrent.WEBRTC_SUPPORT) {
            var client = new WebTorrent();
            var magnetURI = link;
            alert("Received link :" + magnetURI);
            client.add(magnetURI, function (torrent) {
                // Got torrent metadata!
                console.log('Client is downloading:', torrent.infoHash);

                torrent.files.forEach(function (file) {
                    // Display the file by appending it to the DOM. Supports video, audio, images, and
                    // more. Specify a container element (CSS selector or reference to DOM node).
                    alert(file.toString());
                    file.appendTo('#videoContainer');
                })
            })
        }
        else {
            alert("No WebRTC Support");
        }
    }
</script>
</html>
