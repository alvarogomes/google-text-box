<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="js/upload_helper.js"></script>
	<title></title>
    <script type="text/javascript">
        $(document).ready(function(){
            $('a#upload').click(function(){
                $('#pregress_bar').animate({width:'100%'},2000,function(){
                    video = {id:<?php echo rand(1,10000);?>,file:'images/photo1.jpg',title:'test video 1',description:'video1 description'}
                    add_video_helper(video);
                });
            });
            //$('a#close').click = 
			$('a#close').click(function(){
				close_dom_window();
			});
        });
    </script>
</head>
<body>
    <div style="width:650px;margin:0 auto;text-align:center;">
        <a id="upload" href="javascript:void(0)">Click Here To Do A Fake Upload</a>
        <div id="pregress_bar" style="background-color:#CCC;height:60px;width:0;"></div>
        <a id="close" href="javascript:void(0)">Close</a>
    </div>
</body>
</html>