// Définir les mots-clés et leur fréquence
var words = [
    { text: "Cyclisme", weight: 10 },
    { text: "Trail", weight: 8 },
    { text: "Badminton", weight: 9 },
    { text: "Marche", weight: 7 },
    { text: "Les échecs", weight: 7 },
    { text: "Lecture", weight: 4 },
    { text: "Sortir avec des amis", weight: 8 },
    { text: "Ecouter de la musique", weight: 6 },
    { text: "", weight: 6 },
    { text: "Découvrir des nouveaux paysages", weight: 7 },
    { text: "Sport", weight: 9 },
    { text: "Apprendre de nouvelles choses", weight: 6 },
    { text: "cusine", weight: 3 },


    // Ajoutez plus de mots-clés avec leurs fréquences
  ];
  
  // Configurer les options du nuage de mots
  var options = {
    list: words.map(function(word) {
      return [word.text, word.weight];
    }),
    gridSize: 15,
    weightFactor: 5,
    fontFamily: "Pacifico",
    color: "random-dark",
    backgroundColor: "#FFFFFF",
    rotateRatio: 0.5,
    shape: "circle",
    ellipticity: 0.65,
    shuffle: true,
    hover: function(item) {
      // Action lorsqu'un mot est survolé
      item.element.style.fontSize = '24px';
      item.element.style.color = '#ff4081';
    },
    click: function(item) {
      // Action lorsqu'un mot est cliqué
      console.log(item);
      // Redirigez vers une autre page ou effectuez une action supplémentaire
    },
  };
  
  // Générer le nuage de mots
  WordCloud(document.getElementById("wordcloud"), options);
  