const menuItems = document.querySelectorAll('.direito a[href^="#"]');


menuItems.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick)
});

function getScrollToByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(e){
    e.preventDefault();
    const to = getScrollToByHref(e.target) - 80;
    smoothScrollTo(0, to);

    scrollToPosition(to)

}

function scrollToPosition(to){

        window.scroll({
        top:to ,
        behavior:"smooth",
     });

}

/* Eu peguei esse código no github do Origamid */

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};