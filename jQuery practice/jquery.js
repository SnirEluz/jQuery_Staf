$(() => {
    let task = []
    let id = 0
    if (localStorage.getItem("task")) {
        task = JSON.parse(localStorage.getItem("task"))
        for (let i = 0; i < task.length; i++) {
            $(".market").html($(".market").html() + `
                <div class="task" id=${id++}>
                   <img class="close" src="close.png">
                   <h3>Text</h3>
                   <h4 class="textOutput">${task[i].text}</h4>
                   <h3>Date</h3>
                   <h4 class="dateOutput">${task[i].date}</h4>
                   <h3>Time</h3>
                   <h4 class="timeOutput">${task[i].time}</h4>
                </div>
           `)
            $(".close").click(function (e) {
                $(e.target).parent().remove()
            })
        }
    }
    $(".btnSubmit").click(() => {
        if ($(".text").val()) {
            $(".market").html($(".market").html() + `
                <div class="task" id=${id++}>
                 <img class="close" src="close.png">
                 <h3>Text</h3>
                 <h4 class="textOutput">${$(".text").val()}</h4>
                 <h3>Date</h3>
                 <h4 class="dateOutput">${$(".date").val()}</h4>
                 <h3>Time</h3>
                 <h4 class="timeOutput">${$(".time").val()}</h4>
                </div>
            `)
            task.push({id:id,text: $(".text").val(), date: $(".date").val(), time: $(".time").val() })
            localStorage.setItem("task", JSON.stringify(task))
            console.log(task)
            $(".text").val("")
            $(".date").val("")
            $(".time").val("")
            $(".btnExit").click(function (e) {
                $(e.target).parent().remove()
            })
        }
    })
    $(".btnNewTask").click((e) => {
        if ($(".btnNewTask").text() == "New Task") {
            $(".btnNewTask").text("Close")
        } else {
            $(".btnNewTask").text("New Task")
        }
        $(".header").slideToggle()
        console.log("work")
    })
})
