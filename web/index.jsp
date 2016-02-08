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
    <%--//LocalFonts--%>

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
        <%--<button type="submit" id="myButton" class="btn btn-primary btn-lg streamVideo"  data-loading-text="Loading..." autocomplete="off">Submit</button>--%>
        <button type="submit" id="myStateButton" data-complete-text="Done..." class="btn btn-primary btn-lg streamVideo"
                autocomplete="off">
            Submit
        </button>
        <%--<div class="container">--%>
            <%--<h3>Animated button</h3>--%>
            <%--<button class="btn btn-lg btn-warning"><span--%>
                    <%--class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...--%>
            <%--</button>--%>
        <%--</div>--%>
    </div>
    <div class="col-md-4">
        <!-- Button trigger modal -->
        <%--<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">--%>
        <%--Launch demo modal--%>
        <%--</button>--%>
    </div>
</div>
<%--<!-- Modal -->--%>
<%--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">--%>
<%--<div class="modal-dialog" role="document">--%>
<%--<div class="modal-content">--%>
<%--<div class="modal-header">--%>
<%--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>--%>
<%--<h4 class="modal-title" id="myModalLabel">Modal title</h4>--%>
<%--</div>--%>
<%--<div class="modal-body">--%>
<%--...--%>
<%--</div>--%>
<%--<div class="modal-footer">--%>
<%--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--%>
<%--<button type="button" class="btn btn-primary">Save changes</button>--%>
<%--</div>--%>
<%--</div>--%>
<%--</div>--%>
<%--</div>--%>

<div class="jumbotron">
    <div class="container">
        <div class="VideoContainer" id="VideoContainer">
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
        <div class="clear"></div>
        `
        <div id="copyrights">
            <div class="inner">
                <h4> Copyright 2015 | Alexandros Polichronopoulos | p3110256@dias.aueb.gr | Marios Kamperis |
                    p3110068@dias.aueb.gr | </h4>
                <a href="info.jsp">Info Page</a>
            </div>
        </div>
    </div>
</div>
</body>
<%--SOME BASIC JAVASCRIPT FUNCTIONALITY--%>

</html>
