<?php

function api_task_post($request)
{
    $user = wp_get_current_user();
    $user_id = $user->ID;

    //verifica se usuário está logado
    if ($user_id === 0) {
        $response = new WP_Error(
            'error',
            'User does not have permission, please log in',
            ['status' => 401]
        );
        return rest_ensure_response($response);
    }

    // criação de variável que tem de ter o request igual ao body do post.
    $title = sanitize_text_field($request['title']);
    // $task = sanitize_text_field($request['task']);

    if (empty($title)) {
        $response = new WP_Error('error', 'Please, fill all the fields', [
            'status' => 422,
        ]);
        return rest_ensure_response($response);
    }

    // argumentos que devem ser inseridos no post para serem passados para o wordpress
    $response = [
        'post_author' => $user_id,
        'post_type' => 'post',
        'post_status' => 'publish',
        'post_title' => $title,
        // 'post_content' => $task,
        // 'meta_input' => [
        //   qualquer campo customizado, lembrar de passar na criação da variável
        // ]
    ];

    $id = wp_insert_post($response, true);

    if ($id instanceof WP_Error) {
        $error = new WP_Error('error', 'Please, authenticate', [
            'status' => 401,
        ]);
        return rest_ensure_response($error);
    }
    $response['id'] = $id;

    return rest_ensure_response($response);
}

function register_api_task_post()
{
    register_rest_route('api', '/task', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'api_task_post',
    ]);
}

add_action('rest_api_init', 'register_api_task_post');

?>
