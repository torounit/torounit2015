<?php get_header();?>
    <div class="l-row l-row_content">
        <main class="l-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">
            <div itemscope itemtype="http://schema.org/Blog">
            <?php if(have_posts()):?>
                <?php while(have_posts()):the_post(); ?>
                    <article <?php post_class("p-article c-card");?> itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">

                        <header class="p-article__header">
                            <?php if(is_single()):?>
                                <p class="p-article__pubDate"><i class="fa fa-clock-o"></i> <time datetime="<?php the_time("Y-m-d");?>" itemprop="datePublished" content="<?php the_time("Y-m-d");?>"><?= date("F d, Y", get_the_time("U"));?></time></p>
                            <?php endif;?>
                            <h1 class="p-article__title" itemprop="headline"><a href="<?php the_permalink();?>"><?php the_title();?></a></h1>
                            <p class="u-text-center" itemprop="keywords"><span class="p-article__terms p-article__terms_category"><?php the_category(" ");?></span> <?php if (has_tag()):?><span class="p-article__terms"><?php the_tags(""," ","");?></span><?php endif;?></p>
                        </header>


                        <div class="content p-article__body" itemprop="articleBody">
                            <?php if(has_post_thumbnail()){the_post_thumbnail();}?>
                            <?php the_content();?>
                            <div class="p-article__pagenav"><?php wp_link_pages();?></div>
                        </div>

                        <div class="p-bookmarks">
                            <div class="p-bookmarks__btn"><a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php the_permalink();?>" data-text="<?php the_title();?> | Toro_Unit" data-via="Toro_Unit" data-lang="ja" data-count="vertical">ツイート</a></div>
                            <div class="p-bookmarks__btn"><div class="fb-like" data-send="false" data-layout="box_count" data-width="70" data-show-faces="false" data-href="<?php the_permalink();?>"></div></div>
                            <div class="p-bookmarks__btn"><div class="g-plusone" data-size="tall" data-href="<?php the_permalink();?>"></div></div>
                            <div class="p-bookmarks__btn"><a href="//b.hatena.ne.jp/entry/<?php the_permalink(); ?>" class="hatena-bookmark-button" data-hatena-bookmark-title="<?php the_title(); ?>" data-hatena-bookmark-layout="vertical-balloon" title="このエントリーをはてなブックマークに追加"><img src="//b.st-hatena.com/images/entry-button/button-only.gif" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a></div>
                        </div>
                        <?php get_template_part("partial/ad");?>

                        <?php if( comments_open() ) :?>
                        <div class="p-article__comment" itemscope itemprop="comment" itemtype="http://schema.org/UserComments">
                            <?php comments_template();?>
                        </div>
                        <?php endif;?>

                    </article>
                <?php endwhile;?>

                <?php if(!is_singular()):?>
                    <nav class="pagenav"><?php posts_nav_link('  ','&laquo; Newer Posts','Older Posts &raquo;'); ?></nav>
                <?php endif;?>

            <?php endif;?>
            </div>

        </main>
    </div>

<?php get_footer();?>