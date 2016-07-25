<?php // The template part for displaying the header of the website ?>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

    <?php // This part includes meta information and functions ?>

    <head>

		<?php // Meta tags, used by search engines and browser tabs ?>
		<?php bnt_meta_title(); ?>
		<?php bnt_meta_description(); ?>

		<?php // Various utilities ?>
    	<meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link rel="profile" href="http://gmpg.org/xfn/11" />

		<?php // Tag for including header files; should always be the last element inside the <head> section ?>
		<?php wp_head(); ?>

    </head>


    <?php // This encompasses the visible part of the website ?>

    <body <?php body_class(); ?>>
      <div class="wrapper" >
		<?php do_action('bnt_body_top'); ?>

		<?php echo satori_option( 'bnt_analytics_code' ); ?>

		<?php bnt_novice_header(); ?>

<!--		<div class="site-wrapper clear"> -->


			<header class="site-header no-fixed-header">
            	<div class="bnt-container">

                	<?php bnt_mobile_menu(); ?>

                    <?php bnt_logo(); ?>

                    <?php bnt_primary_menu(); ?>

										<div class="languages"> <span class="flag-icon flag-icon-gr"></span>
									    <?php
									      $languages = icl_get_languages('skip_missing=0');
									      $pointer = 0;
									      $numLanguages = count($languages);
									      foreach ($languages as $language):
									       $class_name = '';
									       if ($language["language_code"] == 'en') {
									        $lang_pretty_name = 'eng';
									       } else {
									        $lang_pretty_name = 'fr';
									       }
									       if ($language['active'] == 1) {
									        $class_name = 'active';
									       }
									       ?>
									    <a class="<?php echo $class_name; ?>" href="<?php echo $language['url']; ?>"> <img class="img-responsive" src="<?php echo get_stylesheet_directory_uri() ?>/img/<?php echo $language["language_code"] ?>.png" alt=""/></a>
									    <?php if ($pointer++ < ($numLanguages - 1)): ?>
									    <span></span>
									    <?php endif; ?>
									    <?php endforeach; ?>
									    <span clas"eng"></span>
										</div>
                </div>
            </header>


			<!-- .site-header -->

			<?php bnt_post_header(); ?>

        	<div class="site-content">
