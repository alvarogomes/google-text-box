<?php
	$link = array(
		'title' => 'Baidu',
		'icon' => 'baidu.png',
		'logo' => 'baidu-logo.gif',
		'link' => $_POST['url'],
		'desctiption' => 'www.baidu.com description'
	);
	echo json_encode($link);
	exit;
