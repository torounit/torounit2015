<?php get_header(); ?>
	<div class="l-row">


		<div class="c-card">
			<div class="c-card__body">
				<nav class="p-breadcrumbs" itemprop="breadcrumb">
					<?php if ( function_exists( 'bread_crumb' ) ) {
						bread_crumb( [ "type" => "string", "home_label" => '<i class="fa fa-home"></i>' ] );
					} ?>
				</nav>
			</div>
			<div class="c-card__body">
				<main  itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">
					<div itemscope itemtype="http://schema.org/Blog">
						<?php if ( have_posts() ): ?>
							<?php while ( have_posts() ):the_post(); ?>
								<article <?php post_class( "p-article" ); ?> itemprop="blogPost" itemscope
								                                             itemtype="http://schema.org/BlogPosting">

									<header class="p-article__header">
										<?php if ( is_single() ): ?>
											<p class="p-article__pubDate"><i class="fa fa-clock-o"></i>
												<time datetime="<?php the_time( "Y-m-d" ); ?>" itemprop="datePublished"
												      content="<?php the_time( "Y-m-d" ); ?>"><?= date( "F d, Y", get_the_time( "U" ) ); ?></time>
											</p>
										<?php endif; ?>
										<h1 class="p-article__title" itemprop="headline"><a
												href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>

										<p class="u-text-center" itemprop="keywords"><span
												class="p-article__terms p-article__terms_category"><?php the_category( " " ); ?></span> <?php if ( has_tag() ): ?>
												<span
													class="p-article__terms"><?php the_tags( "", " ", "" ); ?></span><?php endif; ?>
										</p>
									</header>


									<div class="content p-article__body" itemprop="articleBody">
										<?php if ( has_post_thumbnail() ) {
											the_post_thumbnail();
										} ?>
										<?php the_content(); ?>
										<div class="p-article__pagenav"><?php wp_link_pages(); ?></div>
									</div>


									<?php if ( comments_open() ) : ?>
										<div class="p-article__comment" itemscope itemprop="comment"
										     itemtype="http://schema.org/UserComments">
											<?php comments_template(); ?>
										</div>
									<?php endif; ?>

								</article>
							<?php endwhile; ?>

							<?php if ( ! is_singular() ): ?>
								<nav
									class="pagenav"><?php posts_nav_link( '  ', '&laquo; Newer Posts', 'Older Posts &raquo;' ); ?></nav>
							<?php endif; ?>

						<?php endif; ?>
					</div>

				</main>

			</div>



		</div>
	</div>

<?php get_footer(); ?>