function token() {
    $key = '';
    $header = [
        'typ' => 'JWT',
        'alg' => 'HS256'
    ];

    $header = json_encode($header);
    $header = base64_encode($header);

    $payload = [
        'iss' => '',
        'username' => '',
        'senha' => ''
    ];

    $payload = json_encode($payload);
    $payload = base64_encode($payload);

    $secret = hash_hmac('sha256', '$header.$payload', $key, true);

    $secret = base64_encode($secret);

    return $token = $header.$payload.$secret;
}