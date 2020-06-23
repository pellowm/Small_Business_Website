mapArray = [
    'images/maps/mapAll.jpg',
    '/images/maps/map1MtLebo.jpg',
    '/images/maps/map2SouthSide.jpg',
    '/images/maps/map3Oakland.jpg',
    '/images/maps/map4SquirrelHill.jpg',
    '/images/maps/map5ShadySide.jpg',
    '/images/maps/map6Millvale.jpg',
    '/images/maps/map7StripDistrict.jpg'];

/*change map image upon click*/
function changeMap(index){
    var myImage = document.getElementById("mapImg");
    myImage.src = mapArray[index];
}


