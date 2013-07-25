define([], function() {
    var Loader = {
        loadResources: function(callback, imageUrl) {
            Loader.SPRITESHEET = new Image();
            Loader.SPRITESHEET.onload = function() {
                if (!!callback) {
                    callback.call();
                }
            };
            Loader.SPRITESHEET.src = imageUrl;
        }
    };

    return Loader;
});