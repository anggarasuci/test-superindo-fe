
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('provinces').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('provinces').insert([
        {
          code: '11',
          name: 'ACEH',
          island_id: 1,
          dominant_party_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '12',
          name: 'SUMATERA UTARA',
          island_id: 1,
          dominant_party_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '13',
          name: 'SUMATERA BARAT',
          island_id: 1,
          dominant_party_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '14',
          name: 'RIAU',
          island_id: 1,
          dominant_party_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '15',
          name: 'JAMBI',
          island_id: 1,
          dominant_party_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '16',
          name: 'SUMATERA SELATAN',
          island_id: 1,
          dominant_party_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '17',
          name: 'BENGKULU',
          island_id: 1,
          dominant_party_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '18',
          name: 'LAMPUNG',
          island_id: 1,
          dominant_party_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '19',
          name: 'KEPULAUAN BANGKA BELITUNG',
          island_id: 1,
          dominant_party_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '21',
          name: 'KEPULAUAN RIAU',
          island_id: 2,
          dominant_party_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '31',
          name: 'DKI JAKARTA',
          island_id: 2,
          dominant_party_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '32',
          name: 'JAWA BARAT',
          island_id: 3,
          dominant_party_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '33',
          name: 'JAWA TENGAH',
          island_id: 3,
          dominant_party_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '34',
          name: 'DAERAH ISTIMEWA YOGYAKARTA',
          island_id: 3,
          dominant_party_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '35',
          name: 'JAWA TIMUR',
          island_id: 3,
          dominant_party_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36',
          name: 'BANTEN',
          island_id: 3,
          dominant_party_id: 15,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '51',
          name: 'BALI',
          island_id: 5,
          dominant_party_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '52',
          name: 'NUSA TENGGARA BARAT',
          island_id: 5,
          dominant_party_id: 16,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '53',
          name: 'NUSA TENGGARA TIMUR',
          island_id: 5,
          dominant_party_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '61',
          name: 'KALIMANTAN BARAT',
          island_id: 6,
          dominant_party_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '62',
          name: 'KALIMANTAN TENGAH',
          island_id: 6,
          dominant_party_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '63',
          name: 'KALIMANTAN SELATAN',
          island_id: 6,
          dominant_party_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '64',
          name: 'KALIMANTAN TIMUR',
          island_id: 6,
          dominant_party_id: 9,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '65',
          name: 'KALIMANTAN UTARA',
          island_id: 6,
          dominant_party_id: 9,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '71',
          name: 'SULAWESI UTARA',
          island_id: 7,
          dominant_party_id: 10,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '72',
          name: 'SULAWESI TENGAH',
          island_id: 7,
          dominant_party_id: 10,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '73',
          name: 'SULAWESI SELATAN',
          island_id: 7,
          dominant_party_id: 11,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '74',
          name: 'SULAWESI TENGGARA',
          island_id: 7,
          dominant_party_id: 11,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '75',
          name: 'GORONTALO',
          island_id: 7,
          dominant_party_id: 12,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '76',
          name: 'SULAWESI BARAT',
          island_id: 7,
          dominant_party_id: 12,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '81',
          name: 'MALUKU',
          island_id: 8,
          dominant_party_id: 13,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '82',
          name: 'MALUKU UTARA',
          island_id: 8,
          dominant_party_id: 13,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '91',
          name: 'PAPUA',
          island_id: 9,
          dominant_party_id: 14,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '92',
          name: 'PAPUA BARAT',
          island_id: 9,
          dominant_party_id: 14,
          created_by: 1,
          updated_by: 1
        },
      ]);
    });
};
