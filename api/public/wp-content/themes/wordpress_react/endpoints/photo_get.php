<?php

add_action('rest_api_init', 'add_thumbnail_to_JSON');
function add_thumbnail_to_JSON()
{
    //Add featured image
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'featured_image_src', // Name of new field (You can call this anything)
        [
            'get_callback' => 'get_image_src',
            'update_callback' => null,
            'schema' => null,
        ]
    );
}

function get_image_src($object, $field_name, $request)
{
    $feat_img_array = wp_get_attachment_image_src(
        $object['featured_media'], // Image attachment ID
        'thumbnail', // Size.  Ex. "thumbnail", "large", "full", etc..
        true // Whether the image should be treated as an icon.
    );
    return $feat_img_array[0];
}

?>
