
function mapInit() {
ymaps.ready(() => {
    console.log(111)

    var moscow_map = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10
    });
  
});
}
export {
    mapInit
}