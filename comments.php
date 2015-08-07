<?php
if ( post_password_required() ) {
	return;
}
?>

<div class="p-commentArea">

	<?php if ( have_comments() ) : ?>

		<h4 class="p-commentArea__title"><?= get_comments_number(); ?> コメント</h4>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
			<nav class="p-commentArea__nav" role="navigation">
				<div class="p-commentArea__navPrev"><?php previous_comments_link( '&larr; Older Comments' ); ?></div>
				<div class="p-commentArea__navNext"><?php next_comments_link( 'Newer Comments &rarr;' ); ?></div>
			</nav>
		<?php endif; // Check for comment navigation. ?>

		<ol class="p-commentList">
			<?php
			wp_list_comments( array(
				'style'       => 'ol',
				'short_ping'  => true,
				'avatar_size' => 34,
			) );
			?>
		</ol><!-- .comment-list -->

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
			<nav class="p-commentArea__nav" role="navigation">
				<div class="p-commentArea__navPrev"><?php previous_comments_link( '&larr; Older Comments' ); ?></div>
				<div class="p-commentArea__navNext"><?php next_comments_link( 'Newer Comments &rarr;' ); ?></div>
			</nav>
		<?php endif; // Check for comment navigation. ?>


	<?php endif; // have_comments() ?>

	<?php comment_form(); ?>

</div><!-- #comments -->
