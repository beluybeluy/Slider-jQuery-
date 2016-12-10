$(function () {
  //масив з назвами картинок, для нашого слайдера
  var imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"];
  //масив кольорів для box shadow
  var colors = ["#4d3a64", "#3281b9", "#c7a9a2", "#1e3e46", "#fdaca0", "#cbb9a2", "#284f4b", "#b1a8a4"];
  //масив кольорів для фону body
  var bcg = ["#ecddff", "#b2dbf8", "#faeae5", "#6f7d81", "#ffe5e1", "#89765d", "#4c9890", "#d4d0cf"];
  //присвоюємо початкове значення для нашого лічильник
  var i = 0;
  //тут перебираємо всі radio button і при різних подіях будемо задавати різну поведінку та стилі
  $('.radio_btn').each(function (index, element) {
  //стилі при наведенні на radio button, в backround будемо підставляти значення з масива, який містить назви картинок (буде зявлятись маленький блок над radio-button)
  $('.radio_btn').eq(index).mouseover(function () {
  $('.container_small').css({
  display: "block"
  , background: "url(img/" + imgs[index] + ")"
  , backgroundSize: "107%"
  })
  })
  //стилі при відведені мишки від radio - button
  $('.radio_btn').eq(index).mouseout(function () {
  $('.container_small').css('display', 'none');
  })
  //стилі при кліку на radio-button в backround будемо підставляти значення з масива, який містить назви картинок
  $('.radio_btn').eq(index).click(function () {
  $('.container').css({
  background: "url(img/" + imgs[index] + ")"
  , backgroundSize: "107%"
  , boxShadow: "0px 0px 20px 20px " + colors[index]
  })
//background буде задаватись з масиву colors, для нашої кнопки яка запускає слайдшоу
  $('.btn').css('background', colors[index]);
//background буде задаватись з масиву bcg, для body
  $('body').css('background', bcg[index]);
//якщо наш radio-button вибрано, то лічильник 'i',  який ми збільшуємо або зменшуємо, залежно від того в який бік гортаємо слайди,прирівняємо до індекса radio-button на який клікнули
  if ($(this).checked == true) i = index;
  })
  })
  //функція для наших сладів
//background будемо
  function slids(index) {
  $('.container').css({
  background: "url(img/" + imgs[index] + ") "
  , backgroundSize: "107%"
  , boxShadow: "0px 0px 20px 20px " + colors[index]
  })
  $('.btn').css('background', colors[index]);
  $('body').css('background', bcg[index]);
  }
  //стилі при кліку на праву кнопку
  $('.arrow_right').click(function () {
 //збільшуємо лічильник, коли гортаємо в праву сторону
  i++;
//ставимо умову, що коли значення лічильника буде дорівнювати індексу останнього елементу, тобто ми дойшли до останнього слайду, то значення нашого лічильника буде рівне 0
  if (i == imgs.length) i = 0;
//тут викликаємо функцію
  slids(i);
//автоматичне перемикання radio-button згідно з слайдами
  $('.radio_btn').get(i).checked = true;
  })
  //стилі при кліку на ліву кнопку
  $('.arrow_left').click(function () {
  if (i == 0) i = imgs.length;
 //зменшуємо лічильник, коли гортаємо в ліву сторону
  i--;
  //тут викликаємо функцію
  slids(i);
//автоматичне перемикання radio-button згідно з слайдами
  $('.radio_btn').get(i).checked = true;
  })
  //для слайдшоу, функція ,яку ми передамо в setInterval
  function insideSlider() {
//збільшуємо лічильник, оскільки слайди будуть гортатись в праву сторону
  i++;
  if (i == imgs.length) i = 0;
  $('.container').css({
  background: "url(img/" + imgs[i] + ") "
  , backgroundSize: "107%"
  })
//автоматичне перемикання radio-button згідно з слайдами
  $('.radio_btn').get(i).checked = true;
  }
  //створюємо змінну для setInterval
  var showSlide;
  //прапорець для кнопки start
  var check = true;
//змінна в яку запишемо крок для функції insideSlider
  var step = 1000;
  $('.btn').click(function () {
  if (check) {
  $(this).css('background', '#000');
  $(this).val('stop');
  $('.arrow').css('display', 'none');
  $('body').css('background', '#000');
  $('.container').css('boxShadow', '0px 0px 40px 40px #fff');
  //тут запишемо наш setInterval для повтору дії
  showSlide = setInterval(insideSlider, step);
  check = false;
  }
  else {
  $(this).css('background', colors[i]);
  $(this).val('start');
  $('.arrow').css('display', 'block');
  $('body').css('background', bcg[i]);
  $('.container').css('boxShadow', '0px 0px 40px 40px' + colors[i]);
//зупиняємо слайдшоу
  clearInterval(showSlide);
  check = true;
  }
  })
})