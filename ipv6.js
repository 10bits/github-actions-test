loadScript("jschacha20.js")
loadScript("base64.js")
function stringToUint8Array(str) {
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    var tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}
pp(Base64.encode(env.get("CHACHA20KEY")))
pp(Base64.encode(env.get("CHACHA20NONCE")))
const key=stringToUint8Array(env.get("CHACHA20KEY"))
const nonce=stringToUint8Array(env.get("CHACHA20NONCE"))
const message=stringToUint8Array(env.get("IPV6"))
const encrypt = new JSChaCha20(key, nonce).encrypt(message)
pp(Base64.fromUint8Array(encrypt))
