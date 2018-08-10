import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import sync from 'ol-hashed'; 
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Modify from 'ol/interaction/Modify';
import Draw from 'ol/interaction/Draw';
import Snap from 'ol/interaction/Snap';

const source = new VectorSource();
const layer = new VectorLayer({
    source: source
});
const clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    source.clear();
});
const format = new GeoJSON({featureProjection: 'EPSG:3857'});
const download = document.getElementById('download');
source.on('change', function() {
    const features = source.getFeatures();
    const json = 'data:text/json;charset=utf-8,' + json;
});
const map = new Map({
    target: 'map-container',
    view: new View({
        center: [0, 0],
        zoom: 2
    })   
});

map.addLayer(layer);
map.addInteraction(new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON]
  }));
  map.addInteraction(new Modify({
      source: source
  }));
  map.addInteraction(new Draw({
      type: 'Polygon',
      source: source
  }));
  map.addInteraction(new Snap({
      source: source
  }));
sync(map); 
