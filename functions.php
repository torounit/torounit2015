<?php


add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array(
    'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
) );
add_image_size( "plugin-image", 772, 250, true );


/*
 *  Theme Frontend Setting.
 *  ==============================================================================
 */

add_editor_style("assets/dist/styles/all.min.css");

if ( !is_admin() ) {

    /*
     *  Assets
     *  ----------------------------------------------------
     */

    function enqueue_scripts() {
        wp_enqueue_style('dashicons');
        wp_enqueue_style("font-awesome", "//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
        wp_enqueue_style("roboto", "http://fonts.googleapis.com/css?family=Roboto:400,300");

        if( WP_DEBUG ) {
            wp_enqueue_style("all", get_template_directory_uri() ."/assets/dist/styles/all.css", array('dashicons'));
            wp_enqueue_script( 'all', get_template_directory_uri() ."/assets/dist/scripts/all.js", array("jquery"), '1.0.0', true );
        }
        else {
            wp_enqueue_style("all", get_template_directory_uri() ."/assets/dist/styles/all.min.css");
            wp_enqueue_script( 'all', get_template_directory_uri() ."/assets/dist/scripts/all.min.js", array("jquery"), '1.0.0', true );
        }

        wp_enqueue_script( 'hatena', "//b.st-hatena.com/js/bookmark_button.js", [], null , true );

    }

    add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
}


Class Helper {

    static public function title($paged = true) {

        if(is_category()) {
            echo "Category : ";
        }
        if(is_tag()) {
            echo "Tag : ";
        }
        wp_title('', true, 'right');

        if( $paged = true && $page_num = get_query_var('paged')){
            echo " - Page ".$page_num;
        }
        if(!is_front_page()){
            echo ' | ';
        }
    }

    static public function getImageURI( $path = "" ) {
        $theme = get_template_directory_uri();
        $imageDir = (WP_DEBUG) ? "assets/src/images" : "assets/dist/images" ;
        $imageDirURI = $theme."/".$imageDir;

        return ($path) ? $theme."/".$imageDir."/".$path : $theme."/".$imageDir;
    }
}





add_filter("post_class", function($classes){
    $hentry = array_search('hentry',$classes);
    array_splice($classes,$hentry,1);
    return $classes;
});


add_filter( 'jetpack_open_graph_image_default', function( $image ) {
    $image = "http://www.gravatar.com/avatar/".md5( strtolower( trim( get_option('admin_email') )))."?s=256";
    return $image;
} );


