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
