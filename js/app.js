(function () {
    var app = angular.module('blog', []);
    app.controller('IncludeController',function(){
        this.header ='html/header.html';
        this.aside ='html/aside.html';
    });
})();