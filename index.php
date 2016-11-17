<?php
/**
 * index
 *
 * @package torounit2015
 */

get_header(); ?>

<main itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">

	<section>
		<h1 class="u-text-center"><span class="dashicons dashicons-admin-post"></span> <?php
			if ( is_category() ) {
				echo 'Category : ';
			}
			if ( is_tag() ) {
				echo 'Tag : ';
			}
			wp_title( '' );
			?></h1>
		<ul class="p-postList" itemscope itemtype="http://schema.org/Blog">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<li class="p-postList__item" itemprop="blogPost" itemscope
				    itemtype="http://schema.org/BlogPosting">
					<time class="p-postList__pubdate"
					      itemprop="datePublished"><?php the_time( 'Y.m.d' ); ?></time>
					<a href="<?php the_permalink(); ?>" itemprop="headline"><?php the_title(); ?></a></li>
				<?php
			endwhile; ?>
		</ul>

		<nav class="p-pageNav">
			<?php posts_nav_link( '  ', '<span class="p-pageNav__prev"><span class="fa-stack fa-lg">
<i class="fa fa fa-circle-thin fa-stack-2x"></i>
<i class="fa fa-angle-left fa-stack-1x"></i>
</span></span>', '<span class="p-pageNav__next"><span class="fa-stack fa-lg">
<i class="fa fa fa-circle-thin fa-stack-2x"></i>
<i class="fa fa-angle-right fa-stack-1x"></i>
</span></span>' ); ?>
		</nav>

	</section>


</main>

<?php get_footer(); ?>
