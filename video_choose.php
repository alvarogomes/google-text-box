<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="js/upload_helper.js"></script>
	<title></title>
    <script type="text/javascript">
        $(document).ready(function(){
            $('a#choose').click(function(){
                video = {id:<?php echo rand(1,10000);?>,file:'images/photo1.jpg',title:'test video 1',description:'video1 description'}
                add_video_helper(video);
            });
            $('a#choose2').click(function(){
                 video = {id:<?php echo rand(1,10000);?>,file:'images/photo2.jpg',title:'test video 2',description:'video2 description'}
                 add_video_helper(video);
            });
			$('a#close').click(function(){
				close_dom_window();
			});
        });
    </script>
</head>
<body>
    <div style="width:650px;margin:0 auto;text-align:center;">
        <a id="choose" href="javascript:void(0)">Click Here To Choose Video A Fakely</a>
        <br/>
        <a id="choose2" href="javascript:void(0)">Click Here To Choose Video B Fakely</a>
        <br/>
        <a id="close" href="javascript:void(0)">Close</a>
    </div>
</body>
</html>