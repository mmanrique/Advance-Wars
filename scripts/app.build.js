({
    appDir: "../",
    baseUrl: "scripts",
    dir: "../build",
    

    paths: {
        "jquery": "libs/jquery.min"
    },

    modules: [
        {
            name: "game",
            exclude: ["jquery"]
        }
    ]
})