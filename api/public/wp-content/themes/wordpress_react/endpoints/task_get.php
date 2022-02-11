<?php

function post_data($post)
{
    $post_meta = get_post_meta($post->ID);
    $user = get_userdata($post->post_author);

    //função de get de attachment ou fotos
    // $src = wp_get_attachment_image_src($post_meta['img'][0], 'large'[0])

    return [
        'id' => $post->ID,
        'author' => $user->user_login,
        'title' => $post->post_title,
        // 'content'=> $post->post_content,
    ];
}

function api_task_get($request)
{
    $post_id = $request['id'];
    $post = get_post($post_id);

    if (!isset($post) || empty($post_id)) {
        $response = new WP_Error(
            'error',
            'Post has not been found or does not exist',
            ['status' => 401]
        );
        return rest_ensure_response($response);
    }

    $get_post_info = post_data($post);

    return rest_ensure_response($get_post_info);
}

function register_api_task_get()
{
    register_rest_route('api', '/task/(?P<id>[0-9]+)', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'api_task_get',
    ]);
}

add_action('rest_api_init', 'register_api_task_get');

function api_tasks_get($request)
{
    $post_args = [
        'post_type' => 'post',
        'author' => 0,
    ];

    //função principal de busca do wordpress, query resulta em todas as querys enquanto post só retorna os posts do site.
    $query = new WP_Query($post_args);
    $posts = $query->posts;

    // if com for each para selecionar todos os parâmetros que quero de cada post, a primeira função criada (post_data) seleciona os argumentos que necessito.
    $all_posts = [];

    if ($posts) {
        foreach ($posts as $post) {
            $all_posts[] = post_data($post);
        }
    }

    return rest_ensure_response($all_posts);
}

function register_api_tasks_get()
{
    register_rest_route('api', '/task', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'api_tasks_get',
    ]);
}

add_action('rest_api_init', 'register_api_tasks_get');

?>
