<?php
include './db.php';

if (isset($_POST['widthDoors']) && isset($_POST['zena'])) {

    $width = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['widthDoors']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `widthdoors` 
                            (`id`, `width`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $width, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewWidthDoor';
    } else {
        echo 'error';
    }

}



if (isset($_POST['colorHand']) && isset($_POST['zena'])) {

    $color = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['colorHand']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `handcolor` 
                            (`id`, `color`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $color, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewColorHand';
    } else {
        echo 'error';
    }

}


if (isset($_POST['colorFilm']) && isset($_POST['zena'])) {

    $color = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['colorFilm']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `filmcolor` 
                            (`id`, `color`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $color, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewColorFilm';
    } else {
        echo 'error';
    }

}

if (isset($_POST['colorPainting']) && isset($_POST['zena'])) {

    $color = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['colorPainting']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `paintdoors` 
                            (`id`, `color`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $color, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewColorPainting';
    } else {
        echo 'error';
    }

}

if (isset($_POST['delWidthDoors'])) {
    $query = $conn->prepare("DELETE FROM `widthdoors` WHERE `width` = ?");
    $query->bind_param('s', $_POST['delWidthDoors']);
    $query->execute();
}

if (isset($_POST['delColorHand'])) {
    $query = $conn->prepare("DELETE FROM `handcolor` WHERE `color` = ?");
    $query->bind_param('s', $_POST['delColorHand']);
    $query->execute();
}


if (isset($_POST['delColorFilm'])) {
    $query = $conn->prepare("DELETE FROM `filmcolor` WHERE `color` = ?");
    $query->bind_param('s', $_POST['delColorFilm']);
    $query->execute();
}


if (isset($_POST['delColor'])) {
    $query = $conn->prepare("DELETE FROM `paintdoors` WHERE `color` = ?");
    $query->bind_param('s', $_POST['delColor']);
    $query->execute();
}



if (isset($_POST['delUser'])) {
    $query = $conn->prepare("DELETE FROM `users` WHERE `login` = ?");
    $query->bind_param('s', $_POST['delUser']);
    $query->execute();
}


if (isset($_POST['login']) && isset($_POST['passw'])) {
  
    $login = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['login']));
    $passw = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['passw']));

    $stmt = $conn->prepare("INSERT INTO `users` 
                            (`id`, `login`, `password`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $login, $passw);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewUser';
    } else {
        echo 'error';
    }

}

if (isset($_POST['typeQuery'])) {
    
    if ($_POST['typeQuery'] === 'widthDoors' ||$_POST['typeQuery'] === 'addNewWidthDoor' ) {
        $query = $conn->prepare('select * from `widthdoors`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['widthDoors'][] = $assoc['width'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }

    if ($_POST['typeQuery'] === 'handColor' || $_POST['typeQuery'] === 'addNewColorHand') {
        $query = $conn->prepare('select * from `handcolor`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['colorHand'][] = $assoc['color'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }
    
    if ($_POST['typeQuery'] === 'addNewColorFilm' ||$_POST['typeQuery'] === 'filmColor') {
        $query = $conn->prepare('select * from `filmcolor`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['colorFilm'][] = $assoc['color'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }

    
    if ($_POST['typeQuery'] === 'paintingColor' || $_POST['typeQuery'] === 'addNewColorPainting') {
        $query = $conn->prepare('select * from `paintdoors`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['colorDoors'][] = $assoc['color'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }
        
    if ($_POST['typeQuery'] === 'users') {
    $query = $conn->prepare('select * from `users`');
    $query->execute();
    $res = $query->get_result();
    $rows = $res->num_rows;
  
    if ($rows === 0) {
         echo true;
    } else {

        $rez = [];

        while ($assoc = mysqli_fetch_assoc($res))
        {
            $rez['login'][] = $assoc['login'];
            $rez['passw'][] = $assoc['password'];    
        }

       echo json_encode($rez);
    
       }
}
    
}

?>