$(document).ready(function () {
    var click = 0;
    $('button').on("click", function () {
        if (click == 0) {
            $("#superhero").attr("src", "http://cuteimages.net/data/2015/11/not-your-everyday-superhero--photos-cuteimages.net.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click == 1) {
            $("#superhero").attr("src", "http://orig14.deviantart.net/4d1b/f/2010/128/0/c/my_cat_is_iron_man_by_the_evil_pastry_xd.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==2){
            $("#superhero").attr("src", "http://cdn.hiconsumption.com/wp-content/uploads/2013/05/Cats-as-Superheroes-by-Jenny-Parks-5.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==3){
            $("#superhero").attr("src", "http://smatterist.com/wp-content/uploads/2014/04/Ke-Le-Captain-America-Cat-0006.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==4){
            $("#superhero").attr("src", "https://maryluellyn.files.wordpress.com/2016/05/wolverine-cat-small.jpg?w=1035");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==5){
            $("#superhero").attr("src", "https://i.ytimg.com/vi/-rp2s4pSg5Q/maxresdefault.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==6){
            $("#superhero").attr("src", "https://static1.squarespace.com/static/5031788c24ac2660dcea339c/519933f9e4b0be74de0ba0f4/519934e9e4b0a2d4e1c45daa/1368995053225/2012-08-10+21.55.edit.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==7){
            $("#superhero").attr("src", "https://s-media-cache-ak0.pinimg.com/originals/d7/c7/2e/d7c72e4c43851b8c4eab4d03d8219919.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==8){
            $("#superhero").attr("src", "http://cdn.hiconsumption.com/wp-content/uploads/2013/05/Cats-as-Superheroes-by-Jenny-Parks-1.jpg");
            click = Math.floor(Math.random()*10);
        }
        else if (click ==9){
            $("#superhero").attr("src", "http://littlefun.org/uploads/521d1a62c8561116e1000000_736.jpg");
            click = Math.floor(Math.random()*10);
        }

    });

});
