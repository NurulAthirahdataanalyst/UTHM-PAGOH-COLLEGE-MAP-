ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([102.722992, 2.142216, 102.734519, 2.148045]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UTHM_FOOTNOTEBLOCK_1 = new ol.format.GeoJSON();
var features_UTHM_FOOTNOTEBLOCK_1 = format_UTHM_FOOTNOTEBLOCK_1.readFeatures(json_UTHM_FOOTNOTEBLOCK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTHM_FOOTNOTEBLOCK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTHM_FOOTNOTEBLOCK_1.addFeatures(features_UTHM_FOOTNOTEBLOCK_1);
var lyr_UTHM_FOOTNOTEBLOCK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTHM_FOOTNOTEBLOCK_1, 
                style: style_UTHM_FOOTNOTEBLOCK_1,
                popuplayertitle: 'UTHM_FOOTNOTE(BLOCK)',
                interactive: true,
    title: 'UTHM_FOOTNOTE(BLOCK)<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_0.png" /> ARKED ANGGERIK(KAFETARIA)<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_1.png" /> DEWAN BESAR ASRAMA<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_2.png" /> SURAU<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_3.png" /> <br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_4.png" /> RUMAH FELO<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_5.png" /> STOR PENYIMPANAN BARANG<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_6.png" /> PONDOK PENGAWAL KESELAMATAN<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_7.png" /> TEMPAT PEMBUANGAN SAMPAH<br />\
    <img src="styles/legend/UTHM_FOOTNOTEBLOCK_1_8.png" /> PARKING<br />' });
var format_UTHMDIRECTORYNAME_2 = new ol.format.GeoJSON();
var features_UTHMDIRECTORYNAME_2 = format_UTHMDIRECTORYNAME_2.readFeatures(json_UTHMDIRECTORYNAME_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTHMDIRECTORYNAME_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTHMDIRECTORYNAME_2.addFeatures(features_UTHMDIRECTORYNAME_2);
var lyr_UTHMDIRECTORYNAME_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTHMDIRECTORYNAME_2, 
                style: style_UTHMDIRECTORYNAME_2,
                popuplayertitle: 'UTHM DIRECTORY ( NAME )',
                interactive: true,
    title: 'UTHM DIRECTORY ( NAME )<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_0.png" /> BILIK AV<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_1.png" /> BILIK GERAKAN MAJLIS KEPIMPINAN PELAJAR(MKP)<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_2.png" /> BILIK MASAKAN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_3.png" /> BILIK PEMBELAJARAN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_4.png" /> CHIPMART<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_5.png" /> DOBI<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_6.png" /> FARMASI PUSAT KESIHATAN UNIVERSITI (PKU)<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_7.png" /> PARCEL OASIS<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_8.png" /> PEJABAT KOLEJ KEDIAMAN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_9.png" /> PENTAS UTAMA<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_10.png" /> PUSAT KESIHATAN UNIVERSITI(PKU)<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_11.png" /> RUANG SOLAT MUSLIMAT<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_12.png" /> RUANG SOLAT MUSLIMIN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_13.png" /> RUMAH OKU<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_14.png" /> RUMAH PEMBANTU FELO<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_15.png" /> RUMAH PREMIUM<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_16.png" /> STOR<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_17.png" /> STUDENT MINI MART<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_18.png" /> TANDAS LELAKI<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_19.png" /> TANDAS OKU<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_20.png" /> TANDAS PEREMPUAN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_21.png" /> TEMPAT WUDHU\' MUSLIMAT<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_22.png" /> TEMPAT WUDHU\' MUSLIMIN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_23.png" /> <br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_24.png" /> AIR BALANG<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_25.png" /> AKAK WESTERN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_26.png" /> MESIN ATM BANK RAKYAT<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_27.png" /> MESIN ATM RHB BANK<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_28.png" /> NASI LEMAK & AYAM GUNTING<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_29.png" /> PANAS EXPRESS <br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_30.png" /> SECANGKIR CAFE<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_31.png" /> WARUNG WAK<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_32.png" /> WAWA STUDENT CAFE<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_33.png" /> YUSUF DELICIOUS DESSERT<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_34.png" /> ISMAIL AYUNI<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_35.png" /> PANAS EXPRESS<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_36.png" /> SHAWARMA 4U<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_37.png" /> THE TASTE HUB<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_38.png" /> WAN X DAYA<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_39.png" /> HABANG\'S BOB STALL<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_40.png" /> LOKCING ODEN<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_41.png" /> ZESTY CHICKEN & RESEPI CIK KU<br />\
    <img src="styles/legend/UTHMDIRECTORYNAME_2_42.png" /> MESIN LAYAN DIRI FARM FRESH<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_UTHM_FOOTNOTEBLOCK_1.setVisible(true);lyr_UTHMDIRECTORYNAME_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UTHM_FOOTNOTEBLOCK_1,lyr_UTHMDIRECTORYNAME_2];
lyr_UTHM_FOOTNOTEBLOCK_1.set('fieldAliases', {'BLOCK': 'BLOCK', 'NAME': 'NAME', });
lyr_UTHMDIRECTORYNAME_2.set('fieldAliases', {'LEVEL': 'LEVEL', 'ROOM NO': 'ROOM NO', 'NAME': 'NAME', 'JADUAL': 'JADUAL', });
lyr_UTHM_FOOTNOTEBLOCK_1.set('fieldImages', {'BLOCK': 'TextEdit', 'NAME': 'TextEdit', });
lyr_UTHMDIRECTORYNAME_2.set('fieldImages', {'LEVEL': 'TextEdit', 'ROOM NO': 'TextEdit', 'NAME': 'ExternalResource', 'JADUAL': 'TextEdit', });
lyr_UTHM_FOOTNOTEBLOCK_1.set('fieldLabels', {'BLOCK': 'header label - visible with data', 'NAME': 'inline label - always visible', });
lyr_UTHMDIRECTORYNAME_2.set('fieldLabels', {'LEVEL': 'inline label - always visible', 'ROOM NO': 'inline label - always visible', 'NAME': 'inline label - always visible', 'JADUAL': 'no label', });
lyr_UTHMDIRECTORYNAME_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});