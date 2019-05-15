$(function(){
  function buildHTML(message){
    var image_url = (message.image_url)? `<image class="lower-message__image" src="${message.image_url}">`:"";
    var html = `<div class="message" id='${message.id}'>
                  <div class="upper-info" >
                    <div class="upper-info__user">
                    ${message.name}
                    </div>
                    <div class="upper-info__date">
                    ${message.time}
                  </div>
                </div>
                  <div class="lower-message">
                    <p class="lower-message__content"></p>
                    ${message.content}
                    ${image_url}
                  </div>`
    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html); 
      $('.new-message__input-box__text-field').val('');
      $('.new-message__input-box__image-btn__hidden').val('');
      $('.new-message__submit-btn').attr("disabled",false);
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight }, 'fast');
    })
    .fail(function(data){
      alert('入力してください');
      $(".new-message__submit-btn").attr("disabled",false);
    })
  })
})
