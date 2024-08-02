$(window).on('scroll', () => {
  // console.log(scrollY);
  if (scrollY > 80) {
    $('header').css({
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(7px)',
    });
  } else {
    $('header').css({
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0)',
    });
  }
});