/*global QUnit */
(function() {
    require.config({
        baseUrl: "../scripts"
    });
    var test_modules = [
        "specs/loaderTest.js"
    ];
    require(test_modules, function() {
        QUnit.load();
        QUnit.start();
    })
})();