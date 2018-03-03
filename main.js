var faveAnimals = {
    name: "zoe",
    animal: "cat",
};


console.log("favAnimal", faveAnimals.animal);

var instructorPets = [
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil cat",
        isFavorite: false
    },
    {
        instructorName: "Zoe",
        petName: "Whiskey",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Seymour",
        animalType: "one eyed dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: false
    }
];
console.log("instructorPets", instructorPets);
var getId = document.getElementById('pet-names');

for (var i=0; i<instructorPets.length; i++){
    getId.innerHTML += '<h1>' + instructorPets[i].petName + '</h1>';
}