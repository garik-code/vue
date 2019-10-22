(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    var myWidth = window.innerWidth;
    var myHeight = window.innerHeight;
    if (parseInt(myWidth) < 1300) {
        document.getElementById('carousel-subscription').style['display'] = 'block';
        document.getElementById('non-carousel-subscription').style['display'] = 'none';
    } else {
        document.getElementById('carousel-subscription').style['display'] = 'none';
        document.getElementById('non-carousel-subscription').style['display'] = 'block';
    }
}
})();
/*
var type_of_subscriptions = ['customer', 'bronze', 'silver', 'gold', 'platinum']
if (parseInt(myWidth) < 650) {
    for (type_of_subscription in type_of_subscriptions) {
        var element = type_of_subscription + '-carousel-subscription';
        element.style['width'] = '100%';
    }
} else {
    for (type_of_subscription in type_of_subscriptions) {
        var element = type_of_subscription + '-carousel-subscription';
        element.style['width'] = '50%';
    }
}
*/
