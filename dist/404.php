<?php get_header();?>
	<div class="l-row l-row_content">
		<main class="l-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">

				<article class="p-article c-card">
					<header class="p-article__header">
						<h1 class="p-article__title"><a href="<?php the_permalink();?>">404 Not Found.</a></h1>
					</header>

					<div class="content p-article__body">

						<div class="p-search">
							<form action="/" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
								<meta itemprop="target" content="http://www.torounit.com/?s={s}">
								<input type="search" id="s" name="s" value="" class="p-search__input" placeholder="Search..." itemprop="query-input">
							</form>
						</div>

					</div>

					<?php get_template_part("partial/ad");?>

				</article>

			</div>

		</main>
	</div>

<?php get_footer();?>