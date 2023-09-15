
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parties').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('parties').insert([
        {
          counter_no: 1, 
          name: 'Partai Kebangkitan Bangsa (PKB)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/1/11/Logo_PKB.svg/320px-Logo_PKB.svg.png', 
          color: '#00764b', 
          text_color: '#fff207', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 2, 
          name: 'Partai Gerakan Indonesia Raya (Gerindra)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/1/18/Logo_Gerindra.svg/400px-Logo_Gerindra.svg.png', 
          color: '#e5222a', 
          text_color: '#fccf00', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 3, 
          name: 'Partai Demokrasi Indonesia Perjuangan (PDIP)', 
          motto: '', 
          logo: 'https://kampungdesigner.com/wp-content/uploads/edd/2018/09/Logo-PDI-Perjuangan-Vector.png', 
          color: '#d51f27', 
          text_color: '#000000', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 4, 
          name: 'Partai Golongan Karya (Golkar)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Logo_Golkar.svg/360px-Logo_Golkar.svg.png', 
          color: '#ffff01', 
          text_color: '#111111', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 5, 
          name: 'Partai Nasional Demokrat (Nasdem)', 
          motto: 'Gerakan Perubahan', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Partai_NasDem.svg/400px-Partai_NasDem.svg.png', 
          color: '#242564', 
          text_color: '#ffffff', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 6, 
          name: 'Partai Gerakan Perubahan Indonesia (Garuda)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/59/Logo_Partai_Garuda.svg/360px-Logo_Partai_Garuda.svg.png', 
          color: '#ab2c2f', 
          text_color: '#ffffff', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 7, 
          name: 'Partai Berkarya', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/c/cf/Logo_Partai_Berkarya.svg/360px-Logo_Partai_Berkarya.svg.png', 
          color: '#fff100', 
          text_color: '#111111', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 8, 
          name: 'Partai Keadilan Sejahtera (PKS)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/PKS_logo_2020.png/300px-PKS_logo_2020.png', 
          color: '#ffffff', 
          text_color: '#111111', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 9, 
          name: 'Partai Persatuan Indonesia (Perindo)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/3/32/PartaiPerindo.png', 
          color: '#253e80', 
          text_color: '#c02127', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 10, 
          name: 'Partai Persatuan Pembangunan (PPP)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/7/73/Logo_PPP.svg/210px-Logo_PPP.svg.png', 
          color: '#086309', 
          text_color: '#fdb319', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 11, 
          name: 'Partai Solidaritas Indonesia (PSI)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/LogoPSI.svg/360px-LogoPSI.svg.png', 
          color: '#e61b25', 
          text_color: '#ffffff', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 12, 
          name: 'Partai Amanat Nasional (PAN)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/2/2f/Logo_PAN.svg/300px-Logo_PAN.svg.png', 
          color: '#000081', 
          text_color: '#ffffff', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 13, 
          name: 'Partai Hati Nurani Rakyat (Hanura)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/2/24/Logo_Hanura.svg/400px-Logo_Hanura.svg.png', 
          color: '#ffffff', 
          text_color: '#ec3237', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 14, 
          name: 'Partai Demokrat', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Logo_of_the_Democratic_Party_%28Indonesia%29.svg/400px-Logo_of_the_Democratic_Party_%28Indonesia%29.svg.png', 
          color: '#004c9a', 
          text_color: '#88c0e4', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 15, 
          name: 'Partai Bulan Bintang (PBB)', 
          motto: '', 
          logo: 'https://partaibulanbintang.or.id/wp-content/uploads/2020/09/Partai-Bulan-Bintang-Logo-Official.jpg', 
          color: '#013f22', 
          text_color: '#ebb904', 
          created_by: 1, 
          updated_by: 1
        },
        {
          counter_no: 16, 
          name: 'Partai Keadilan dan Persatuan Indonesia (PKPI)', 
          motto: '', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Logo_PKP_BARU.jpg/360px-Logo_PKP_BARU.jpg', 
          color: '#fe0100', 
          text_color: '#2d3192', 
          created_by: 1, 
          updated_by: 1
        }
      ]);
    });
};
