<?php

function create_project_post_type()
{
	register_post_type(
		'project',
		array(
			'labels' => array(
				'name' => __('Projects'),
				'singular_name' => __('Project')
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'projects'),
			'show_in_rest' => true,
			'rest_base' => 'projects'
		)
	);
}

function create_testimonial_post_type()
{
	register_post_type(
		'testimonial',
		array(
			'labels' => array(
				'name' => __('Testimonials'),
				'singular_name' => __('Testimonial')
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'testimonials'),
			'show_in_rest' => true,
			'rest_base' => 'testimonials'
		)
	);
}

function create_service_post_type()
{
	register_post_type(
		'service',
		array(
			'labels' => array(
				'name' => __('Services'),
				'singular_name' => __('Service')
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'services'),
			'show_in_rest' => true,
			'rest_base' => 'services'
		)
	);
}

add_action('init', 'create_project_post_type');
add_action('init', 'create_testimonial_post_type');
add_action('init', 'create_service_post_type');

define('WP_POST_REVISIONS', 3);

add_filter('xmlrpc_enabled', '__return_false');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');

