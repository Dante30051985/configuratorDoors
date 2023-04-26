<?php

$botToken = "6108565625:AAFojvTTmyhFuOjJpSSpDEj0L_7WVph7_Eo"; 
$chatId = "5022018509"; 
$file = "readme.md"; 

$telegramUrl = "https://api.telegram.org/bot{$botToken}/sendDocument";

$response = sendFile($telegramUrl, $chatId, $file);

if ($response["ok"]) {
    echo "Файл успешно отправлен.";
} else {
    echo "Ошибка при отправке файла: {$response['error_code']} - {$response['description']}";
}

function sendFile($url, $chatId, $file) {
    $postData = [
        "chat_id" => $chatId,
        "document" => new CURLFile(realpath($file)),
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}
?>
