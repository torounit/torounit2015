<?php

require_once "src/Assets.php";
require_once "src/Helper.php";
require_once "src/Support.php";
require_once "src/Image.php";

add_action('after_setup_theme', function(){
	new Support();
	new Assets();
	new Image();

});


add_filter( "post_class", function ( $classes ) {
	$hentry = array_search( 'hentry', $classes );
	array_splice( $classes, $hentry, 1 );

	return $classes;
} );


add_filter( 'jetpack_open_graph_image_default', function ( $image ) {
	$image = "http://www.gravatar.com/avatar/" . md5( strtolower( trim( get_option( 'admin_email' ) ) ) ) . "?s=256";

	return $image;
} );


add_filter( 'the_content', function( $html ){
	if( is_singular() ){
		ob_start();
		get_template_part( "partial/ad" );
		$ad = ob_get_contents();
		ob_end_clean();
		$html = $html.$ad;
	}

	return $html;
} );


