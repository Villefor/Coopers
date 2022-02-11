<?php

$dirbase = get_template_directory();

require_once $dirbase . '/endpoints/user_post.php';
require_once $dirbase . '/endpoints/user_get.php';

require_once $dirbase . '/endpoints/task_post.php';
require_once $dirbase . '/endpoints/task_get.php';
require_once $dirbase . '/endpoints/task_delete.php';

require_once $dirbase . '/endpoints/photo_get.php';

function expire_token()
{
    return time() + 60 * 60 * 48;
}
add_action('jwt_auth_expire', 'expire_token');
