var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Kaart_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kaart.maaamet.ee/wms/kaart",
                              attributions: ' ',
                              params: {
                                "LAYERS": "MA-KAART",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Kaart',
                            popuplayertitle: 'Kaart',
                            type: 'base',
                            opacity: 0.920000,
                            
                            
                          });
              wms_layers.push([lyr_Kaart_1, 0]);
var lyr_PRIAPllumassiivid_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kls.pria.ee/geoserver/pria_avalik/ows",
                              attributions: ' ',
                              params: {
                                "LAYERS": "pria_massiivid",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'PRIA Põllumassiivid',
                            popuplayertitle: 'PRIA Põllumassiivid',
                            type: '',
                            opacity: 0.432000,
                            
                            
                          });
              wms_layers.push([lyr_PRIAPllumassiivid_2, 0]);
var lyr_Eestimaakatastrikatastriksused_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://inspire.geoportaal.ee/geoserver/CP_katastriyksused/wms?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Eesti maakatastri katastriüksused',
                            popuplayertitle: 'Eesti maakatastri katastriüksused',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Eestimaakatastrikatastriksused_3, 0]);
var lyr_asustusksusepiir_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://kaart.maaamet.ee/wms/alus?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ASUSTUSPIIR_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'asustusüksuse piir',
                            popuplayertitle: 'asustusüksuse piir',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_asustusksusepiir_4, 0]);
var format_avk_massiividPolygon_5 = new ol.format.GeoJSON();
var features_avk_massiividPolygon_5 = format_avk_massiividPolygon_5.readFeatures(json_avk_massiividPolygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_avk_massiividPolygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_avk_massiividPolygon_5.addFeatures(features_avk_massiividPolygon_5);
var lyr_avk_massiividPolygon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_avk_massiividPolygon_5, 
                style: style_avk_massiividPolygon_5,
                popuplayertitle: 'avk_massiividPolygon',
                interactive: false,
                title: '<img src="styles/legend/avk_massiividPolygon_5.png" /> avk_massiividPolygon'
            });
var format_avk_massiividPolygon_6 = new ol.format.GeoJSON();
var features_avk_massiividPolygon_6 = format_avk_massiividPolygon_6.readFeatures(json_avk_massiividPolygon_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_avk_massiividPolygon_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_avk_massiividPolygon_6.addFeatures(features_avk_massiividPolygon_6);
var lyr_avk_massiividPolygon_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_avk_massiividPolygon_6, 
                style: style_avk_massiividPolygon_6,
                popuplayertitle: 'avk_massiividPolygon',
                interactive: false,
                title: 'avk_massiividPolygon'
            });
var format_Talioder2026_7 = new ol.format.GeoJSON();
var features_Talioder2026_7 = format_Talioder2026_7.readFeatures(json_Talioder2026_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talioder2026_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talioder2026_7.addFeatures(features_Talioder2026_7);
var lyr_Talioder2026_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Talioder2026_7, 
                style: style_Talioder2026_7,
                popuplayertitle: 'Talioder 2026',
                interactive: true,
                title: '<img src="styles/legend/Talioder2026_7.png" /> Talioder 2026'
            });
var format_TalioderFIE_8 = new ol.format.GeoJSON();
var features_TalioderFIE_8 = format_TalioderFIE_8.readFeatures(json_TalioderFIE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalioderFIE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalioderFIE_8.addFeatures(features_TalioderFIE_8);
var lyr_TalioderFIE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TalioderFIE_8, 
                style: style_TalioderFIE_8,
                popuplayertitle: 'Talioder FIE',
                interactive: true,
                title: '<img src="styles/legend/TalioderFIE_8.png" /> Talioder FIE'
            });
var format_Polduba_9 = new ol.format.GeoJSON();
var features_Polduba_9 = format_Polduba_9.readFeatures(json_Polduba_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polduba_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polduba_9.addFeatures(features_Polduba_9);
var lyr_Polduba_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polduba_9, 
                style: style_Polduba_9,
                popuplayertitle: 'Polduba',
                interactive: true,
                title: '<img src="styles/legend/Polduba_9.png" /> Polduba'
            });
var format_Taliraps_10 = new ol.format.GeoJSON();
var features_Taliraps_10 = format_Taliraps_10.readFeatures(json_Taliraps_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taliraps_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taliraps_10.addFeatures(features_Taliraps_10);
var lyr_Taliraps_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taliraps_10, 
                style: style_Taliraps_10,
                popuplayertitle: 'Taliraps',
                interactive: true,
                title: '<img src="styles/legend/Taliraps_10.png" /> Taliraps'
            });
var format_Hernes_11 = new ol.format.GeoJSON();
var features_Hernes_11 = format_Hernes_11.readFeatures(json_Hernes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hernes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hernes_11.addFeatures(features_Hernes_11);
var lyr_Hernes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hernes_11, 
                style: style_Hernes_11,
                popuplayertitle: 'Hernes',
                interactive: true,
                title: '<img src="styles/legend/Hernes_11.png" /> Hernes'
            });
var format_Suvioder_12 = new ol.format.GeoJSON();
var features_Suvioder_12 = format_Suvioder_12.readFeatures(json_Suvioder_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suvioder_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suvioder_12.addFeatures(features_Suvioder_12);
var lyr_Suvioder_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suvioder_12, 
                style: style_Suvioder_12,
                popuplayertitle: 'Suvioder',
                interactive: true,
                title: '<img src="styles/legend/Suvioder_12.png" /> Suvioder'
            });
var format_Talinisu_13 = new ol.format.GeoJSON();
var features_Talinisu_13 = format_Talinisu_13.readFeatures(json_Talinisu_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talinisu_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talinisu_13.addFeatures(features_Talinisu_13);
var lyr_Talinisu_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Talinisu_13, 
                style: style_Talinisu_13,
                popuplayertitle: 'Talinisu',
                interactive: true,
                title: '<img src="styles/legend/Talinisu_13.png" /> Talinisu'
            });
var format_SuvioderFIE_14 = new ol.format.GeoJSON();
var features_SuvioderFIE_14 = format_SuvioderFIE_14.readFeatures(json_SuvioderFIE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuvioderFIE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuvioderFIE_14.addFeatures(features_SuvioderFIE_14);
var lyr_SuvioderFIE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuvioderFIE_14, 
                style: style_SuvioderFIE_14,
                popuplayertitle: 'Suvioder FIE',
                interactive: true,
                title: '<img src="styles/legend/SuvioderFIE_14.png" /> Suvioder FIE'
            });
var format_TalinisuFIE_15 = new ol.format.GeoJSON();
var features_TalinisuFIE_15 = format_TalinisuFIE_15.readFeatures(json_TalinisuFIE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalinisuFIE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalinisuFIE_15.addFeatures(features_TalinisuFIE_15);
var lyr_TalinisuFIE_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TalinisuFIE_15, 
                style: style_TalinisuFIE_15,
                popuplayertitle: 'Talinisu FIE',
                interactive: true,
                title: '<img src="styles/legend/TalinisuFIE_15.png" /> Talinisu FIE'
            });
var format_Suvinisu_16 = new ol.format.GeoJSON();
var features_Suvinisu_16 = format_Suvinisu_16.readFeatures(json_Suvinisu_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suvinisu_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suvinisu_16.addFeatures(features_Suvinisu_16);
var lyr_Suvinisu_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suvinisu_16, 
                style: style_Suvinisu_16,
                popuplayertitle: 'Suvinisu',
                interactive: true,
                title: '<img src="styles/legend/Suvinisu_16.png" /> Suvinisu'
            });
var format_Suvinisu_17 = new ol.format.GeoJSON();
var features_Suvinisu_17 = format_Suvinisu_17.readFeatures(json_Suvinisu_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suvinisu_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suvinisu_17.addFeatures(features_Suvinisu_17);
var lyr_Suvinisu_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suvinisu_17, 
                style: style_Suvinisu_17,
                popuplayertitle: 'Suvinisu',
                interactive: true,
                title: '<img src="styles/legend/Suvinisu_17.png" /> Suvinisu'
            });
var lyr_Kulanimi_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://kaart.maaamet.ee/wms/alus?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "kylanimed_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Kula nimi',
                            popuplayertitle: 'Kula nimi',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kulanimi_18, 0]);
var format_omavalitsus_19 = new ol.format.GeoJSON();
var features_omavalitsus_19 = format_omavalitsus_19.readFeatures(json_omavalitsus_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_omavalitsus_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_omavalitsus_19.addFeatures(features_omavalitsus_19);
var lyr_omavalitsus_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_omavalitsus_19, 
                style: style_omavalitsus_19,
                popuplayertitle: 'omavalitsus',
                interactive: true,
                title: '<img src="styles/legend/omavalitsus_19.png" /> omavalitsus'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kaart_1.setVisible(true);lyr_PRIAPllumassiivid_2.setVisible(true);lyr_Eestimaakatastrikatastriksused_3.setVisible(true);lyr_asustusksusepiir_4.setVisible(true);lyr_avk_massiividPolygon_5.setVisible(true);lyr_avk_massiividPolygon_6.setVisible(true);lyr_Talioder2026_7.setVisible(true);lyr_TalioderFIE_8.setVisible(true);lyr_Polduba_9.setVisible(true);lyr_Taliraps_10.setVisible(true);lyr_Hernes_11.setVisible(true);lyr_Suvioder_12.setVisible(true);lyr_Talinisu_13.setVisible(true);lyr_SuvioderFIE_14.setVisible(true);lyr_TalinisuFIE_15.setVisible(true);lyr_Suvinisu_16.setVisible(true);lyr_Suvinisu_17.setVisible(true);lyr_Kulanimi_18.setVisible(true);lyr_omavalitsus_19.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kaart_1,lyr_PRIAPllumassiivid_2,lyr_Eestimaakatastrikatastriksused_3,lyr_asustusksusepiir_4,lyr_avk_massiividPolygon_5,lyr_avk_massiividPolygon_6,lyr_Talioder2026_7,lyr_TalioderFIE_8,lyr_Polduba_9,lyr_Taliraps_10,lyr_Hernes_11,lyr_Suvioder_12,lyr_Talinisu_13,lyr_SuvioderFIE_14,lyr_TalinisuFIE_15,lyr_Suvinisu_16,lyr_Suvinisu_17,lyr_Kulanimi_18,lyr_omavalitsus_19];
lyr_avk_massiividPolygon_5.set('fieldAliases', {'xy_id': 'xy_id', 'pindala': 'pindala', 'toetusoigu': 'toetusoigu', 'maakasutus': 'maakasutus', 'kultuur': 'kultuur', 'maakond': 'maakond', 'vald': 'vald', 'kirje_lood': 'kirje_lood', 'result_id': 'result_id', });
lyr_avk_massiividPolygon_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'xy_id': 'xy_id', 'pindala': 'pindala', 'toetusoigu': 'toetusoigu', 'maakasutus': 'maakasutus', 'maakond': 'maakond', 'vald': 'vald', 'result_id': 'result_id', });
lyr_Talioder2026_7.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_TalioderFIE_8.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_Polduba_9.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'massiiv': 'massiiv', 'kataster': 'kataster', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', });
lyr_Taliraps_10.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_Hernes_11.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_Suvioder_12.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_Talinisu_13.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_SuvioderFIE_14.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_TalinisuFIE_15.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_Suvinisu_16.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_Suvinisu_17.set('fieldAliases', {'kirjeldus': 'kirjeldus', 'pollunr': 'pollunr', 'kasutusoig': 'kasutusoig', 'otstarbed': 'otstarbed', 'pindala': 'pindala', 'okoalad_ha': 'okoalad_ha', 'massiiv': 'massiiv', 'kataster': 'kataster', 'toetus_v_k': 'toetus_v_k', 'mahe_mk': 'mahe_mk', 'kultuur': 'kultuur', 'maatyyp': 'maatyyp', 'muudetud': 'muudetud', 'muutja': 'muutja', 'niit_sta': 'niit_sta', 'niit_kpv_v': 'niit_kpv_v', 'niit_kpv_h': 'niit_kpv_h', });
lyr_omavalitsus_19.set('fieldAliases', {'ONIMI': 'ONIMI', 'OKOOD': 'OKOOD', 'MNIMI': 'MNIMI', 'MKOOD': 'MKOOD', 'TYYP': 'TYYP', 'EKSPORT': 'EKSPORT', });
lyr_avk_massiividPolygon_5.set('fieldImages', {'xy_id': 'TextEdit', 'pindala': 'TextEdit', 'toetusoigu': 'TextEdit', 'maakasutus': 'TextEdit', 'kultuur': 'TextEdit', 'maakond': 'TextEdit', 'vald': 'TextEdit', 'kirje_lood': 'DateTime', 'result_id': 'TextEdit', });
lyr_avk_massiividPolygon_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'xy_id': 'TextEdit', 'pindala': 'TextEdit', 'toetusoigu': 'TextEdit', 'maakasutus': 'TextEdit', 'maakond': 'TextEdit', 'vald': 'TextEdit', 'result_id': 'TextEdit', });
lyr_Talioder2026_7.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_TalioderFIE_8.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_Polduba_9.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', });
lyr_Taliraps_10.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_Hernes_11.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_Suvioder_12.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_Talinisu_13.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_SuvioderFIE_14.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_TalinisuFIE_15.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_Suvinisu_16.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_Suvinisu_17.set('fieldImages', {'kirjeldus': 'TextEdit', 'pollunr': 'TextEdit', 'kasutusoig': 'TextEdit', 'otstarbed': 'TextEdit', 'pindala': 'TextEdit', 'okoalad_ha': 'TextEdit', 'massiiv': 'TextEdit', 'kataster': 'TextEdit', 'toetus_v_k': 'TextEdit', 'mahe_mk': 'TextEdit', 'kultuur': 'TextEdit', 'maatyyp': 'TextEdit', 'muudetud': 'TextEdit', 'muutja': 'TextEdit', 'niit_sta': 'TextEdit', 'niit_kpv_v': 'TextEdit', 'niit_kpv_h': 'TextEdit', });
lyr_omavalitsus_19.set('fieldImages', {'ONIMI': 'TextEdit', 'OKOOD': 'TextEdit', 'MNIMI': 'TextEdit', 'MKOOD': 'TextEdit', 'TYYP': 'TextEdit', 'EKSPORT': 'DateTime', });
lyr_avk_massiividPolygon_5.set('fieldLabels', {'xy_id': 'no label', 'pindala': 'no label', 'toetusoigu': 'no label', 'maakasutus': 'no label', 'kultuur': 'no label', 'maakond': 'no label', 'vald': 'no label', 'kirje_lood': 'no label', 'result_id': 'no label', });
lyr_avk_massiividPolygon_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'xy_id': 'no label', 'pindala': 'no label', 'toetusoigu': 'no label', 'maakasutus': 'no label', 'maakond': 'no label', 'vald': 'no label', 'result_id': 'no label', });
lyr_Talioder2026_7.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'inline label - always visible', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_TalioderFIE_8.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_Polduba_9.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'inline label - always visible', 'otstarbed': 'no label', 'pindala': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', });
lyr_Taliraps_10.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_Hernes_11.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_Suvioder_12.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_Talinisu_13.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_SuvioderFIE_14.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_TalinisuFIE_15.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_Suvinisu_16.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_Suvinisu_17.set('fieldLabels', {'kirjeldus': 'no label', 'pollunr': 'no label', 'kasutusoig': 'no label', 'otstarbed': 'no label', 'pindala': 'no label', 'okoalad_ha': 'no label', 'massiiv': 'no label', 'kataster': 'no label', 'toetus_v_k': 'no label', 'mahe_mk': 'no label', 'kultuur': 'no label', 'maatyyp': 'no label', 'muudetud': 'no label', 'muutja': 'no label', 'niit_sta': 'no label', 'niit_kpv_v': 'no label', 'niit_kpv_h': 'no label', });
lyr_omavalitsus_19.set('fieldLabels', {'ONIMI': 'no label', 'OKOOD': 'no label', 'MNIMI': 'no label', 'MKOOD': 'no label', 'TYYP': 'no label', 'EKSPORT': 'no label', });
lyr_omavalitsus_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});