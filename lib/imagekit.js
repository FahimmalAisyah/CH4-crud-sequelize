// SDK initialization

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : "public_xgNpxv4sNfEo8SPfm13YmwXXiEw=",
    privateKey : "private_81RouzM29FPCVyfbGgNpqDnA6ss=",
    urlEndpoint : "https://ik.imagekit.io/z9crjo2pk"
});

module.exports = imagekit;
