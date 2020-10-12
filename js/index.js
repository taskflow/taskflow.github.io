// Author: twhuang
'use strict';

function makeCard(item) {
  if(item == null || item == undefined) return ''; 
  return `\
<div class="card">\
<div class="card-body">\
<p><a href="${item.image_url}"><img class="card-img-top" src="${item.image_src}"></a></p>\
<h5 class="card-title">${item.title}</h5>\
<p class="card-text">${item.content}</p>\
</div>\
<div class="card-footer">\
<small class="text-muted">${item.footer}</small>\
</div>\
</div>`
}

let row = 0;
let cnt = 0;

// first three rows are explicit
for(row=1; row<=3; row=row+1, cnt+=3) {
  let news_div = $(`#tag_news > div:nth-child(${row})`);
  news_div.after(`<div class="card-deck mb-4" id=news_row_${row}></div>`)
  $(`#news_row_${row}`).append(
    makeCard(news[cnt]), makeCard(news[cnt+1]), makeCard(news[cnt+2])
  )
}

// the rest rows are implicit
for(; cnt<news.length; cnt+=3, row++) {
  let news_div = $(`#tag_news > div:nth-child(${row})`);
  news_div.after(`<div class="card-deck hideNews mb-4" id=news_row_${row}></div>`)
  $(`#news_row_${row}`).append(
    makeCard(news[cnt]), makeCard(news[cnt+1]), makeCard(news[cnt+2])
  )
}

// more news
$('#moreNews').on('click', function(e) {
  e.preventDefault();
  let length = $('.hideNews').length;
  if(length > 0) {
    let button_height = $('#moreNews').height();
    let news = $('.hideNews').slice(0, 1);
    news.removeClass('hideNews');
    $('html, body').animate({
      scrollTop: news.position().top - 50
    }, 100);
    //$('.conv ').animate({
    //  scrollTop: $('.div .hideNews:last-child').position().top
    //}, 'slow');
  }
});
