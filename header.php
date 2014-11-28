<!DOCTYPE html>
<html lang="ja" itemscope <?php if(!is_search()):?>itemtype="http://schema.org/WebPage"<?php else:?>itemtype="http://schema.org/SearchResultsPage"<?php endif;?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,  minimum-scale=1.0, user-scalable=yes">
    <title><?php Helper::title();bloginfo('name');?></title>
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <link rel="dns-prefetch" href="//cdn.api.twitter.com/">
    <link rel="dns-prefetch" href="//platform.twitter.com/">
    <link rel="dns-prefetch" href="//connect.facebook.net/">
    <link rel="dns-prefetch" href="//www.facebook.com/">
    <link rel="dns-prefetch" href="//apis.google.com/">
    <link rel="dns-prefetch" href="//mediacdn.disqus.com/">
    <link rel="dns-prefetch" href="//b.st-hatena.com/">
    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>">
    <link rel="start" title="<?php bloginfo('name');?>"  href="<?php bloginfo('url');?>">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="shortcut icon" href="<?php bloginfo("stylesheet_directory");?>/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="icon" href="<?php bloginfo("stylesheet_directory");?>/favicon.ico" type="image/vnd.microsoft.icon" />
    <?php wp_head();?>

</head>
<body>
<?php if(!is_user_logged_in()){ ?>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-18819722-1', 'torounit.com');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
    </script>
<?php }?>
<div class="l-viewport">
    <header class="l-WPHeader" itemscope itemtype="http://schema.org/WPHeader">
        <div class="l-row l-row_tightly">
            <div class="l-WPHeader__nav">
                <ul class="p-nav">
                    <li class="p-nav__item"><a href="#" class="js-btn" data-slidemenu-target=".js-search"><i class="fa fa-search"></i></a></li>
                    <li class="p-nav__item"><a href="#" class="js-btn" data-slidemenu-target=".js-menu"><i class="fa fa-bars"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="p-search js-search l-row u-hidden">
            <form action="/" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
                <meta itemprop="target" content="http://www.torounit.com/?s={s}">
                <input type="search" id="s" name="s" value="" class="p-search__input" placeholder="Search..." itemprop="query-input">
            </form>
        </div>


        <nav class="p-menu js-menu u-hidden" itemscope itemtype="SiteNavigationElement">
            <div class="l-row l-row_tightly">
                <ul class="p-menu__items">
                    <?php wp_list_pages('title_li='); ?>
                </ul>
            </div>
        </nav>


        <div class="l-row">
            <h1 class="l-WPHeader__title"><a href="/" itemprop="name"><img src="<?=Helper::getImageURI("torounit.svg");?>" alt="Toro_Unit"></a></h1>
        </div>
    </header>

    <div class="">
        <div class="p-breadcrumbs l-row" itemprop="breadcrumb">
            <?php if ( function_exists( 'bread_crumb' ) ) bread_crumb( ["type" => "string", "home_label" => '<i class="fa fa-home"></i>'] ); ?>
        </div>
    </div>