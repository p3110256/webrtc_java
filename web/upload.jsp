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
        <!-- Logo -->
        <div class="logo">
            <a href="index.html"><img src="images/logo.png" alt=""/></a>
        </div>
        <!-- Navigation -->
        <div class="navigation">
            <div id="smoothmenu1" class="ddsmoothmenu">
                <ul>
                    <li><a href="index.html" class="staticlinks">Home</a></li>
                    <li><a href="listing.html" class="staticlinks">Videos</a></li>
                    <li><a href="news.html" class="staticlinks">News</a></li>
                    <li><a href="blog.html">Blog</a>
                        <ul>
                            <li><a href="blog_post.html">Blog Post</a></li>
                        </ul>
                    </li>
                    <li><a href="#">All Pages</a>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="listing.html">Listing</a></li>
                            <li><a href="detail.html">Video Detail</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog_post.html">Blog Post</a></li>
                            <li><a href="news.html">News</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="static.html">About Us</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        <!-- Search -->
        <div class="search">
            <input type="text" value="Enter keyword to search" id="searchBox" name="s"
                   onblur="if(this.value == '') { this.value = 'Enter keyword to search'; }"
                   onfocus="if(this.value == 'Enter keyword to search') { this.value = ''; }" class="bar"/>
            <a href="#" class="go">&nbsp;</a>
        </div>
    </div>
    <div class="clear"></div>
    <!-- Banner -->
    <div id="banner">
        <div id="slider2" class="leftsecbanner">
            <div class="contentdiv">
                <object type="application/x-shockwave-flash" style="width:660px; height:348px;"
                        data="http://www.youtube.com/v/yd8jh9QYfEs?fs=1&amp;hl=en_US&amp;rel=0">
                    <param name="movie" value="http://www.youtube.com/v/yd8jh9QYfEs?fs=1&amp;hl=en_US&amp;rel=0"/>
                    <param value="application/x-shockwave-flash" name="type"/>
                    <param value="true" name="allowfullscreen"/>
                    <param value="always" name="allowscriptaccess"/>
                    <param value="opaque" name="wmode"/>
                </object>
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
</html>
