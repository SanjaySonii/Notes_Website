<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes_website</title>
    <link rel="stylesheet" href="project12_Notes_website.css">
    <link rel="stylesheet" media="screen and (max-width : 508px)" href="project12_Notes_website_responsive.css">
    <style>
        @media screen and (max-width : 382px) {
            .takeNotes h1{
                font-size: large;
            }
            #navbar {
                display: flex;
                justify-content: center;
            }
            #navbar div h4 {
                font-size: .8rem;
                font-weight: 900;
            }
            #navbar div input,
            #navbar div button,
            #navbar div a {
                font-size: .8rem;
            }
            #navbar div input,
            #navbar div button {
                width: 5rem;
            }
            div textarea {
                width: 17rem;
                height: 20rem;
            }
        }
        @media screen and (max-width : 322px){
            div textarea {
                width: 14rem;
                height: 18rem;
            }
            #navbar div input,
            #navbar div button {
                width: 4rem;
            }
            #navbar div input,
            #navbar div button,
            #navbar div a {
                font-size: .6rem;
            }
        }
        @media screen and (max-width : 282px){
            div textarea {
                width: 10rem;
                height: 15rem;
            }
            .takeNotes h1{
                font-size:medium;
            }
            hr{
                height: .1rem;
                width: 10rem;
                background-color: burlywood;
            }
            #navbar div input,
            #navbar div button {
                width: 3.7rem;
            }
            #navbar div input,
            #navbar div button
            {
                font-size: .5rem;
            }
            #navbar div a {
                font-size: .8rem;

            }
            
        }
        </style>
</head>

<body>
    <header class="header">
        <nav id="navbar">
            <div class="heading">
                <h4>Magic Notes</h4>
                <a href="#" class="home">HOME</a>
            </div>
            <div>
                <input type="search" name="search" id="search_box" placeholder="&#128269">
                <button class="btn" id="search">SEARCH</button>
            </div>
        </nav>
    </header>
    <div id="alert">
    </div>
    <section class="takeNotes">
        <hr>
        <h1>Welcome to Magic Notes</h1>
        <hr>
        <div>
            <h3>Add a note</h3>
            <!-- <hr> -->
            <h6>Add a title</h6>
            <input type="text" id="title" name="title" placeholder="add title here">
            <textarea name="noteArea" id="noteArea" cols="70" rows="6">
            </textarea>
            <button class="btn" id="addBtn">Add Notes</button>
        </div>
        <hr>
        <h1>Your Notes</h1>
        <hr>
        <div id="myNotes"></div>
    </section>
    <script type="text/javascript" src="project12_Notes_website.js"></script>
</body>

</html>
