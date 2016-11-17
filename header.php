<?php
/**
 * Header
 *
 * @package torounit2015
 */

?>
<!DOCTYPE html>
<html lang="ja" itemscope <?php if ( ! is_search() ) :  ?>itemtype="http://schema.org/WebPage"
	  <?php else : ?>itemtype="http://schema.org/SearchResultsPage"<?php endif; ?>>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,  minimum-scale=1.0, user-scalable=yes">
	<meta name="twitter:widgets:csp" content="on">
	<meta http-equiv="x-dns-prefetch-control" content="on">
	<link rel="dns-prefetch" href="//a.disquscdn.com">
	<link rel="dns-prefetch" href="//apis.google.com">
	<link rel="dns-prefetch" href="//pagead2.googlesyndication.com">
	<link rel="dns-prefetch" href="//www.google-analytics.com">
	<link rel="dns-prefetch" href="//s.gravatar.com">
	<link rel="dns-prefetch" href="//www.facebook.com">
	<link rel="dns-prefetch" href="//platform.twitter.com">
	<link rel="dns-prefetch" href="//cdn-ak.b.st-hatena.com">
	<link rel="start" title="<?php bloginfo( 'name' ); ?>" href="<?php bloginfo( 'url' ); ?>">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>

</head>
<body>

<div class="l-viewport">
	<div class="l-row">
		<div class="c-card">

			<div class="c-card__body">
				<div class="l-navbar">
					<ul class="p-nav">
						<li class="p-nav__item"><a href="#" class="js-btn" data-slidemenu-target=".js-search" title="search"><i
									class="fa fa-search fa-lg"></i></a></li>
						<li class="p-nav__item"><a href="#" class="js-btn" data-slidemenu-target=".js-menu" title="menu"><i
									class="fa fa-bars fa-lg"></i></a></li>
					</ul>
				</div>

				<div class="js-search c-slidemenu">
					<div class="p-search">
						<form action="/" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
							<meta itemprop="target" content="http://www.torounit.com/?s={s}">
							<input type="search" id="s" name="s" value="" class="p-search__input" placeholder="Search..."
							       itemprop="query-input">
						</form>
					</div>
				</div>

				<div class="js-menu c-slidemenu">
					<nav class="p-menu" itemscope itemtype="http://schema.org/SiteNavigationElement">
						<ul class="p-menu__items">
							<?php wp_list_pages( 'title_li=' ); ?>
						</ul>
					</nav>
				</div>

				<header class="l-WPHeader" itemscope itemtype="http://schema.org/WPHeader">
					<h1 class="l-WPHeader__title"><a href="/" itemprop="name"><img
								src="<?php echo esc_url( Helper::get_image_uri( 'torounit2016.svg' ) ); ?>" alt="Toro_Unit"></a></h1>
				</header>

			</div>




		</div>
	</div>
	<div class="l-row">
		<?php if( is_front_page() ): ?>
		<div class="c-card">
		<?php endif;?>

