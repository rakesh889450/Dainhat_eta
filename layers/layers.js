var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Dainhat_1 = new ol.format.GeoJSON();
var features_Dainhat_1 = format_Dainhat_1.readFeatures(json_Dainhat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dainhat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dainhat_1.addFeatures(features_Dainhat_1);
var lyr_Dainhat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dainhat_1, 
                style: style_Dainhat_1,
                popuplayertitle: "Dainhat",
                interactive: true,
    title: 'Dainhat<br />\
    <img src="styles/legend/Dainhat_1_0.png" /> 0.65 - 0.88<br />\
    <img src="styles/legend/Dainhat_1_1.png" /> 0.88 - 1.06<br />\
    <img src="styles/legend/Dainhat_1_2.png" /> 1.06 - 1.2<br />\
    <img src="styles/legend/Dainhat_1_3.png" /> 1.2 - 1.83<br />\
    <img src="styles/legend/Dainhat_1_4.png" /> 1.83 - 2.77<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Dainhat_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Dainhat_1];
lyr_Dainhat_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'WARD_NO_': 'Ward no.:', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ward_area': 'ward_area', 'Integrate': 'Integrated connectivity:', 'BiPnorm': 'BiPnorm', 'cyclometri': 'cyclometri', 'beta': 'beta', 'gam': 'gam', 'eta': 'Eta value:', 'pie': 'pie', 'neywork_st': 'neywork_st', 'nt_norm': 'nt_norm', });
lyr_Dainhat_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'WARD_NO_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ward_area': 'TextEdit', 'Integrate': 'TextEdit', 'BiPnorm': 'TextEdit', 'cyclometri': 'TextEdit', 'beta': 'TextEdit', 'gam': 'TextEdit', 'eta': 'TextEdit', 'pie': 'TextEdit', 'neywork_st': 'TextEdit', 'nt_norm': 'TextEdit', });
lyr_Dainhat_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'WARD_NO_': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ward_area': 'hidden field', 'Integrate': 'hidden field', 'BiPnorm': 'hidden field', 'cyclometri': 'hidden field', 'beta': 'hidden field', 'gam': 'hidden field', 'eta': 'inline label - always visible', 'pie': 'hidden field', 'neywork_st': 'hidden field', 'nt_norm': 'hidden field', });
lyr_Dainhat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});