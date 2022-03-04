
$(() => {

    $('#dm').click(function () {
        $('body').toggleClass("dark-mode")
    })

    $('#getbeers').click(function () {
        $.get("https://api.punkapi.com/v2/beers", function(beers){
            console.log(beers)
        })
    })
    $('.btn').click(function () {
        console.log("you tried to hide meeee 🤬")
        // console.log(e.target.parentElement.style.display = "none")
        // SLIDES
        if ($(this).text() == "Show") {
            $(this).text("Hide")
        } else {
            $(this).text("Show")
        }
        $(this).prev().slideToggle()
        console.log($('#inp').val())
        $('#inp').val("")
        // $(this).prev().slideUp()
        // $(this).prev().slideDown()
        // FADES
        // $(this).prev().fadeToggle()
        // $(this).prev().fadeOut()
        // $(this).prev().fadeIn()
        // REGULAR
        // $(this).prev().Toggle()
        // $(this).prev().hide()
        // $(this).prev().show()

        // TRAVERSING
        // $(this).parent()
        // $(this).parents()
        // $(this).parentsUntil($('.some-parent'))
        // $(this).sibilings()
        // $(this).prev()
        // $(this).prevAll()
        // $(this).prevUntil($('.some-bro'))
        // $(this).next()
        // $(this).nextAll()
        // $(this).nextUntil($('.some-bro'))
        // $(this).children()


        // CONTENT
        // $(this).text()                    // elm.textContent
        // $(this).text("")                  // elm.textContent = ""
        // $(this).html()                    // elm.innerHtml
        // $(this).html("")                  // elm.innerHtml = ""
        // $(this).val()                     // elm.value
        // $(this).val("")                   // elm.value = ""
        // $(this).css("display")            // elm.style.display
        // $(this).css("display", "none")    // elm.style.display = "none"

        // CLASSES
        // $(this).addClass("dark-mode")      // elm.classList.add("dark-mode")    // elm.className +="dark-mode"
        // $(this).removeClass("dark-mode")   // elm.classList.remove("dark-mode") // elm.className.replace("dark-mode", "")
        // $(this).toggleClass("dark-mode")   // elm.classList.toggle("dark-mode")

        // $("<p></p>").text("Text")          // document.createElement("p").textContent = "Text"

    })














})
