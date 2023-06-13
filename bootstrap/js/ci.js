var words = [
    { text: "Musique", weight: 8 },
    { text: "Voyages", weight: 6 },
    { text: "Photographie", weight: 7 },
    { text: "Design", weight: 5 },
    { text: "Cuisine", weight: 6 },
    { text: "Sport", weight: 4 },
    { text: "Technologie", weight: 7 }
    // Ajoutez d'autres mots ici avec leurs poids
  ];
  
  // Options de configuration du nuage de mots
  var options = {
    list: words,
    gridSize: 10,
    weightFactor: 40,
    fontFamily: "Arial, sans-serif",
    color: "random-dark",
    backgroundColor: "#f2f2f2",
    rotateRatio: 0.5,
    shape: "square",
    shuffle: true
  };
  
  // Créer le nuage de mots
  WordCloud(document.getElementById("word-cloud"), options);