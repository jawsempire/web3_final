
/**
 * Created by FaDu on 4/27/17.
 */

function del(id) {
    $.ajax("/api/"+id,{
        method:"DELETE",
        success:init
    })
}

function init(){
    $.get("/api",function(data) {
        let htmletxt = '';
        for (quote of data) {
            htmletxt += `<p>${quote.ID},${quote.NAME},${quote.Quotes}<button onclick="del(${quote.ID})">Delete</button></p>`;
        }
        $("#holder").html(htmletxt);
        console.log(JSON.stringify(data));
    })
}

$(()=>{
  init();
  $("#add").click(function () {
      $.post("/api", {
          name:$("#name").val(),
          quote:$("#text").val()
      })
      $("#name").val('');
      $("#text").val('');
      init();
  })
})