
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('caleg').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('caleg').insert([
        {
          name: 'Ir. Thoni Fathoni Mukson',
          party_id: 1,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'DR. Muhammad Imdadun Rahmat',
          party_id: 1,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Iis Apriyani',
          party_id: 1,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Erma',
          party_id: 1,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Wahyu Widiya Suryani Ning Waluyo',
          party_id: 1,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Gozali Munir, S. THI',
          party_id: 1,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ali Zamroni, S. Sos',
          party_id: 2,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Anda, SE., MM',
          party_id: 2,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Lista Hurustiati, SH., M.H',
          party_id: 2,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Syahruddin, SH., MH',
          party_id: 2,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Soraya',
          party_id: 2,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Jaka Setiawan, ST, M.Si',
          party_id: 2,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Muchamad Hasbi Asyidiki Jayabaya, S. H.',
          party_id: 3,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tia Rahmania, M. Psi Psikolog',
          party_id: 3,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'R. Ariyadi Padmanegara',
          party_id: 3,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Muhadi Takijo',
          party_id: 3,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yuyi Rohmatunisa, S.Pd',
          party_id: 3,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sandy Chusan Jacinta Manuhutu, M.P',
          party_id: 3,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Adde Rosi Khoerunnisa, S. Sos., M. Si',
          party_id: 4,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Dadan Muchammsd R., S.E',
          party_id: 4,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sukmawati Sultan, A.Md',
          party_id: 4,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Gousta Feriza, S.H., M.H',
          party_id: 4,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'A. Dadan Suryana, S.Sos',
          party_id: 4,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Shanty Alda Nathalia, S. H',
          party_id: 4,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rizka Amalia R. Natakusumah, BA Sociology',
          party_id: 5,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ade Wahyu Mulki',
          party_id: 5,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yudhistira Firmansyah, SH',
          party_id: 5,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Merry Meilinda',
          party_id: 5,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Asep Awaludin, SE',
          party_id: 5,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tusnu Rochmat, SH',
          party_id: 5,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Anhar, SE',
          party_id: 7,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. E. Syamsul Bachri Arsudin',
          party_id: 7,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Eliya, MARS',
          party_id: 7,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tubagus Jib Muhibbin, SH, MM, MBA',
          party_id: 7,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Rusdiana Bardian, MM',
          party_id: 7,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ilam AM., SH',
          party_id: 7,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. H. R. Achmad Dimyati Natakusumah',
          party_id: 8,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'KH. Ahmad Sadeli Karim, Lc',
          party_id: 8,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nisa Al- Azizah, BBA (Hons)',
          party_id: 8,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Syamsu Hilal, MP',
          party_id: 8,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tri Kusumasari, S.S',
          party_id: 8,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Sanuji Pentamarta, S. IP',
          party_id: 8,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Beni Pramula',
          party_id: 9,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Aap Aptadi',
          party_id: 9,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Meika Rachel Wangke, SS, M. Si',
          party_id: 9,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Stien Maria Schouten, SE',
          party_id: 9,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Basuki Hadisukarta, SH',
          party_id: 9,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Harry Purdianto, S. Ip, M. Sc',
          party_id: 10,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Iip Miftahul Choiry, S. Pd.I',
          party_id: 10,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Gita Laksita, S. Pd',
          party_id: 10,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Abdul Halim, SH. MM',
          party_id: 10,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Evi Nurul Felayati',
          party_id: 10,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Usep Saepudin, S. HI',
          party_id: 10,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Firman Harefa, S. H',
          party_id: 11,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Johannases Boyke Apriadi Nugroho',
          party_id: 11,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Deasy Setiawati',
          party_id: 11,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Franky Tjokrosaputro',
          party_id: 11,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ika Maylina Susan',
          party_id: 11,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Riska Puji Astuti',
          party_id: 11,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'TB. Dedy Miting Gumelar',
          party_id: 12,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Imam Hussaida, S.T',
          party_id: 12,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Eneng Humaeroh, S. Pd. I., M. Ud',
          party_id: 12,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Adi Wicaksono, SE., ME',
          party_id: 12,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rika Rahmawati, ST., MT ',
          party_id: 12,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ade Mustagrifin, S. E. sy',
          party_id: 12,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. H. Adang Supandi',
          party_id: 13,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hengki Irawan',
          party_id: 13,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Widat, SH.',
          party_id: 13,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Fiska Sulistywati',
          party_id: 13,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Newfone Arthur Rumimpunu, SH',
          party_id: 13,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Joko Santoso, S. Sn',
          party_id: 13,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Vivi Sumantri Jayaba, S. Sos., M. Si',
          party_id: 14,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rizki Aulia Rahman Natakusumah',
          party_id: 14,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Herman Firdaus',
          party_id: 14,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Ratu Siti Romlah',
          party_id: 14,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Muhammad Riyad',
          party_id: 14,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Khoirul Umam',
          party_id: 14,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'KH. NAHRUL BADRI, SQ, MA',
          party_id: 15,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Mahmud Fauzy',
          party_id: 15,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nyimas Nining Rachman, SH',
          party_id: 15,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Chairi Inajah',
          party_id: 15,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Bambang Iswahyanto',
          party_id: 15,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Anshori Baity',
          party_id: 16,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Lia Murliana Angrahini',
          party_id: 16,
          dapil_id: 1,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Wahyu Papat Juni Romadonia',
          party_id: 1,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Suryadi Hendarman, MM',
          party_id: 1,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Ade Miftah, SE. MM',
          party_id: 1,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Akhmad Asghori, M. Si',
          party_id: 1,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sugiarto, SE',
          party_id: 1,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nagalita',
          party_id: 1,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Desmond Junaidi Mahesa, SH., MH',
          party_id: 2,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dorrotun Nafisah',
          party_id: 2,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Moh. Hatta Soerotinoyo, SE, MM',
          party_id: 2,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'dr. Hj. Nita Gilik P, MM',
          party_id: 2,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tarli Sutrisno, SE, M. Pd',
          party_id: 2,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Fachrul Rozie',
          party_id: 2,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ichsan Soelistio',
          party_id: 3,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Nana Sumarna',
          party_id: 3,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dewi Wahyuni, S.H',
          party_id: 3,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Reza Nuruddin A. Barmawi',
          party_id: 3,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ronny Berty Talapessy, S.H., M.H',
          party_id: 3,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Melfa Rosdiana Uli Manullang',
          party_id: 3,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Tubagus Haerul Jaman, S.E',
          party_id: 4,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. H. Mohammad Aly Yahya',
          party_id: 4,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dewi Paramatasari',
          party_id: 4,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Giofedi, S.H., M.H',
          party_id: 4,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Fakih Usman',
          party_id: 4,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Rinie Amaluddin, S. H., M. Si',
          party_id: 4,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. H. Mamat Rahayu Abdullah, MM',
          party_id: 5,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ranta Soeharta',
          party_id: 5,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Intan Azizah',
          party_id: 5,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Wahyudin Djahidi',
          party_id: 5,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Risya Azzahra Rahimah Natakusumah',
          party_id: 5,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Iim Hujaemi, SE',
          party_id: 5,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Aminul Hijri',
          party_id: 6,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Diana Meilany, S. E',
          party_id: 6,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. R. S. Purbo Asmoro',
          party_id: 7,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Didi Sunardi, M. Si',
          party_id: 7,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Laksamana TNI (Purn). Yutti S Halalin, SH',
          party_id: 7,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Laksamana Muda TNI (Purn) Drs. Sony Santoso',
          party_id: 7,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. TB. Lucky Kaking',
          party_id: 7,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Jullya Feronica, SE',
          party_id: 7,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'DR. H. Jazuli Juwaini, MA',
          party_id: 8,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ei Nurul Khotimah',
          party_id: 8,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Eman Sukirman, SE, M. Si',
          party_id: 8,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yemmelia',
          party_id: 8,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Moh. Fikri',
          party_id: 8,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Mohammad Safari',
          party_id: 8,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Brigjen Pol. Purn. H. Heru Februanto',
          party_id: 9,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Andi Cakra Wahyudi, SE, MBA',
          party_id: 9,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Navira Araya Tueka, SH, MH',
          party_id: 9,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'M. Muhtadin Sabili, ST',
          party_id: 9,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Eva Lestari, S. IP',
          party_id: 9,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sukanda Chandrahayat, ST, M. Si',
          party_id: 9,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Hj. Fernita, MH',
          party_id: 10,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Kartika Yudhisti, B. Eng., M. Sc',
          party_id: 10,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Agus Setiawan, SH',
          party_id: 10,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'E. Mansur Aini',
          party_id: 10,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Reni Hadijah HSB',
          party_id: 10,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Hj. Muflikhah, M. Si',
          party_id: 10,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Daniel Lukus Soewito, S.I. Kom',
          party_id: 11,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Aldrin Inigo Wijana, ST',
          party_id: 11,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Prisilla Puspitasari, S. Si',
          party_id: 11,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ramot Situmeang. SH,. MH',
          party_id: 11,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Chindy Puri Salsabilah',
          party_id: 11,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Bunga Syelma Rizaldy',
          party_id: 11,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Yandri Susanto, S. Pt',
          party_id: 12,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Indahwati, S. Mn, MM',
          party_id: 12,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Rosyid Haeruddin, SP, MM',
          party_id: 12,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. H. Syafrol Makmur, M.Pd.I',
          party_id: 12,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ratu Minheryati, SE',
          party_id: 12,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Supriyono, S. Kom',
          party_id: 12,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Asep Saepuloh',
          party_id: 13,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Syafik',
          party_id: 13,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Astrid Octavin Sarmaria',
          party_id: 13,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Zaenal Abidin ',
          party_id: 13,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Entin Sartinah, S. Pd.I',
          party_id: 13,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Rambun Sumardi, Ak. M. Si',
          party_id: 13,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Amir Syamsudin, SH., MH,',
          party_id: 14,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nur Aeni',
          party_id: 14,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Aeng Haerudin',
          party_id: 14,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Ayib Najib (DUCE)',
          party_id: 14,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Ahmad Rifai Suftyadi, SH',
          party_id: 14,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Linda Agustini Aritonang, SS',
          party_id: 14,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ronni Abdi, ST., MM',
          party_id: 15,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Muhammad Ridwan, SH., MM',
          party_id: 15,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Inne Irawaty, SpKJ',
          party_id: 15,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sudrajat Ardani, M. H',
          party_id: 15,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Mustofa',
          party_id: 15,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sugiati',
          party_id: 15,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Charles Simanjuntak',
          party_id: 16,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Alfa Angelica E Sereh',
          party_id: 16,
          dapil_id: 2,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Hj. Siti Masrifah, MA',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Moh. Rano Alfath, S. H., M.H',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Abdul Roji S. Sos, MM',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Witjaksono Abadiman S.',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Marda Hastuti',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Imadudin, MA',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Fajar Rosman K',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Zaitun Awaliah',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rani Rismawati, SE',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ardy Susanto, SH',
          party_id: 1,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Sufmi Dasco Ahmad',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Martina, S. I.Kom, M.Si',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dasril, S. Pd. I.,M.Si (Han)',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Sesarius Egi Budiman, ST.B.Eng',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Carman Ansari E. A.R Latirf, S. Sos',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Supriati, SE',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Vigor Risqy Setiawan, SE',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'R. Moch Aldina Suryana, SE',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Risnauli Siahaan, S. Si',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Achmad Muzayin Syafrial, SH',
          party_id: 2,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: '',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: '',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rano Karno, S.IP',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'ST. Ananta Wahana, S.H.',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Emmy Lumban Raja, S.E., M. Si',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Marinus Gea, S.E., M.AK',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Wanto Sugito, S. Sos',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Meidya Amora. I, S.IP.,M.Si',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. H. Eddy Kusuma Wijaya, S. H., M.H.,M.M',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'dr. Lina Sulistiawati',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. H. Arsid, M. Si',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Santo Widjaja',
          party_id: 3,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Andi Achmad Dara, S.E',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ratu Dian Hatifah, S. Ag., M. Pd',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Abdul Syukur',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Eva Elisa Wibisono',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Tri Iriastuti, MH',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Freddy R. Napitupulu',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Bahrudin, S.H',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Arnold Sihite, S.E',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Hj. Siti Ubaidah, M.M',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dhany Marlen',
          party_id: 4,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'DR. H. WAWAN IRIAWAN, SH, MH',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'SAHAT SILABAN',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'ZURAIDA',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'YUDI FRIANTO, SH',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'ADE MAHMUD NUR, SH, MH',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'SUSY SUDARTI KADIMAN',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'IR. H. UCOK BINANGA NASUTION',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'IR. JUSUF MONGAN, M.SI',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'DISNA RIANTINA, SH, MH',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'DRS. BENYAMIN KALOLO',
          party_id: 5,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Eko Riyadi, S. Kom',
          party_id: 6,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rineke Sundah',
          party_id: 6,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Gita Oktaviani',
          party_id: 6,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Syaefunnur Maszah, SH, MM',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'KH. BAHANA JAALAQ TAQALLAH',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'RIA DAHLIA, S. Sos',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Muhammad Sirot. SH, S.IP',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Arius Karman, MARS',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'R.Ay. Devi Anggraeni, Amd. TrU',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Rhazes Faza Asrinda',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tomi Syavitra, S. Si, MM',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Cathy Ahadianty, ST',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Muhammad Arya Wijaya, SH, S. Ag., M.Si.,MH',
          party_id: 7,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'DR. H.Mulyanto, M.Eng',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Indra, SH, MH',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Hj. Tuti Elfita, M. Si',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Sunardi, MM.Pd',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Arif Wahyudi, ME',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Hj. Kinkin Anida',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ade Marfudin, M. A. P',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Totok Sudaryanto, SE M. Si',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Mas Farlina Limar Wangi ',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Syarifullah, S. Pd.I',
          party_id: 8,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Intan Nurul Hikmah, S.E, BBA',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. H. Abdulrahman, M.AP',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yudhistira Ikhsan Pramana, SH, MH',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Erlinda, M.Pd',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'David Surya, SH., MH',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'M. Firmansyah, S. HI',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yojosnil Adam',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yohanah, S.Kom, M. Kom',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Runggu Sihombing, S. Si, M.M',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nikson Hence Bulu, S.E, M.Th',
          party_id: 9,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. H. Irgan Chairul Mahfiz, M.Si',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Usman Muhammad Tokan, Se, MA',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Tati Hartati',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Bambang Wahyu Ganindra',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Ir. H. M. Nizar Dahlan, M. Si',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Tri Aprita Sari',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Abdul Rahman Tuakia, S.Sos',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. M. Sayuti, S. Sos.I',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dita Aiti Yeni, S. TH.I',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Saprizal Arifin, SH.,M.H',
          party_id: 10,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ratu Ayu Isyana Bagoes Oka',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Kokok H. Dirgantoro',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Leo Alexander Tambunan, SE, MM',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nur Fandysyah',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Fera JB. Sinambela. M.Sc',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Mikhail Gorbachev Dom, S. Si, M. Si',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Benny Susanto',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Azmi',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yuliana Rijanto, S.S',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Adrianus Agung Nugroho, S.H, M.H',
          party_id: 11,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'M. Ali Taher',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Yasmin Muntaz, SH, MH',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Muhammad Rizal, SH, M.Si',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Iwan Roberto',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Siraj El Munir Bustami',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Tanty Pupti',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. Sayuti Asyathri',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hj. Mike S. Herawati',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'J. Muallim Syuaib, SH, MH',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. ISMAIL, SH',
          party_id: 12,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H.I Inas N. Zubir',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ahmad Subadri, S. Pd.I',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ilmi Nurul Huda S. Sos., M.Ap',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Nurman, SH',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ian Zulfikar',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Heni Suhaeni, S.E',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Afifuddin',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dwi Utami, SH',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Nasrudin, SH',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Agus Dwi Iskandar, S.Pd., M.Eng',
          party_id: 13,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Hartanto Edhie Wibowo',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Himmatul Alyah Setiawaty, SH., MH',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Zulfikar. H',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. H. Haryono Edi Hermawan, MM',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Irene Librawati',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ir. H. Sonny Indra Djaja, MM',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dani Miftahul Achyar',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dian Pranajaya, SH.,M.H',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Agustin Malayani',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Tabrani, MM',
          party_id: 14,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Jurhum Lantong',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dr. Ir. Sylvia Wisna Darwis, SE, M.M',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Abdul Syukur, SH',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Drs. Moh Akbaruddin',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'H. Yanuar Amnur, S.Sos.',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Dra. Hj. Ratnaningsih, M.Pd',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Deni Martanti, S.Kom.,M.M',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Arditia, S.Sos',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'RD.Heru Rusyamsi Arianatareja',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ratna Juita Yaqoeb, S.Ag',
          party_id: 15,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Remy Sylvia',
          party_id: 16,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Chanda Roswinandra',
          party_id: 16,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Robertus Nugroho Perwiro Atmojo',
          party_id: 16,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Cempaka Esa Rosendi',
          party_id: 16,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Ari Gunawan',
          party_id: 16,
          dapil_id: 3,
          period_id: 2,
          is_choosen: false,
          created_by: 1,
          updated_by: 1
        }
      ]);
    });
};
