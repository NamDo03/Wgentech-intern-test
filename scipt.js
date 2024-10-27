document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.slider-item').offsetWidth;
    document.getElementById('slider-form-list').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.slider-item').offsetWidth;
    document.getElementById('slider-form-list').scrollLeft -= widthItem;
}
  