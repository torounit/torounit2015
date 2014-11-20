<?php get_header();?>
    <div class="l-row l-row_content">
        <main class="l-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage">

            <section class="c-card">
                <h1 class="u-text-center"><span class="dashicons dashicons-admin-post"></span> Blog</h1>
                <ul class="p-postList" itemscope itemtype="http://schema.org/Blog">
                    <?php
                    $blog = new WP_Query(["posts_per_page"=>10]);
                    while ($blog->have_posts()):
                        $blog->the_post();
                        ?>
                            <li class="p-postList__item" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting"><time class="p-postList__pubdate" itemprop="datePublished"><?php the_time("Y.m.d");?></time><a href="<?php the_permalink();?>" itemprop="headline"><?php the_title();?></a></li>
                        <?php
                    endwhile;?>
                </ul>

            </section>

            <section class="c-card">
                <h1 class="u-text-center"><span class="dashicons dashicons-admin-plugins"></span> Plugins</h1>
                <div class="l-grid">
                    <?php
                    $plugin_page = get_page_by_path("plugins");
                    $plugins = new WP_Query(["post_parent" => $plugin_page->ID,"post_type" => "page"]);
                    while ($plugins->have_posts()):
                        $plugins->the_post();
                    ?>
                    <div class="l-grid__u l-grid__u_small-12 l-grid__u_medium-6">
                        <section class="p-plugin">
                            <a href="<?php the_permalink();?>">
                                <?php if(has_post_thumbnail()):?>
                                    <?php the_post_thumbnail();?>
                                <?php else:?>
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" width="772" height="250">
                                <?php endif;?>
                                <h1 class="p-plugin__title"><?php the_title();?></h1>
                            </a>
                        </section>
                    </div>
                        <?php
                    endwhile;?>
                </div>
            </section>
        </main>
    </div>


<?php get_footer();?>