/*global QUnit */
(function() {
    require.config({
        baseUrl: "../scripts"
    });
    Object.extend = function extend(type, props) {
        var obj= Object.create(type);
        for(prop in props) {
            if(props.hasOwnProperty(prop)) {
                obj[prop] = props[prop];
            }
        }
        return obj;
    };
    var test_modules = [
        "specs/loaderTest.js",
        "specs/spriteTest.js",
        "specs/playerTest.js",
        "specs/interactiveTest.js",
        "specs/baseTest.js"
    ];
    require(test_modules, function() {
        QUnit.load();
        QUnit.start();
    })
})();