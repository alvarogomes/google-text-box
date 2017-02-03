<?php
	$persons = array(
		0 => array(
			'id' => 1,
			'name' => 'David Wang',
			'group' => 'Friends',
			'avatar' => 'avatar.jpg',
			'groupicon' => 'icon-object.png'
		),
		1 => array(
			'id' => 2,
			'name' => 'Sam',
			'group' => 'People You May Know',
			'avatar' => 'avatar.jpg',
			'groupicon' => 'icon-object.png'
		),
		2 => array(
			'id' => 3,
			'name' => 'William Wang',
			'group' => 'Technique',
			'avatar' => 'avatar.jpg',
			'groupicon' => 'icon-object.png'
		),
		3 => array(
			'id' => 4,
			'name' => 'Jason',
			'group' => 'Your Follows',
			'avatar' => 'avatar.jpg',
			'groupicon' => 'icon-object.png'
		),
		4 => array(
			'id' => 5,
			'name' => 'Dean',
			'group' => 'Sports',
			'avatar' => 'avatar.jpg',
			'groupicon' => 'icon-object.png'
		)
	);
	
	echo json_encode($persons);
	exit;