<?php
/**
 * Assets Class.
 *
 * @package torounit2015
 */

/**
 * Class Assets
 */
class Assets {

	/** @var string  */
	private $css_path;
	/** @var string  */
	private $script_path;
	/** @var string  */
	private $theme_version;

	/**
	 * Assets constructor.
	 */
	public function __construct() {
		$theme = wp_get_theme();
		$this->theme_version = $theme->get( 'Version' );

		$this->css_path = ( WP_DEBUG ) ? '/assets/dist/styles/all.css' : '/assets/dist/styles/all.min.css';
		$this->script_path = ( WP_DEBUG ) ? '/assets/dist/scripts/all.js' : '/assets/dist/scripts/all.min.js';

		if ( ! is_admin() ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ] );
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		}

		add_editor_style( $this->css_path );
	}


	/**
	 * Add Css.
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'dashicons' );
		wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
		wp_enqueue_style( 'roboto', '//fonts.googleapis.com/css?family=Roboto:400,300' );
		wp_enqueue_style( 'all', get_template_directory_uri() . $this->css_path, [], $this->theme_version );
	}

	/**
	 * Add Js.
	 */
	public function enqueue_scripts() {
		wp_deregister_script( 'jquery' );
		wp_register_script( 'jquery', 'https://code.jquery.com/jquery-2.2.0.min.js', [], '2.2.0', true );
		wp_enqueue_script( 'all', get_template_directory_uri() . $this->script_path, [ 'jquery' ], $this->theme_version , true );
	}
}
