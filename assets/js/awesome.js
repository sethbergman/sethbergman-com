function doAmazingThings() {
  alert('YOU AM AMAZING!');
}
document.addEventListener('DOMContentReady', function () {
  document.getElementById('amazing')
          .addEventListener('click', doAmazingThings);
});

// function send_email() {
//   var to, name, user, text;
//   to = "seth.atxwebs@gmail.com";
//   name = $("#c_name").val();
//   user = $("#c_email").val();
//   text = $("#c_message").val();
// }
// 
// document.addEventListener('DOMContentReady', function () {
//   document.getElementById('#button.send_email')
//           .addEventListener('click', send_email);
// });

var send_email = function () {
  var user, to, subject, text;
  $("#send_email").click(function () {
    to = "seth.atxwebs@gmail.com";
    name = $("#c_name").val();
    user = $("#c_email").val();
    text = $("#c_message").val();
    $("#c_message").text("Sending E-mail...Please wait");
    $.get("/send", {
      to: to,
      name: name,
      user: user,
      text: text
    }, function (data) {
      if (data == "sent") {
        console.log("Email sent");
      }
    });
  });
};