
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('districts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('districts').insert([
        {
          code: '360101',
          name: 'Sumur',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360102',
          name: 'Cimanggu',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360103',
          name: 'Cibaliung',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360104',
          name: 'Cikeusik',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360105',
          name: 'Cigeulis',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360106',
          name: 'Panimbang',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360107',
          name: 'Angsana',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360108',
          name: 'Munjul',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360109',
          name: 'Pagelaran',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360110',
          name: 'Bojong',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360111',
          name: 'Picung',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360112',
          name: 'Labuan',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360113',
          name: 'Menes',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360114',
          name: 'Saketi',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360115',
          name: 'Cipeucang',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360116',
          name: 'Jiput',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360117',
          name: 'Mandalawangi',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360118',
          name: 'Cimanuk',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360119',
          name: 'Kaduhejo',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360120',
          name: 'Banjar',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360121',
          name: 'Pandeglang',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360122',
          name: 'Cadasari',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360123',
          name: 'Cisata',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360124',
          name: 'Patia',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360125',
          name: 'Karang Tanjung',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360126',
          name: 'Cikedal',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360127',
          name: 'Cibitung',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360128',
          name: 'Carita',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360129',
          name: 'Sukaresmi',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360130',
          name: 'Mekarjaya',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360131',
          name: 'Sindangresmi',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360132',
          name: 'Pulosari',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360133',
          name: 'Koroncong',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360134',
          name: 'Majasari',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360135',
          name: 'Sobang',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360201',
          name: 'Malingping',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360202',
          name: 'Panggarangan',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360203',
          name: 'Bayah',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360204',
          name: 'Cipanas',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360205',
          name: 'Muncang',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360206',
          name: 'Leuwidamar',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360207',
          name: 'Bojongmanik',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360208',
          name: 'Gunungkencana',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360209',
          name: 'Banjarsari',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360210',
          name: 'Cileles',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360211',
          name: 'Cimarga',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360212',
          name: 'Sajira',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360213',
          name: 'Maja',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360214',
          name: 'Rangkasbitung',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360215',
          name: 'Warunggunung',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360216',
          name: 'Cijaku',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360217',
          name: 'Cikulur',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360218',
          name: 'Cibadak',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360219',
          name: 'Cibeber',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360220',
          name: 'Cilograng',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360221',
          name: 'Wanasalam',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360222',
          name: 'Sobang',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360223',
          name: 'Curug bitung',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360224',
          name: 'Kalanganyar',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360225',
          name: 'Lebakgedong',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360226',
          name: 'Cihara',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360227',
          name: 'Cirinten',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360228',
          name: 'Cigemlong',
          city_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360301',
          name: 'Balaraja',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360302',
          name: 'Jayanti',
          city_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360303',
          name: 'Tigaraksa',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360304',
          name: 'Jambe',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360305',
          name: 'Cisoka',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360306',
          name: 'Kresek',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360307',
          name: 'Kronjo',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360308',
          name: 'Mauk',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360309',
          name: 'Kemiri',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360310',
          name: 'Sukadiri',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360311',
          name: 'Rajeg',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360312',
          name: 'Pasar Kemis',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360313',
          name: 'Teluknaga',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360314',
          name: 'Kosambi',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360315',
          name: 'Pakuhaji',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360316',
          name: 'Sepatan',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360317',
          name: 'Curug',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360318',
          name: 'Cikupa',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360319',
          name: 'Panongan',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360320',
          name: 'Legok',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360322',
          name: 'Pagedangan',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360323',
          name: 'Cisauk',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360327',
          name: 'Sukamulya',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360328',
          name: 'Kelapa Dua',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360329',
          name: 'Sindang Jaya',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360330',
          name: 'Sepatan Timur',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360331',
          name: 'Solear',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360332',
          name: 'Gunung Kaler',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360333',
          name: 'Mekar Baru',
          city_id: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360405',
          name: 'Kramatwatu',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360406',
          name: 'Waringinkurung',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360407',
          name: 'Bojonegara',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360408',
          name: 'Pulo Ampel',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360409',
          name: 'Ciruas',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360411',
          name: 'Kragilan',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360412',
          name: 'Pontang',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360413',
          name: 'Tirtayasa',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360414',
          name: 'Tanara',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360415',
          name: 'Cikande',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360416',
          name: 'Kibin',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360417',
          name: 'Carenang',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360418',
          name: 'Binuang',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360419',
          name: 'Petir',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360420',
          name: 'Tunjung Teja',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360422',
          name: 'Baros',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360423',
          name: 'Cikeusal',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360424',
          name: 'Pamarayan',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360425',
          name: 'Kopo',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360426',
          name: 'Jawilan',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360427',
          name: 'Ciomas',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360428',
          name: 'Pabuaran',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360429',
          name: 'Padarincang',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360430',
          name: 'Anyar',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360431',
          name: 'Cinangka',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360432',
          name: 'Mancak',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360433',
          name: 'Gunung Sari',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360434',
          name: 'Bandung',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '360435',
          name: 'Lebak Wangi',
          city_id: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367101',
          name: 'Tangerang',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367102',
          name: 'Jatiuwung',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367103',
          name: 'Batuceper',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367104',
          name: 'Benda',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367105',
          name: 'Cipondoh',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367106',
          name: 'Ciledug',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367107',
          name: 'Karawaci',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367108',
          name: 'Periuk',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367109',
          name: 'Cibodas',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367110',
          name: 'Neglasari',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367111',
          name: 'Pinang',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367112',
          name: 'Karang Tengah',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367113',
          name: 'Larangan',
          city_id: 5,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367201',
          name: 'Cibeber',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367202',
          name: 'Cilegon',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367203',
          name: 'Pulomerak',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367204',
          name: 'Ciwandan',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367205',
          name: 'Jombang',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367206',
          name: 'Gerogol',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367207',
          name: 'Purwakarta',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367208',
          name: 'Citangkil',
          city_id: 6,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367301',
          name: 'Serang',
          city_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367302',
          name: 'Kasemen',
          city_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367303',
          name: 'Walantaka',
          city_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367304',
          name: 'Curug',
          city_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367305',
          name: 'Cipocok Jaya',
          city_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367306',
          name: 'Taktakan',
          city_id: 7,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367401',
          name: 'Serpong',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367402',
          name: 'Serpong Utara',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367403',
          name: 'Pondok Aren',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367404',
          name: 'Ciputat',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367405',
          name: 'Ciputat Timur',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367406',
          name: 'Pamulang',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '367407',
          name: 'Setu',
          city_id: 8,
          created_by: 1,
          updated_by: 1
        }
      ]);
    });
};
