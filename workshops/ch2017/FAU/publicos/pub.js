// Data from datos.gob.cl

// DEPENDENCIES
const request = require('request');
const fs = require('fs');
const opn = require('opn');
const colors = require('colors');

/// INGRESAR Y EDITAR ESTA PARTE DEL CODIGO
const options = {
    termino_busqueda: '', // INGRESA EL TÉRMINO QUE DESEAS BUSCAR
    url_escogida: '' // INGRESA LA URL A LA BASE DE DATOS ESCOGIDA
}

// COMPILE API CALL
const base = 'http://datos.gob.cl/api/3/action/package_search?q=';
const call = base + options.termino_busqueda;

// CKAN API CALL
request(call, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body)
      let res = data.result.results;
      let down = [];
      for (let i = 0; i < res.length; i++) {
          let author = res[i].organization.name;
          let main = res[i].maintainer;
          let resources = res[i].resources;
          for (let i = 0; i < resources.length; i++) {
              let data_name = resources[i].name;
              let data_date = resources[i].created;
              let data_url = resources[i].url;
              let data_format = resources[i].format;
              down.push({
                  nombre: data_name,
                  organizacion: author,
                  responsable: main,
                  fecha_creacion: data_date,
                  link: data_url,
                  formato: data_format
              });
          };

      };
      // Print name, organization and link of each dataset
      for (let i = 0; i < down.length; i++) {
        console.log(down[i].nombre + ' | '.yellow + down[i].organizacion  + ' | '.yellow + down[i].link);
      }

      // Print N° of datasets founded
      console.log('\n' + 'N° Bases de Datos: ' + down.length);

      // Download selected data
      if (options.url_escogida.length > 0) {
        console.log('Una descarga se abrió en tu explorador!!!'.green);
        opn(options.url_escogida)
      } else {
        console.log('\n' + 'escogiste una URL?'.red + '\n');
      }

    }
})

// Correlacionar CL con otra variable.
// Visualizar en CARTO y en un Scaterplot
// Post
