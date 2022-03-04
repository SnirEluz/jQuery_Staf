

$("button").click(()=>{
    $.get("https://api.punkapi.com/v2/beers")
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                $(".page").html($(".page").html() + `
                    <div class="divBeer">
                        <h1>Name: ${data[i].name}</h1>
                        <h1>Abv: ${data[i].abv}</h1>
                        <img class="img" src="${data[i].image_url}" alt="">
                        <div class="subDivBeer">
                            <h1>Srm: ${data[i].srm}</h1>
                    </div>
                    </div>
                `)

            }
            console.log(data[0]);
        })
        .catch(function () {
            // alert("$.get failed!");
        })
        ;
})


// $(".page").append(`<div class="divBeer"></div>`)
// $(".divBeer").append(`<h1>Name: ${data[0].name}</h1>`)
// $(".divBeer").append(`<h1>Abv: ${data[0].abv}</h1>`)
// $(".divBeer").prepend(`<img class="img" src="${data[0].image_url}" alt="">`)
// //subDivBeer
// $(".divBeer").append(`<div class="subDivBeer"></div>`)
// $(".subDivBeer").append(`<h1>Srm: ${data[0].srm}</h1>`)