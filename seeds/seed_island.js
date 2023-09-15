
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('islands').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('islands').insert([
        {name: 'Pulau Sumatera', created_by: 1, updated_by: 1},
        {name: 'Pulau Riau', created_by: 1, updated_by: 1},
        {name: 'Pulau Jawa', created_by: 1, updated_by: 1},
        {name: 'Pulau ???', created_by: 1, updated_by: 1},
        {name: 'Pulau Bali', created_by: 1, updated_by: 1},
        {name: 'Pulau Kalimantan', created_by: 1, updated_by: 1},
        {name: 'Pulau Sulawesi', created_by: 1, updated_by: 1},
        {name: 'Pulau Maluku', created_by: 1, updated_by: 1},
        {name: 'Pulau Papua', created_by: 1, updated_by: 1},
      ]);
    });
};
