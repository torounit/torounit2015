<?php get_header();?>
	<div class="l-row l-row_content">
		<main class="l-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">
			<?php if(have_posts()):the_post();?>

				<article <?php post_class("p-article c-card");?>  itemscope itemtype="http://schema.org/Article">
					<header class="p-article__header">
						<h1 class="p-article__title" itemprop="headline"><a href="<?php the_permalink();?>"><?php the_title();?></a></h1>
					</header>


					<div class="content p-article__body" itemprop="articleBody">
						<?php if(has_post_thumbnail()){the_post_thumbnail();}?>
						<?php the_content();?>
						<div class="p-article__pagenav"><?php wp_link_pages();?></div>
					</div>

					<?php get_template_part("partial/ad");?>
					<?php get_template_part("partial/bookmarks");?>

					<?php if( comments_open() ) :?>
					<div class="p-article__comment" itemscope itemprop="comment" itemtype="http://schema.org/UserComments">
						<?php comments_template();?>
					</div>
					<?php endif;?>
				</article>
			<?php endif;?>
			</div>

		</main>
	</div>

<?php get_footer();?>