/*global QUnit */
(function() {
    var test_module = [];
    require(test_module, function() {
        QUnit.load();
        QUnit.start();
    })
})();