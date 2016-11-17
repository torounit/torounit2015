<?php
/**
 * Single.php
 *
 * @package torounit2015
 */

get_header(); ?>
			<div class="c-card__body">

				<nav class="p-breadcrumbs" itemprop="breadcrumb">
					<?php if ( function_exists( 'bread_crumb' ) ) {
						bread_crumb( [ 'type' => 'string', 'home_label' => '<i class="fa fa-home"></i>' ] );
					} ?>
				</nav>

			</div>
			<div class="c-card__body">
				<main itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">
					<div itemscope itemtype="http://schema.org/Blog">

						<?php if ( have_posts() ) : the_post(); ?>
							<article <?php post_class( 'p-article' ); ?> itemprop="blogPost" itemscope
							                                             itemtype="http://schema.org/BlogPosting">

								<header class="p-article__header">
									<?php if ( is_single() ) : ?>
										<p class="p-article__pubDate"><i class="fa fa-clock-o"></i>
											<time datetime="<?php the_time( 'Y-m-d' ); ?>" itemprop="datePublished"
											      content="<?php the_time( 'Y-m-d' ); ?>">
												<?php echo esc_attr( date( 'F d, Y', get_the_time( 'U' ) ) ); ?>
											</time>
										</p>
									<?php endif; ?>

									<h1 class="p-article__title" itemprop="headline">
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h1>

									<p class="u-text-center" itemprop="keywords">
										<span
											class="p-article__terms p-article__terms_category"><?php the_category( ' ' ); ?></span>
										<?php if ( has_tag() ) : ?>
											<span class="p-article__terms"><?php the_tags( '', ' ', '' ); ?></span>
										<?php endif; ?>
									</p>
								</header>

								<div class="content p-article__body" itemprop="articleBody">
									<?php if ( has_post_thumbnail() ) {
										the_post_thumbnail( 'post-thumbnail', [ 'itemprop' => 'image', 'class' => 'p-article__thumbnail' ] );
									} ?>
									
									<div>
										<ins id="adsbygoogle-before-content" style="display: none;" class="adsbygoogle-placeholder"></ins>	
									</div>
									
									<?php the_content(); ?>
									<div class="p-article__pagenav"><?php wp_link_pages(); ?></div>
									
									<div>
										<ins id="adsbygoogle-after-content" style="display: none;" class="adsbygoogle-placeholder"></ins>
									</div>
									
								</div>

								<?php if ( comments_open() ) : ?>
									<div class="p-article__comment" itemscope itemprop="comment"
									     itemtype="http://schema.org/UserComments">
										<?php comments_template(); ?>
									</div>
								<?php endif; ?>

							</article>
						<?php endif; ?>


					</div>

				</main>

			</div>


<?php get_footer(); ?>
