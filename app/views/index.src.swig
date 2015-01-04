<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>A List of Articles.</title>
    <meta name="description" content="All dunks, all the time. You're welcome.">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">    
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    
    <!-- build:css /public/dist/css/site.css -->
    <link href="/public/bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="/public/bower_components/bootstrap/dist/css/bootstrap-theme.css" rel="stylesheet">
    <link href="/public/build/css/main.css" rel="stylesheet">
    <!-- endbuild -->
    <!-- build:js /public/dist/js/head.js -->
    <script type="text/javascript" src="/public/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
</head>
<body>
    <main class="site-wrapper" id="main">
        <div class="container">
            <header><h1>Some Articles</h1></header>
            <nav class="navbar navbar-default" id="nav"></nav>
            <section id="articles"></section>
        </div>
    </main>
    <script>
        window.__SERVER_VARS__ = {};
        window.__SERVER_VARS__.tags = {%autoescape false%}{{tags|json_encode}}{%endautoescape%};
        window.__SERVER_VARS__.currentTag = "{{currentTag}}";

    </script>
    <!-- build:js /public/dist/js/bundle.js -->
    <script type="text/javascript" src="/public/build/js/build.js"></script>
    <script type="text/javascript" src="/public/bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <!-- endbuild -->

</body>
</html>