<?php

Class Helper {

	static public function title( $paged = true ) {

		if ( is_category() ) {
			echo "Category : ";
		}
		if ( is_tag() ) {
			echo "Tag : ";
		}
		wp_title( '', true, 'right' );

		if ( $paged = true && $page_num = get_query_var( 'paged' ) ) {
			echo " - Page " . $page_num;
		}
		if ( ! is_front_page() ) {
			echo ' | ';
		}
	}

	static public function getImageURI( $path = "" ) {
		$theme       = get_template_directory_uri();
		$imageDir    = ( WP_DEBUG ) ? "assets/src/images" : "assets/dist/images";
		$imageDirURI = $theme . "/" . $imageDir;

		return ( $path ) ? $theme . "/" . $imageDir . "/" . $path : $theme . "/" . $imageDir;
	}
}
