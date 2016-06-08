<?php
/**
 * Helper Class.
 *
 * @package torounit2015
 */

/**
 * Class Helper
 */

class Helper {
	/**
	 * Get image dir path.
	 *
	 * @param string $path image file name.
	 *
	 * @return string
	 */
	static public function get_image_uri( $path = '' ) {
		$theme       = get_template_directory_uri();
		$image_dir    = 'assets/dist/images';

		return ( $path ) ? $theme . '/' . $image_dir . '/' . $path : $theme . '/' . $image_dir;
	}
}
