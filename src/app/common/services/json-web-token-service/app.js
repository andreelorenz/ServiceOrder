function token() {
    var key = 'TESTE';
    var header = [
        'typ' => 'JWT',
        'alg' => 'HS256'
    ];

    header = json_encode(header);
    header = base64_encode(header);

    var payload = [
        'issue' => 'serviceOrder',
        'autence' => '/app/user',
        'username' => '',
        'senha' => ''
    ];

    payload = json_encode(payload);
    payload = base64_encode(payload);

    var secret = hash_hmac('sha256', '$header.$payload', key, true);

    secret = base64_encode(secret);

    return token = header+'.'+payload+'.'+ secret;
}