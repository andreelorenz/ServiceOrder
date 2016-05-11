#JsonWebToken
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
To use the JSON Web Tokens you must inject the JsonWebTokenFactory.

##Methods
Methods that can be used on json-web-token(jwt)

###create

#### What is it?
It's a method to create a valid jwt.

###When use it?
Used to create a valid jwt for securely transmitting information between parties as a JSON object. 
Here are some scenarios where JSON Web Tokens are useful:
- ###Authentication: 
This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

- ###Information Exchange: 
JSON Web Tokens are a good way of securely transmitting information between parties, because as they can be signed, for example using public/private key pairs, you can be sure that the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

###create(payload, options)

`payload` could be an object literal, buffer or string. *Please note that* `exp` is only set if the payload is an object literal.

`options`:

* `algorithm` or `alg` (default: `HS256`)
* `expiresIn`: expressed in seconds or a string describing a time span [rauchg/ms](https://github.com/rauchg/ms.js). Eg: `60`, `"2 days"`, `"10h"`, `"7d"`
* `notBefore`: expressed in seconds or a string describing a time span [rauchg/ms](https://github.com/rauchg/ms.js). Eg: `60`, `"2 days"`, `"10h"`, `"7d"`
* `audience`
* `issuer`
* `jwtid`
* `subject`
* `noTimestamp`
* `header`

###Exemple:
```js
payload = [
    'iss': 'serviceOrder',
    'username': 'teste',
    'senha' => 'teste123'
];
options = [
    'algorithm': 'RS256'
]
JsonWebTokenFactory.create(payload, options);
```
