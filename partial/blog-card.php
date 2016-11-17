<section class="c-card">
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
