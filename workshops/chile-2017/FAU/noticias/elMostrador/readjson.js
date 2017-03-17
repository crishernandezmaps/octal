let data = require('./../../../data/economia.json');
let d = data.result.results;

for (var i = 0; i < d.length; i++) {
  let resources = d[i].resources;
  let result = [];
  for (let i = 0; i < resources.length; i++) {
    let name = resources[i].name;
    let created = resources[i].created;
    let id = resources[i].id;
    let url = resources[i].url;
    result.push({
      nombre: name,
      fecha_creacion: created,
      codigo_id: id,
      link: url
    });
  }
  console.log(result);
}
