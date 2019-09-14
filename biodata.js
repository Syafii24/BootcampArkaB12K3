function myBiodata(profil){
    let profilObj = {
      "name": 'Abdullah Syafii',
      "age" : '22',
      "address": 'Cirebon, Jawa Barat',
      "hobbies": [
        'Mendaki Gunung', 'editing', 'mendengarkan musik' 
      ],
      "is_married": false,
      "list_school": {
        "highSchool":[{
            "name" :'SMK ULIL ALBAB',
           "year_in": '2012',
           "year_out": '2015',
          "major": 'Teknik Komputer Jaringan'}],
           "university":[{
          "name": 'STMIK IKMI CIREBON',
          "year_in": '2016',
          "year_out": '2019',
          "major": 'Manajemen Informatika'
    }]},
      "skill":{
      "skill_1": [
        {
          "name": "HTML",
          "level": "expert"}],
      "skill_2": [
        { 
          "name": "PHP",
          "level": "advanced"}],
      "skill_3": [
        { 
          "name": "Codeigniter",
          "level": "Beginer"}],
        },
      "interest_in_coding": true,
    }
    
  
    return profilObj
  }
  console.log(myBiodata('syafii'));