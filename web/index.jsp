<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Torrs Info Page</title>

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
                                text-align: center;
                                font-size: xx-large !important;
                                font-weight: 900;
                                font-family: cursive;
                                color: whitesmoke;
                            ">Torrs</a>
                        </div>

                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-nav-right" style="text-align: center; font-weight: bold; font-family: cursive; font-size: large;">
                                <li><a href="streamWebTorrent.jsp"><span class="">Stream a WebTorrent</span></a></li>
                                <li><a href="uploadWebTorrent.jsp"><span class="">Upload a WebTorrent</span></a></li>
                                <li><a href="streamTorrent.jsp"><span class="">Stream a Torrent</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


        </div>

        <div class="body" style="margin-top:40px">
            <div class="container" id="container" style="display: none">



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
                        <h4> Copyright 2015 | Alexandros Polichronopoulos | p3110256@dias.aueb.gr | Marios Kamperis |
                            p3110068@dias.aueb.gr </h4>
                        <a href="index.jsp">Info Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
