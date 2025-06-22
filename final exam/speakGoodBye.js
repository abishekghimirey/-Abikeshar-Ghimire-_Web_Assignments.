(function (window) {
  var farewell = [
    "Goodbye", "Adiós", "Au revoir", "Tschüss", "Arrivederci",
    "さようなら", "안녕히 가세요", "再见", "Hasta luego", "Pheri bhetaula"
  ];

  var goodbyeSpeaker = {};

  goodbyeSpeaker.speak = function (name) {
    for (var i = 0; i < farewell.length; i++) {
      console.log(farewell[i] + " " + name);
    }
  };

  window.byeSpeaker = goodbyeSpeaker;

})(window);
