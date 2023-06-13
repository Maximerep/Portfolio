// Définir les mots-clés et leur fréquence
var words = [
    { text: "Design", weight: 10 },
    { text: "Développement web", weight: 8 },
    { text: "Photographie", weight: 6 },
    { text: "UI/UX", weight: 7 },
    // Ajoutez plus de mots-clés avec leurs fréquences
  ];
  
  // Configurer les options du nuage de mots
  var options = {
    list: words.map(function(word) {
      return [word.text, word.weight];
    }),
    gridSize: 10,
    weightFactor: 5,
    fontFamily: "Arial, sans-serif",
    color: "random-dark",
    backgroundColor: "#fff",
    rotateRatio: 0.5,
    shape: "circle",
    ellipticity: 0.65,
    shuffle: true,
    hover: function(item) {
      // Action lorsqu'un mot est survolé
      console.log(item);
    },
    click: function(item) {
      // Action lorsqu'un mot est cliqué
      console.log(item);
      // Redirigez vers une autre page ou effectuez une action supplémentaire
    },
  };
  
  // Générer le nuage de mots
  WordCloud(document.getElementById("wordcloud"), options);
  