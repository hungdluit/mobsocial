/// <binding Clean='Run - Development' />
"use strict";
var webpack = require("webpack");
module.exports = {
    externals: {
        'angular': 'angular',
        'moment': 'moment'
    },
    entry: {
        essentials: [
            "./libraries/moment/moment.min.js",
            //angular
            "./libraries/angular/angular.min.js",
            "./libraries/angular/angular-ui-router.js",
            "./libraries/angular/angular-local-storage.min.js",
            "./libraries/angular/angular-moment.min.js",
            "./libraries/ocLazyLoad/ocLazyLoad.min.js",
            "./libraries/angular/angular-sanitize.min.js",
            //mobSocial app
            "./config.js",
            "./app/common/functions.js",
            "./app/app.js",
            "./app/common/router.js",
            "./app/common/authProvider.js",
            "./app/common/controllerProvider.js",
            "./app/common/requestInterceptor.js",
            "./app/common/services/webClientService.js",
            "./app/common/services/entityPropertyService.js",
            //directives
            "./app/common/directives/blockUi.js",
            //filters
            "./app/common/filters/ms2timestr.js",
            //controllers
            "./app/common/controllers/navigationController.js",
            "./app/common/services/loginService.js",
            "./app/public/authentication/loginController.js"
        ],
        fileUpload: [
            "./libraries/angular/angular-file-upload.min.js",
            "./app/common/directives/fileUploadButton.js"
        ],
        videogular: [
            "./libraries/videogular/videogular.min.js",
            "./libraries/videogular/vg-controls.min.js",
            "./libraries/videogular/vg-overlay-play.min.js",
            "./libraries/videogular/vg-poster.min.js",
            "./libraries/videogular/vg-buffering.min.js",
            "./libraries/videogular/vg-ima-ads.min.js",
            "./libraries/videogular/youtube.js",
            "./libraries/videogular/humanize-duration.js",
            "./libraries/angular/angular-timer.js"
        ],
        users: [
            "./app/common/services/userService.js",
            "./app/admin/users/userController.js",
            "./app/admin/users/userEditController.js",
            "./app/public/users/userProfileController.js"
        ],
        settings: [
            "./app/common/services/settingService.js",
            "./app/admin/settings/settingEditController.js"
        ],
        timeline: [
            "./app/common/services/timelineService.js",
            "./app/public/timeline/timelineController.js"
        ],
        social: [
            "./app/common/services/commentService.js",
            "./app/common/services/followService.js",
            "./app/common/services/likeService.js",
            "./app/common/directives/commentsBox.js",
            "./app/common/directives/followButton.js",
            "./app/common/directives/likeButton.js"
        ]
    },
    output: {
        filename: "scripts/bundles/[name].bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    resolve: {
        extensions: ["", ".js"]
    },
    module: {
        loaders: [
        ]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin("scripts/bundles/init.js")]
};