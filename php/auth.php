<?php
include './db.php';

if (isset($_POST['login']) && isset($_POST['passw'])) {
    
    $login = htmlspecialchars($_POST['login']);
    $passw = htmlspecialchars($_POST['passw']);

    if ($login === 'admin' && $passw === 'root')
    {
        echo true;
    } 

}


?>