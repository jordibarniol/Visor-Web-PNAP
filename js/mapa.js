

proj4.defs("EPSG:25831","+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");



$(document).ready(function() {
    

    const mapa = L.map("map").setView([42.592,1.3],11);
    setTimeout(() => {
        mapa.invalidateSize();
    },100);


    const osm=new L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
        {minZoom: 8, maxZoom: 18, attribution: "OpenStreetMap"}).addTo(mapa);


    const serveiTopoCache = new L.tileLayer("https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/topo/GRID3857/{z}/{x}/{y}.jpeg",
        {minZoom: 8, maxZoom: 18, attribution: "ICGC"})


    const serveiOrtoCache = new L.tileLayer("https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/orto/GRID3857/{z}/{x}/{y}.jpeg",
        {minZoom: 8, maxZoom: 18, attribution: "ICGC"})

    

    
    
      
    const pnap = L.Proj.geoJson(limit_pnap,{}).addTo(mapa);
    

    const baseMaps = [
        {
            groupName: "Mapes base",
            layers: {
                
                "OpenStreetMap": osm,
                "Topogràfic": serveiTopoCache,
                "Ortofoto": serveiOrtoCache
                
                
            }
        }
    ];

    const overlays = [
        { 
            groupName : "Límit PNAP",
            layers    : {
                "PNAP": pnap
            }
        }  
    ];
    
    

    
    
    
    
    const options = {
        container_width: "200px",
        container_maxHeight: "850px", 
        group_maxHeight: "80px",
        exclusive: false
    };
    const controlLayers = new L.Control.styledLayerControl(baseMaps, overlays, options);
    mapa.addControl(controlLayers);



    //leaflet control geolocalizacion
    L.control.locate({drawCircle:false}).addTo(mapa);

    L.control.scale({
        imperial: false
      }
      ).addTo(mapa);

    
    

   

});