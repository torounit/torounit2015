<?php
/**
 * Page.php
 *
 * @package torounit2015
 */

get_header();?>

<main itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">
	<?php if ( have_posts() ) :the_post();?>

		<article <?php post_class( 'p-article' );?>  itemscope itemtype="http://schema.org/Article">
			<header class="p-article__header">
				<h1 class="p-article__title" itemprop="headline"><a href="<?php the_permalink();?>"><?php the_title();?></a></h1>
			</header>

			<div class="content p-article__body" itemprop="articleBody">
				<?php
				if ( has_post_thumbnail() ) {
					the_post_thumbnail( 'post-thumbnail', [ 'itemprop' => 'image', 'class' => 'p-article__thumbnail' ] );
				} ?>
				<?php the_content();?>
				<div class="p-article__pagenav"><?php wp_link_pages();?></div>
			</div>

			<?php if ( comments_open() ) :?>
				<div class="p-article__comment" itemscope itemprop="comment" itemtype="http://schema.org/UserComments">
					<?php comments_template();?>
				</div>
			<?php endif;?>

		</article>
	<?php endif;?>


</main>


<?php get_footer();?>
