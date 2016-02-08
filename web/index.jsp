<%--
  Created by IntelliJ IDEA.
  User: a.polichronopoulos
  Date: 02-Feb-16
  Time: 22:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Video 1</title>
    <!--// Stylesheets //-->
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link href="css/ddsmoothmenu.css" rel="stylesheet" type="text/css"/>
    <link href="css/scrollbar.css" rel="stylesheet" type="text/css"/>
    <!--// Javascript //-->
    <script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
<span class="biglines">&nbsp;</span>
<!-- Wrapper -->
<div id="wrapper_sec">
    <!-- Top Section -->
    <div class="top_sec">

    </div>
    <div class="clear"></div>
    <!-- Header -->
    <div id="masthead">

        <!-- Navigation -->
        <div class="navigation">
            <div id="smoothmenu1" class="ddsmoothmenu">
                <ul>
                    <li><a href="index.html" class="staticlinks">Stream a WebTorrent</a></li>
                    <li><a href="upload.html" class="staticlinks">Upload a Torrent</a></li>
                    <li><a href="streamTorrent.html" class="staticlinks">Stream a Torrent</a></li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        <!-- Search -->
        <div class="search">
            <a class="go" id="start_streaming">&nbsp;</a>
            <a class="hintClass">
                <input class="bar" type="text" value="Enter a Magnet link" id="searchBox" name="magnet_value" />
                <%--<div> show only when you over</div>--%>
            </a>
        </div>
    </div>
    <div class="clear"></div>
    <!-- Banner -->
    <div id="banner">
        <div id="slider2" class="leftsecbanner">
            <div class="contentdiv">
                <%--<object type="application/x-shockwave-flash" style="width:660px; height:348px;"--%>
                <%--data="http://www.youtube.com/v/yd8jh9QYfEs?fs=1&amp;hl=en_US&amp;rel=0">--%>
                <%--<param name="movie" value="http://www.youtube.com/v/yd8jh9QYfEs?fs=1&amp;hl=en_US&amp;rel=0"/>--%>
                <%--<param value="application/x-shockwave-flash" name="type"/>--%>
                <%--<param value="true" name="allowfullscreen"/>--%>
                <%--<param value="always" name="allowscriptaccess"/>--%>
                <%--<param value="opaque" name="wmode"/>--%>
                <%--</object>--%>
            </div>
        </div>
    </div>
    <div class="clear"></div>
</div>
<div class="clear"></div>
<div id="copyrights">
    <div class="inner">
        <p>Created by Alex Polycronopoulos & Kamperis Marios.</p>

    </div>
</div>
</body>
<script>

    $(document).ready(function () {
        $('')

    });
</script>
</html>
