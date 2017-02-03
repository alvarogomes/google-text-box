<?php
	$objects = array(
		0 => array(
			'id' => 2,
			'name' => 'Friends',
			'sum' => 9,
			'icon' => 'icon-object.png'
		),
		1 => array(
			'id' => 7,
			'name' => 'Family',
			'sum' => 15,
			'icon' => 'icon-object.png'
		),
		2 => array(
			'id' => 3,
			'name' => 'People You May Know',
			'sum' => 58,
			'icon' => 'icon-object.png'
		),
		3 => array(
			'id' => 5,
			'name' => 'Your Follows',
			'sum' => 42,
			'icon' => 'icon-object.png'
		),
		4 => array(
			'id' => 13,
			'name' => 'Technique',
			'sum' => 11,
			'icon' => 'icon-object.png'
		),
		5 => array(
			'id' => 22,
			'name' => 'Sports',
			'sum' => 36,
			'icon' => 'icon-object.png'
		),
		6 => array(
			'id' => 21,
			'name' => 'News',
			'sum' => 31,
			'icon' => 'icon-object.png'
		)
	);
	
	echo json_encode($objects);
	exit;