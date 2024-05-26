const svgDrag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
<path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
`
$(document).ready(function () {
    const sortableTaskList = $("#vacationsTaskList")
    sortableTaskList.sortable();
    $("#addTaskAction").on("click", function () {
        const taskDescription = $("#task").val()
        const taskImageUrl = $("#image").val()
        const imageItemString = `<img src="${taskImageUrl}" alt="" height="50" width="50">`
        const listItemString = `<li class="ui-state-default">${svgDrag}${taskDescription} ${imageItemString}</li>`
        sortableTaskList.append(listItemString)
    })
});

