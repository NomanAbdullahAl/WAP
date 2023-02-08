$(() => {
    const clearMsg = () =>  $("#txtQ").val("");
    const addedSuccess = (result) => {
        $("#txtQ").val(result).focus().select();
    }
    const noSuccess = () => {
        $("#txtQ").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#btn").click(() => {
        const data = {
            query: $("#txtQ").val(),
        };
        $.post({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});