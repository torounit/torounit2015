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

	<ins id="adsbygoogle-before-blog" style="display: none;" class="adsbygoogle-placeholder"></ins>

	<div class="c-card">
		<section class="c-card__body">
			<h1 class="u-text-center"><a class="u-text-large u-text-color-inherit" href="<?php echo esc_url( home_url( '/blog' ) );?>"><span class="dashicons dashicons-admin-post"></span> Blog</a></h1>
			<ul class="p-postList">
				<?php
				$blog = new WP_Query( [ 'posts_per_page' => 10 ] );
				while ( $blog->have_posts() ) :
					$blog->the_post();
					?>
					<li class="p-postList__item" itemscope
					    itemtype="http://schema.org/Article">
						<time class="p-postList__pubdate"
						      itemprop="datePublished" content="<?php the_time( 'c' ); ?>"><?php the_time( 'Y.m.d' ); ?></time>
						<meta itemprop="dateModified" content="<?php the_modified_date( 'c' );?>">
						<a href="<?php the_permalink(); ?>"><span itemprop="headline"><?php the_title(); ?></span></a></li>
					<?php
				endwhile; ?>
			</ul>

			<nav class="p-pageNav">
				<a href="<?php echo esc_url( home_url( '/blog/page/2' ) );?>">
				<span class="p-pageNav__next"><span class="fa-stack fa-lg">
				  <i class="fa fa fa-circle-thin fa-stack-2x"></i>
				  <i class="fa fa-angle-right fa-stack-1x"></i>
				</span></span>
				</a>

			</nav>

		</section>

	</div>

	<ins id="adsbygoogle-before-plugin" style="display: none;" class="adsbygoogle-placeholder"></ins>

	<div class="c-card">
		<section class="c-card__body">
			<h1 class="u-text-center"><a class="u-text-large u-text-color-inherit" href="<?php echo esc_url( home_url( '/plugins' ) );?>"><span class="dashicons dashicons-admin-plugins"></span> Plugins</a></h1>

			<div class="l-grid">
				<?php
				$plugin_page = get_page_by_path( 'plugins' );
				$page_id      = $plugin_page ? $plugin_page->ID : 0;
				$plugins     = new WP_Query( [
					'post_parent' => $page_id,
					'post_type' => 'page',
					'orderby' => 'menu_order',
					'order'	=> 'ASC',
				] );
				while ( $plugins->have_posts() ) :
					$plugins->the_post();
					?>
					<div class="l-grid__u l-grid__u_1fo1 l-grid__u_small_1of2">
						<section class="p-plugin"  itemscope
						         itemtype="http://schema.org/CreativeWork">
							<a href="<?php the_permalink(); ?>" itemprop="url">
								<?php if ( has_post_thumbnail() ) :  ?>
									<?php the_post_thumbnail(); ?>
								<?php else : ?>
									<img
										src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
										alt="" width="772" height="250">
								<?php endif; ?>
								<h1 class="p-plugin__title" itemprop="name"><?php the_title(); ?></h1>
							</a>
						</section>
					</div>
					<?php
				endwhile; ?>
			</div>
		</section>

	</div>

	<ins id="adsbygoogle-after-plugin" style="display: none;" class="adsbygoogle-placeholder"></ins>
</main>

<?php get_footer(); ?>
