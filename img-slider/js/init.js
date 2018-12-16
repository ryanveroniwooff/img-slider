function slide(n){
  var imgNames = ["null", "img_1.jpeg", "img_2.jpeg", "img_3.jpeg", "img_4.jpeg"];
  var imgName = $('div#slider.slider img.slider-img')[0].outerHTML.split('img_');
  if (n == 0) {
    if (parseInt(imgName[1].split('.')[0]) != 1){
      $('div#slider.slider img.slider-img')[0].outerHTML = imgName[0] + imgNames[parseInt(imgName[1].split('.')[0]) - 1] + "\">";
    } else{
      $('div#slider.slider img.slider-img')[0].outerHTML = imgName[0] + imgNames[parseInt(imgName[1].split('.')[0]) + 3] + "\">";
    }
  }
  else if (n == 1 ){
    if (parseInt(imgName[1].split('.')[0]) != 4){
      $('div#slider.slider img.slider-img')[0].outerHTML = imgName[0] + imgNames[parseInt(imgName[1].split('.')[0]) + 1] + "\">";
    } else{
      $('div#slider.slider img.slider-img')[0].outerHTML = imgName[0] + imgNames[parseInt(imgName[1].split('.')[0]) - 3] + "\">";
    }
  }
}