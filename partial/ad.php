<?php
if ( function_exists( 'is_amp_endpoint' ) &&  is_amp_endpoint() ) :?>
	<amp-ad
		type="adsense"
		data-ad-client="ca-pub-9034724081756314"
		data-ad-slot="1795167726"
		width="300"
		height="200">
	</amp-ad>
<?php else : ?>

<aside class="p-ad" itemtype="https://schema.org/WPAdBlock" itemscope>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9034724081756314" data-ad-slot="1795167726"
	     data-ad-format="auto"></ins>
	<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</aside>

<?php endif ?>
