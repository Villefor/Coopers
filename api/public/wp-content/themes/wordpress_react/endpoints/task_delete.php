<?php

function api_task_delete($request) {

  $post_id = $request['id'];
  $user = wp_get_current_user();
  $post = get_post($post_id);
  $author_id = (int) $post->post_author;
  $user_id = (int) $user->ID;;

 //compara conta com o autor do post e se existe o post
  if($user_id !== $author_id || !isset($post)) {
    $response = new WP_Error('error', 'User does not have permission to delete or the post does not exists', ['status' => 401]);
    return rest_ensure_response($response);
  };

  wp_delete_post ($post_id, true);

// se precisar deletar attachment ou fotos usar:
//   $attachment_id = get_post_meta($post_id, 'img, true');
//   wp_delete_attachment($post_id, true);

  return rest_ensure_response('Post has been deleted.');
}

//regex para o id do post
function register_api_task_delete () {
    register_rest_route('api', '/task/(?P<id>[0-9]+)', [
        'methods' => WP_REST_Server::DELETABLE,
        'callback' => 'api_task_delete',
    ]);
};

add_action('rest_api_init', 'register_api_task_delete');

?>