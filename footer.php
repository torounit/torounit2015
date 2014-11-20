    <footer class="l-WPFooter l-row" itemtype="http://schema.org/WPFooter">

        <aside class="p-profile c-media" itemprop="creator" itemscope itemtype="http://schema.org/Person">
            <div class="c-media__image">
                <?php echo get_avatar( get_the_author_meta('user_email'), 150 );?>
            </div>
            <div class="c-media__body">
                <h3 class="p-profile__title c-media__heading">Toro_Unit</h3>
                <p><span itemprop="jobTitle">Web Designer</span> / <span itemprop="jobTitle">Front-end Engineer</span> / <span itemprop="jobTitle">WordPress Plugin Developer</span>.</p>

                <p class="p-socialProfile">
                <a href="http://twitter.com/Toro_Unit" itemprop="url">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="http://fb.me/torounit" itemprop="url">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="http://github.com/torounit" itemprop="url">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
                    </span>
                </a></p>

            </div>
        </aside>

        <p class="u-text-right"><small>Copyright &copy; <span itemprop="copyrightHolder">Toro_Unit</span> all rights reserved.</small></p>
    </footer>
</div>
    <?php wp_footer();?>
</body>
</html>