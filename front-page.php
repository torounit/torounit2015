<?php
/**
 * Front-Page
 *
 * @package torounit2015
 */

get_header(); ?>

<main class="l-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">
	<?php if ( have_posts() ) : the_post(); ?>
		<?php the_content();?>
	<?php endif;?>

</main>

<?php get_footer(); ?>
