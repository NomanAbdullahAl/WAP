$(function(){

    $("input[type='submit']").click(()=>{

        let data = {
            name : $(this).find("input[name='name']").val(),
            price : $(this).find("input[name='price']").val()
        };

        $.ajax({
            url: "/addToCart",
            type:"post",
            data : data
        }).done(onSuccess);
    });

    function onSuccess(res){
        $("#cartCount").text(res.totalCart);
        alert("Successfully Carted");
    }
});