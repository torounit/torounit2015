<?php

require_once 'src/class-assets.php';
require_once 'src/class-helper.php';
require_once 'src/class-support.php';
require_once 'src/class-image.php';

add_action('after_setup_theme', function(){
	new Support();
	new Assets();
	new Image();

});


add_filter( 'post_class', function ( $classes ) {
	$hentry = array_search( 'hentry', $classes );
	array_splice( $classes, $hentry, 1 );

	return $classes;
} );


add_filter( 'jetpack_open_graph_image_default', function ( $image ) {
	$image = 'http://www.gravatar.com/avatar/' . md5( strtolower( trim( get_option( 'admin_email' ) ) ) ) . '?s=256';

	return $image;
} );
