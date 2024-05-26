$(document).ready(function () {
    const sortableTaskList = $("#vacationsTaskList")
    sortableTaskList.sortable();
    $("#addTaskAction").on("click", function () {
        const taskDescription = $("#task").val()
        const listItemString = `<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>${taskDescription}</li>`
        sortableTaskList.append(listItemString)
    })
});

