<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>A List of Articles.</title>
    <meta name="description" content="All dunks, all the time. You're welcome.">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">    
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    
    <link rel="stylesheet" href="/public/dist/css/site.css"/>
    <script src="/public/dist/js/head.js"></script>
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
    <script src="/public/dist/js/bundle.js"></script>

</body>
</html>