$(() => {
    // create the page buttons
    for (let i = 0; i < 10; i++) {
        const btn = $("<button></button>")
        btn.text(i + 1)
        btn.addClass("page-btn")
        $('.paginator').append(btn)
    }

    $('.page-btn').click(function () {
        $(".list").html("")
        // 'https://api.punkapi.com/v2/beers?page='  +  $(this).text() + "&perpage=" + x
        $.get(`https://api.punkapi.com/v2/beers?page=${$(this).text()}`, beers => {
            console.log(beers)
            for (const beer of beers) {
                // let hops = ""
                // for (const hope of beer.ingredients.hops) {
                //     hops += hope.name+", "
                // }

                const hops = beer.ingredients.hops.reduce((allHops, currentHop) => allHops + currentHop.name + ", ", "")

                $(".list").html($(".list").html() + `
                    <div class="beer">
                        <img src="${beer.image_url}" alt="beer" class="beer-img">
                        <div>
                            <h1>${beer.name}</h1>
                            <h1>${beer.abv}%</h1>
                            <p>Hops: ${hops.substr(0, hops.length - 2)}</p>
                        </div>
                    </div>
                `)
            }
        })
    })

})