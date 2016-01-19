<?php get_header(); ?>
	<div class="l-row l-row_content">
		<main class="l-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">

			<section class="c-card">
				<div class="c-card__body">
					<h1 class="u-text-center"><a class="u-text-large u-text-color-inherit" href="#"><span class="dashicons dashicons-lightbulb"></span> Works</a></h1>
					<p>Toro_Unitは、ウェブサイト制作・WEBデザイン・システム開発を行う個人事務所です。HTML/CSS等のフロントエンド開発・ WordPress を用いたWEBサイトが得意です。</p>
					<p>また、WordPress テーマ・プラグインの開発、コードレビュー、レクチャー、イベント登壇なども行っています。</p>
					<p class="u-text-center"><a href="/contact" class="c-btn c-btn_primary">Contact <i class="fa fa-angle-right"></i></a></p>
				</div>

			</section>


			<section class="c-card">
				<div class="c-card__body">
					<h1 class="u-text-center"><a class="u-text-large u-text-color-inherit" href="#"><span class="dashicons dashicons-admin-tools"></span> Own Services</a></h1>
					<div class="l-grid">
						<div class="l-grid__u l-grid__u_medium_1of3">

							<h3>
								<div class="u-text-center">
									<span class="fa-stack fa-lg fa-3x">
										<i class="fa fa-circle fa-stack-2x u-text-primary"></i>
										<i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
									</span>
								</div>
								<div>WEBサイト制作</div>
							</h3>
							<p>WordPressやOSSを用いた、使いやすいWEBサイトを制作します。</p>
						</div>
						<div class="l-grid__u l-grid__u_medium_1of3">

							<h3>
								<div  class="u-text-center">
									<span class="fa-stack fa-lg fa-3x">
										<i class="fa fa-circle fa-stack-2x u-text-primary"></i>
										<i class="fa fa-paint-brush fa-stack-1x fa-inverse"></i>
									</span>
								</div>
								<div>WEBデザイン・フロントエンド開発</div>
							</h3>
							<p>WEBデザイン・及びHTML/CSSフロントエンドの開発、レスポンシブウェブデザインなどをご提案します。</p>

						</div>
						<div class="l-grid__u l-grid__u_medium_1of3">

							<h3>
								<div class="u-text-center">
								<span class="fa-stack fa-lg fa-3x">
									<i class="fa fa-circle fa-stack-2x u-text-primary"></i>
									<i class="fa fa-wordpress fa-stack-1x fa-inverse"></i>
								</span>
								</div>
								<div>WordPress プラグイン・テーマ開発</div>
							</h3>
							<p>WordPressの公式ディレクトリ掲載プラグイン作者、コア貢献者の経験を生かした、プラグイン・テーマの制作をいたします。</p>
						</div>
					</div>

				</div>

			</section>

			<section class="c-card">
				<div class="c-card__body">
					<h1 class="u-text-center"><a class="u-text-large u-text-color-inherit" href="<?php echo home_url("/blog");?>"><span class="dashicons dashicons-admin-post"></span> Blog</a></h1>
					<ul class="p-postList" itemscope itemtype="http://schema.org/Blog">
						<?php
						$blog = new WP_Query( [ "posts_per_page" => 10 ] );
						while ( $blog->have_posts() ):
							$blog->the_post();
							?>
							<li class="p-postList__item" itemprop="blogPost" itemscope
							    itemtype="http://schema.org/BlogPosting">
								<time class="p-postList__pubdate"
								      itemprop="datePublished"><?php the_time( "Y.m.d" ); ?></time>
								<a href="<?php the_permalink(); ?>" itemprop="headline"><?php the_title(); ?></a></li>
							<?php
						endwhile; ?>
					</ul>

					<nav class="p-pageNav">
						<a href="<?php echo home_url("/blog/page/2");?>">
						<span class="p-pageNav__next"><span class="fa-stack fa-lg">
						  <i class="fa fa fa-circle-thin fa-stack-2x"></i>
						  <i class="fa fa-angle-right fa-stack-1x"></i>
						</span></span>
						</a>

					</nav>

				</div>

			</section>

			<section class="c-card">
				<div class="c-card__body">
					<h1 class="u-text-center"><a class="u-text-large u-text-color-inherit" href="<?php echo home_url("/plugins");?>"><span class="dashicons dashicons-admin-plugins"></span> Plugins</a></h1>

					<div class="l-grid">
						<?php
						$plugin_page = get_page_by_path( "plugins" );
						$pageID      = $plugin_page ? $plugin_page->ID : 0;
						$plugins     = new WP_Query( [
							"post_parent" => $pageID,
							"post_type" => "page",
							"orderby" => "menu_order",
							"order"	=> "ASC"
						] );
						while ( $plugins->have_posts() ):
							$plugins->the_post();
							?>
							<div class="l-grid__u l-grid__u_1fo1 l-grid__u_small_1of2">
								<section class="p-plugin"  itemscope
								         itemtype="http://schema.org/SoftwareApplication">
									<a href="<?php the_permalink(); ?>">
										<?php if ( has_post_thumbnail() ): ?>
											<?php the_post_thumbnail(); ?>
										<?php else: ?>
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
				</div>

			</section>

		</main>
	</div>


<?php get_footer(); ?>