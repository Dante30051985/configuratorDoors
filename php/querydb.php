<?php
include './db.php';


if (isset($_POST['accessories']) && isset($_POST['zena'])) {

    $accessories = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['accessories']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `accesories` 
                            (`id`, `nameacsessories`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $accessories, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewAcsessories';
    } else {
        echo 'error';
    }
}



if (isset($_POST['openDoors']) && isset($_POST['zena'])) {

    $openDoors = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['openDoors']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `openingdoors` 
                            (`id`, `typeOpening`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $openDoors, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewOpenDoors';
    } else {
        echo 'error';
    }

}



if (isset($_POST['heightDoors']) && isset($_POST['zena'])) {

    $height = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['heightDoors']));
    $zena = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['zena']));

    $stmt = $conn->prepare("INSERT INTO `heightdoors` 
                            (`id`, `height`, `zena`) VALUES 
                            (NULL, ?, ?);");

    $stmt->bind_param('ss', $height, $zena);
    $stmt->execute();

    $res = $stmt->insert_id;

    if ($res) {
        echo 'addNewHeightDoor';
    } else {
        echo 'error';
    }

}


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

if (isset($_POST['delAccessories'])) {
    $delAccessories = explode(',', htmlspecialchars($_POST['delAccessories']));
   
    for ($i = 0; $i < count($delAccessories); $i++) {
    $query = $conn->prepare("DELETE FROM `accesories` WHERE `nameacsessories` = ?");
    $query->bind_param('s', $delAccessories[$i]);
    $query->execute();
    }
}

if (isset($_POST['delOpen'])) {
    $delOpen = explode(',', htmlspecialchars($_POST['delOpen']));
    for ($i = 0; $i < count($delOpen); $i++) {
    $query = $conn->prepare("DELETE FROM `openingdoors` WHERE `typeOpening` = ?");
    $query->bind_param('s', $delOpen[$i]);
    $query->execute();
    }
}


if (isset($_POST['delHeightDoors'])) {
    $delHeightDoors = explode(',', htmlspecialchars($_POST['delHeightDoors']));
    for ($i = 0; $i < count($delHeightDoors); $i++) {
    $query = $conn->prepare("DELETE FROM `heightdoors` WHERE `height` = ?");
    $query->bind_param('s', $delHeightDoors[$i]);
    $query->execute();
    }
}


if (isset($_POST['delWidthDoors'])) {
    $delWidthDoors[] = htmlspecialchars($_POST['delWidthDoors']);

    for ($i = 0; $i < count($delWidthDoors); $i++) {
    $query = $conn->prepare("DELETE FROM `widthdoors` WHERE `width` = ?");
    $query->bind_param('s', $delWidthDoors[$i]);
    $query->execute();
    }
}

if (isset($_POST['delColorHand'])) {
    $delColorHand[] = htmlspecialchars($_POST['delColorHand']);

    for ($i = 0; $i < count($delColorHand); $i++) {
    $query = $conn->prepare("DELETE FROM `handcolor` WHERE `color` = ?");
    $query->bind_param('s', $delColorHand[$i]);
    $query->execute();
    }
}


if (isset($_POST['delColorFilm'])) {
    $delColorFilm[] = htmlspecialchars($_POST['delColorFilm']);

    for ($i = 0; $i < count($delColorFilm); $i++) {
    $query = $conn->prepare("DELETE FROM `filmcolor` WHERE `color` = ?");
    $query->bind_param('s', $delColorFilm[$i]);
    $query->execute();
    }
}


if (isset($_POST['delColor'])) {
    $delColor[] = htmlspecialchars($_POST['delColor']);

    for ($i = 0; $i < count($delColor); $i++) {
    $query = $conn->prepare("DELETE FROM `paintdoors` WHERE `color` = ?");
    $query->bind_param('s', $delColor[$i]);
    $query->execute();
    }
}



if (isset($_POST['delUser'])) {

    $delUser[] = htmlspecialchars($_POST['delUser']);

    for ($i = 0; $i < count($delUser); $i++) {
    $query = $conn->prepare("DELETE FROM `users` WHERE `login` = ?");
    $query->bind_param('s', $delUser[$i]);
    $query->execute();
    }
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
    
    if ($_POST['typeQuery'] === 'accessories' ||$_POST['typeQuery'] === 'addNewAcsessories' ) {
        $query = $conn->prepare('select * from `accesories`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['accessories'][] = $assoc['nameacsessories'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }

    if ($_POST['typeQuery'] === 'openDoors' ||$_POST['typeQuery'] === 'addNewOpenDoors' ) {
        $query = $conn->prepare('select * from `openingdoors`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['openDoors'][] = $assoc['typeOpening'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }


    if ($_POST['typeQuery'] === 'heightDoors' ||$_POST['typeQuery'] === 'addNewHeightDoor' ) {
        $query = $conn->prepare('select * from `heightdoors`');
        $query->execute();
        $res = $query->get_result();
        $rows = $res->num_rows;
      
        if ($rows === 0) {
             echo true;
        } else {
    
            $rez = [];
    
            while ($assoc = mysqli_fetch_assoc($res))
            {
                $rez['heightDoors'][] = $assoc['height'];
                $rez['zena'][] = $assoc['zena'];    
            }
    
           echo json_encode($rez);
        
           }
    }


    if ($_POST['typeQuery'] === 'widthDoors' || $_POST['typeQuery'] === 'addNewWidthDoor' ) {
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
        
    if ($_POST['typeQuery'] === 'users' || $_POST['typeQuery'] === 'addNewUser' ) {
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