function getProvince() {
    var provinces = [
        {
            "Id": "1",
            "Name": "آذربایجان شرقی"
        },
        {
            "Id": "2",
            "Name": "آذربایجان غربی"
        },
        {
            "Id": "4",
            "Name": "اردبیل"
        },
        {
            "Id": "5",
            "Name": "اصفهان"
        },
        {
            "Id": "6",
            "Name": "البرز"
        },
        {
            "Id": "7",
            "Name": "ایلام"
        },
        {
            "Id": "8",
            "Name": "بوشهر"
        },
        {
            "Id": "9",
            "Name": "تهران"
        },
        {
            "Id": "10",
            "Name": "چهارمحال بختیاری"
        },
        {
            "Id": "11",
            "Name": "خراسان جنوبی"
        },
        {
            "Id": "12",
            "Name": "خراسان رضوی"
        },
        {
            "Id": "13",
            "Name": "خراسان شمالی"
        },
        {
            "Id": "14",
            "Name": "خوزستان"
        },
        {
            "Id": "15",
            "Name": "زنجان"
        },
        {
            "Id": "16",
            "Name": "سمنان"
        },
        {
            "Id": "17",
            "Name": "سیستان و بلوچستان"
        },
        {
            "Id": "18",
            "Name": "فارس"
        },
        {
            "Id": "19",
            "Name": "قزوین"
        },
        {
            "Id": "20",
            "Name": "قم"
        },
        {
            "Id": "21",
            "Name": "کردستان"
        },
        {
            "Id": "22",
            "Name": "کرمان"
        },
        {
            "Id": "23",
            "Name": "کرمانشاه"
        },
        {
            "Id": "24",
            "Name": "کهگیلویه و بویراحمد"
        },
        {
            "Id": "25",
            "Name": "گلستان"
        },
        {
            "Id": "26",
            "Name": "گیلان"
        },
        {
            "Id": "27",
            "Name": "لرستان"
        },
        {
            "Id": "28",
            "Name": "مازندران"
        },
        {
            "Id": "29",
            "Name": "مرکزی"
        },
        {
            "Id": "30",
            "Name": "هرمزگان"
        },
        {
            "Id": "31",
            "Name": "همدان"
        },
        {
            "Id": "32",
            "Name": "یزد"
        }
    ];
    $.each(provinces, function (index, item) {
        $('#selectProvince').append('<option value="' + item.Id + '">' + item.Name + '</option>');
    });
}

function getCity() {
    var cities = [
        {
            "Id": "541",
            "Name": "اسلام شهر"
        },
        {
            "Id": "542",
            "Name": "پاکدشت"
        },
        {
            "Id": "481",
            "Name": "پرند"
        },
        {
            "Id": "543",
            "Name": "پیشوا"
        },
        {
            "Id": "177",
            "Name": "تهران"
        },
        {
            "Id": "175",
            "Name": "چیتگر"
        },
        {
            "Id": "178",
            "Name": "دماوند"
        },
        {
            "Id": "482",
            "Name": "رباط کریم"
        },
        {
            "Id": "180",
            "Name": "شمیرانات"
        },
        {
            "Id": "183",
            "Name": "شهر ری"
        },
        {
            "Id": "181",
            "Name": "شهریار"
        },
        {
            "Id": "182",
            "Name": "فیروزکوه"
        },
        {
            "Id": "184",
            "Name": "ورامین"
        }
    ];

    $.each(cities, function (index, item) {
        $('#selectCity').append('<option value="' + item.Id + '">' + item.Name + '</option>');
    });
}

function getTorism() {
    var tourisms = [
        {
            "name": "eghamati",
            "title": "مراکز اقامتی",
            "value": "1"
        },
        {
            "name": "tourism",
            "title": "مناطق گردشگری",
            "value": "2"
        },

        {
            "name": "payane",
            "title": "پایانه های مسافرتی",
            "value": "3"
        },
        {
            "name": "refahi",
            "title": "خدمات رفاهی",
            "value": "4"
        },
        {
            "name": "darmani",
            "title": "مراکز درمانی",
            "value": "5"
        }
    ];

    $.each(tourisms, function (index, item) {
        $('#selectTourism').append('<option value="' + item.value + '">' + item.title + '</option>');
    });
}

function getCategory() {
    var categories = [
        {
            "Id": "11",
            "Name": "اقامتگاه بوم گردی"
        },
        {
            "Id": "10",
            "Name": "خانه مسافر"
        },
        {
            "Id": "6",
            "Name": "خانه معلم"
        },
        {
            "Id": "5",
            "Name": "مهمانپذیر"
        },
        {
            "Id": "1",
            "Name": "هتل"
        },
        {
            "Id": "4",
            "Name": "هتل آپارتمان"
        },
        {
            "Id": "9",
            "Name": "هتل های جهانگردی"
        }
    ];

    $.each(categories, function (index, item) {
        $('#selectCategory').append('<option value="' + item.Id + '">' + item.Name + '</option>');
    });
}

function getTopic() {
    var topics = [
        {
            "Id": "229",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آپادانا (1 ستاره)",
            "Address": "خیابان طالقانی روبروی بیمارستان 502ارتش",
            "Description": "021-88303040 :تلفن درجه: 1 ستارهگروه: C"
        },
        {
            "Id": "235",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ارس (1 ستاره)",
            "Address": "خ سعدی جنوبی-بلوک 9 شرقی ط سوم",
            "Description": "………. :تلفن درجه: 1 ستارهگروه: ….."
        },
        {
            "Id": "236",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ارم (3 ستاره)",
            "Address": "بزرگراه شهید حقانی تقاطع همت",
            "Description": "021-22266645 :تلفن درجه: 3 ستارهگروه: A"
        },
        {
            "Id": "230",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آرمان (1 ستاره)",
            "Address": "خیابان سعدی جنوبی خیابان اکباتان 8متری بانک پ35",
            "Description": "021-33915203 :تلفن درجه: 1 ستارهگروه: A"
        },
        {
            "Id": "231",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آریا (1 ستاره)",
            "Address": "نرسیده به میدان آزادی کوچه شهیدحسین مردی",
            "Description": "021-66041007 :تلفن درجه: 1 ستارهگروه: A"
        },
        {
            "Id": "232",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آزادی (2 ستاره)",
            "Address": "سمیه بین دکتر مفتح و فرصت پلاک 62",
            "Description": "021-88316670 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "314",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آساره (4 ستاره)",
            "Address": "خیابان آزادی خیابان ش رسول زارع تقاطع نیم فلکه فرمانفرما ش 256",
            "Description": "021-66922025 :تلفن درجه: 4 ستارهگروه: موقت"
        },
        {
            "Id": "237",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "اسکان (2 ستاره)",
            "Address": "خیابان فرصت نرسیده به چهارراه سمیه پ 81",
            "Description": "021-88347385 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "233",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آسیا (1 ستاره)",
            "Address": "ملت سه راه اکباتان جنب بانک ملی پلاک 149",
            "Description": "021-33118320 :تلفن درجه: 1 ستارهگروه: A"
        },
        {
            "Id": "238",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "اطلس (2 ستاره)",
            "Address": "طالقانی روبروی هلال احمر پلاک 206",
            "Description": "021-88907475 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "234",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "آفتاب (2 ستاره)",
            "Address": "بزرگراه خلیج فارس حرم حضرت امام خمینی",
            "Description": "09121173813 :تلفن درجه: 2 ستارهگروه: …."
        },
        {
            "Id": "239",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "البرز (3 ستاره)",
            "Address": "انقلاب نبش خیابان وصال پلاک 40",
            "Description": "021-66497963-7 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "240",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "المپیک (4 ستاره)",
            "Address": "اتوبان تهران کرج مجموعه ورزشی آزادی",
            "Description": "021-44739300 :تلفن درجه: 4 ستارهگروه: B"
        },
        {
            "Id": "241",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "الیان (1 ستاره)",
            "Address": "خیابان سعدی جنوبی بلوک 9 شرقی",
            "Description": "021-33116742 :تلفن درجه: 1 ستارهگروه: C"
        },
        {
            "Id": "242",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "امیر (3 ستاره)",
            "Address": "خیابان طالقانی بین ایرانشهر و فرصت پ 325",
            "Description": "021-88304066-9 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "243",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "امیرکبیر (2 ستاره)",
            "Address": "خ ناصرخسرو نرسیده به دارالفنون ش 220",
            "Description": "09121104409 :تلفن درجه: 2 ستارهگروه: ……"
        },
        {
            "Id": "244",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "انقلاب (4 ستاره)",
            "Address": "خیابان طالقانی جنب بنیاد شهید",
            "Description": "021-88943293 :تلفن درجه: 4 ستارهگروه: A"
        },
        {
            "Id": "245",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "اورین (2 ستاره)",
            "Address": "میدان انقلاب خیابان کارگرشمالی کوچه مجد پلاک25",
            "Description": "021-66431661-6 :تلفن درجه: 2 ستارهگروه: A"
        },
        {
            "Id": "246",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "اوسون (2 ستاره)",
            "Address": "شمیران پس قلعه منطقه دربند اوسون",
            "Description": "021-88579901 :تلفن درجه: 2 ستارهگروه: C"
        },
        {
            "Id": "247",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "اوین (4 ستاره)",
            "Address": "بزرگراه چمران سه راه اوین",
            "Description": "021-22344330-8 :تلفن درجه: 4 ستارهگروه: A"
        },
        {
            "Id": "248",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ایران (2 ستاره)",
            "Address": "میدان ولیعصر خیابان ولیعصر کوچه شهید شهامتی پلاک 22",
            "Description": "021-88903161-6 :تلفن درجه: 2 ستارهگروه: A"
        },
        {
            "Id": "249",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ایرانشهر (3 ستاره)",
            "Address": "ایرانشهر جنوبی بین سمیه وانقلاب پلاک 75",
            "Description": "021-88820518 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "250",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "باباطاهر ( 3 ستاره)",
            "Address": "سپهبد قرنی پلاک 49",
            "Description": "021-88300083-6 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "251",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بزرگ آزادی (5 ستاره)",
            "Address": "بزرگراه چمران تقاطع اوین",
            "Description": "021-22344444-57 :تلفن درجه: 5 ستارهگروه: B"
        },
        {
            "Id": "252",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بزرگ استقلال ( 5 ستاره)",
            "Address": "بزرگراه چمران چهارراه پارک وی",
            "Description": "021-22660011-25 :تلفن درجه: 5 ستارهگروه: A"
        },
        {
            "Id": "253",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بزرگ تهران (4 ستاره)",
            "Address": "ولیعصر خیابان استاد مطهری پلاک 2",
            "Description": "81000 :تلفن درجه: 4 ستارهگروه: T"
        },
        {
            "Id": "254",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بزرگ تهران(شعبه 2) - (4 ستاره)",
            "Address": "خ سپهبد قرنی خ سپند شرقی شماره 28",
            "Description": "021-66727026 :تلفن درجه: 4 ستارهگروه: T"
        },
        {
            "Id": "255",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بزرگ فردوسی (4 ستاره)",
            "Address": "خیابان فردوسی خیابان فروغی ش 24",
            "Description": "021-66727026 :تلفن درجه: 4 ستارهگروه: T"
        },
        {
            "Id": "256",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بلور (1 ستاره)",
            "Address": "سپهبدقرنی نرسیده به پل کریمخان پلاک 191",
            "Description": "021-88823080 :تلفن درجه: 1 ستارهگروه: C"
        },
        {
            "Id": "257",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "بولوار (3 ستاره)",
            "Address": "بلوار کشاورز روبروی پارک لاله پ278",
            "Description": "021-88954286 :تلفن درجه: 3 ستارهگروه: C"
        },
        {
            "Id": "258",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پارت (1 ستاره)",
            "Address": "نرسیده به میدان آزادی کوچه شهیدحسین مردی روبروی مخابرات 66041007",
            "Description": "021-66041007 :تلفن درجه: 1 ستارهگروه: A"
        },
        {
            "Id": "259",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پارسا (2 ستاره)",
            "Address": "ولیعصرخیابان طالقانی روبروی جهادسازندگی پلاک 23",
            "Description": "021-66469211-20 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "260",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پاریز (3 ستاره)",
            "Address": "خیابان آفریقا بلوار مینا ش 17",
            "Description": "021-88675612-8 :تلفن درجه: 3 ستارهگروه: ….."
        },
        {
            "Id": "261",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پاسارگاد (2 ستاره)",
            "Address": "جمالزاده جنوبی نرسیده به جمهوری پلاک 139",
            "Description": "021-66424051 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "262",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پامچال (3 ستاره)",
            "Address": "مفتح جنوبی روبروی تربیت معلم",
            "Description": "021-88845535 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "263",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پرستو (2 ستاره)",
            "Address": "جمهوری بعد از حافظ ک محمد بیک پلاک 15",
            "Description": "021-66708571 :تلفن درجه: 2 ستارهگروه: A"
        },
        {
            "Id": "264",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پرشیا (3 ستاره)",
            "Address": "خیابان حافظ نرسیده به چهارراه کالج پلاک 512",
            "Description": "021-88804180-2 :تلفن درجه: 3 ستارهگروه: A"
        },
        {
            "Id": "265",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "پیروز (1 ستاره)",
            "Address": "ولیعصر نرسیده به میدان راه آهن پلاک 19",
            "Description": "021-55377103 :تلفن درجه: 1 ستارهگروه: B"
        },
        {
            "Id": "266",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "تابان (2 ستاره)",
            "Address": "میدان فردوسی خیابان انقلاب ک شاهرودی بن بست",
            "Description": "021-88935405-7 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "267",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "تلاش (1 ستاره)",
            "Address": "ولیعصر-بالاتر از جام جم قبل از چهارراه ش چمران",
            "Description": "021-22667734-6 :تلفن درجه: 1 ستارهگروه: …."
        },
        {
            "Id": "269",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "تهران درسا (3 ستاره)",
            "Address": "خیابان انقلاب نبش خیابان شهید موسوی(فرصت) ش619",
            "Description": "021-88317330-8 :تلفن درجه: 3 ستارهگروه: موقت"
        },
        {
            "Id": "268",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "توچال (3 ستاره)",
            "Address": "انتهای ولنجک تله کابین ایستگاه هشتم",
            "Description": "021-22418000 :تلفن درجه: 3 ستارهگروه: C"
        },
        {
            "Id": "270",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ثامن (1 ستاره)",
            "Address": "خ امیرکبیر روبروی خ ملت پ 478",
            "Description": "…. :تلفن درجه: 1 ستارهگروه: …."
        },
        {
            "Id": "271",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "جهان (3 ستاره)",
            "Address": "ولیعصر نبش طالقانی کوچه رحیم زاده پلاک 523",
            "Description": "021-66465596-7 :تلفن درجه: 3 ستارهگروه: C"
        },
        {
            "Id": "272",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "حافظ (1 ستاره)",
            "Address": "فردوسی کوچه بانک ملی پلاک 18",
            "Description": "021-66709063 :تلفن درجه: 1 ستارهگروه: T"
        },
        {
            "Id": "315",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "خلیج فارس (5 ستاره)",
            "Address": "م ولیعصر بلوار کشاورز شماره 126",
            "Description": "021-88996658 :تلفن درجه: 5 ستارهگروه: موقت"
        },
        {
            "Id": "273",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "خیام (2 ستاره)",
            "Address": "امیر کبیر کوچه نوید پلاک 3",
            "Description": "021-33920218 :تلفن درجه: 2 ستارهگروه: B"
        },
        {
            "Id": "274",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "دیاموند (1 ستاره)",
            "Address": "خ فرشته خ مریم غربی خ راز پ6",
            "Description": "….. :تلفن درجه: 1 ستارهگروه: ……."
        },
        {
            "Id": "275",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "رامتین (4 ستاره)",
            "Address": "ولیعصر روبروی پمپ بنزین پلاک 1081",
            "Description": "021-88722786-8 :تلفن درجه: 4 ستارهگروه: T"
        },
        {
            "Id": "276",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "رودکی (3 ستاره)",
            "Address": "خیابان حافظ خیابان استاد شهریار پلاک 25",
            "Description": "021-66706955-6 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "277",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "زیبا (2 ستاره)",
            "Address": "سعدی جنوبی جدیدالحداث بلوک10شرقی پلاک203",
            "Description": "021-33914256 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "278",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ساسان (2 ستاره)",
            "Address": "شریعتی نرسیده به سه راه طالقانی پلاک 1/4",
            "Description": "021-77509719 :تلفن درجه: 2 ستارهگروه: B"
        },
        {
            "Id": "279",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ساینا (1 ستاره)",
            "Address": "خ ولیعصر خ فتحی شقاقی ش 60",
            "Description": "021-88100042-3 :تلفن درجه: 1 ستارهگروه: …"
        },
        {
            "Id": "280",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "سروش (1 ستاره)",
            "Address": "میدان فردوسی خیابان فرصت کوچه نمازی پلاک 1",
            "Description": "021-88305020-2 :تلفن درجه: 1 ستارهگروه: B"
        },
        {
            "Id": "281",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "سعدی (1 ستاره)",
            "Address": "جمهوری اول لاله زار نو مقابل سینما رودکی پ 375",
            "Description": "021-33113047 :تلفن درجه: 1 ستارهگروه: T"
        },
        {
            "Id": "282",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "سفیر (2 ستاره)",
            "Address": "خیابان مفتح کوچه اردلان پلاک 10",
            "Description": "021-88825701 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "283",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "سیمرغ (4 ستاره)",
            "Address": "ولیعصر بالاتر از عباس آباد پلاک 1069",
            "Description": "021-88719911 :تلفن درجه: 4 ستارهگروه: C"
        },
        {
            "Id": "284",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "شایان (1 ستاره)",
            "Address": "میدان راه آهن اول خیابان ولیعصر پلاک 118",
            "Description": "021-55395778 :تلفن درجه: 1 ستارهگروه: C"
        },
        {
            "Id": "285",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "شهر (3 ستاره)",
            "Address": "دماوند سه راه تهرانپارس",
            "Description": "021-77700041-5 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "316",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "شهریار (2 ستاره)",
            "Address": "خیابان سعدی جنوبی بلوک 8 غربی شماره 24",
            "Description": "021-33903288 :تلفن درجه: 2 ستارهگروه: موقت"
        },
        {
            "Id": "286",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "شیراز (2 ستاره)",
            "Address": "سعدی شمالی پلاک 388",
            "Description": "021-33114282 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "287",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "فارس (2 ستاره)",
            "Address": "سعدی جنوبی بلوک 6 شرقی",
            "Description": "021-33915011 :تلفن درجه: 2 ستارهگروه: A"
        },
        {
            "Id": "288",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "فردوسی (1 ستاره)",
            "Address": "فردوسی خیابان تقوی کوچه بهداشت پلاک 21",
            "Description": "021-66712494 :تلفن درجه: 1 ستارهگروه: T"
        },
        {
            "Id": "289",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "فردیس (2 ستاره)",
            "Address": "فرصت بین سمیه و انقلاب کوچه سهیل پلاک67",
            "Description": "021-88838303-4 :تلفن درجه: 2 ستارهگروه: A"
        },
        {
            "Id": "290",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "فیروزه (1 ستاره)",
            "Address": "امیرکبیر کوچه دولت آبادی پلاک 7",
            "Description": "021-33113487 :تلفن درجه: 1 ستارهگروه: A"
        },
        {
            "Id": "291",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "قدس (2 ستاره)",
            "Address": "استاد نجات الهی خیابان شاداب پلاک 54",
            "Description": "021-88904966 :تلفن درجه: 2 ستارهگروه: C"
        },
        {
            "Id": "292",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "قناری (2 ستاره)",
            "Address": "سمیه بین خیابان مفتح و فرصت پلاک 92",
            "Description": "021-88825616 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "293",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "کارون (3 ستاره)",
            "Address": "ولیعصر بعد از زرتشت کوچه غفاری پلاک 22",
            "Description": "021-88806040 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "294",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "کوثر (4 ستاره)",
            "Address": "ولیعصر کوچه شهید ملائی پلاک 8",
            "Description": "021-88908121 :تلفن درجه: 4 ستارهگروه: A"
        },
        {
            "Id": "295",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "گلستان (1 ستاره)",
            "Address": "حافظ نرسیده به م حسن آباد پ 16",
            "Description": "021-66711417-8 :تلفن درجه: 1 ستارهگروه: T"
        },
        {
            "Id": "296",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "لاله (5 ستاره)",
            "Address": "خیابان فاطمی جنب خیابان حجاب پلاک 200",
            "Description": "021-88965021-9 :تلفن درجه: 5 ستارهگروه: T"
        },
        {
            "Id": "297",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "مارلیک (2 ستاره)",
            "Address": "هفت تیر خیابان مفتح نبش سمیه پلاک 79",
            "Description": "021-88328001-6 :تلفن درجه: 2 ستارهگروه: T"
        },
        {
            "Id": "298",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ماهان (3 ستاره)",
            "Address": "یوسف آباد-خ 18",
            "Description": "021-88331667 :تلفن درجه: 3 ستارهگروه: …."
        },
        {
            "Id": "299",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "متل شیان (1 ستاره)",
            "Address": "آیت ا... صدر خروجی هنگام پارک لویزان",
            "Description": "021-22947916-25 :تلفن درجه: 1 ستارهگروه: C"
        },
        {
            "Id": "300",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "مرکزی ایران (1 ستاره)",
            "Address": "خیابان لاله زارنو جنب سینما کریستال شماره 419",
            "Description": "021-33115764 :تلفن درجه: 1 ستارهگروه: …."
        },
        {
            "Id": "301",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "مروارید (3 ستاره)",
            "Address": "میدان هفتم تیر روبروی مسجد الجواد پ 24",
            "Description": "021-88348231 :تلفن درجه: 3 ستارهگروه: C"
        },
        {
            "Id": "302",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "مشهد (3 ستاره)",
            "Address": "طالقانی نبش شهید مفتح پلاک 190",
            "Description": "021-88825145 :تلفن درجه: 3 ستارهگروه: T"
        },
        {
            "Id": "303",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "مهر (1 ستاره)",
            "Address": "خ امیرکبیر-مسجد سراج پ 19",
            "Description": "021-33110133 :تلفن درجه: 1 ستارهگروه: ….."
        },
        {
            "Id": "317",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "میگون (3 ستاره)",
            "Address": "محور گردشگری تهران شمشک محله میگون نو",
            "Description": "021-26513260 :تلفن درجه: 3 ستارهگروه: موقت"
        },
        {
            "Id": "304",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "مینا (2 ستاره)",
            "Address": "دکتر مفتح روبروی تربیت معلم پلاک 140",
            "Description": "021-88811861-3 :تلفن درجه: 2 ستارهگروه: A"
        },
        {
            "Id": "305",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "نادر (2 ستاره)",
            "Address": "هفت تیر خیابان قائم مقام فراهانی پلاک 28",
            "Description": "021-88824249 :تلفن درجه: 2 ستارهگروه: C"
        },
        {
            "Id": "306",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "نادری (2 ستاره)",
            "Address": "جمهوری قبل از چهارراه استانبول پلاک 572",
            "Description": "021-66708610 :تلفن درجه: 2 ستارهگروه: B"
        },
        {
            "Id": "307",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "نادری نو (3 ستاره)",
            "Address": "قبل از چهارراه استانبول کوچه شاهرود پ53",
            "Description": "021-66703761 :تلفن درجه: 3 ستارهگروه: A"
        },
        {
            "Id": "308",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "نیکان ( 1 ستاره)",
            "Address": "خ سعدی جنوبی بلوک 4 شرقی",
            "Description": "021-33920274 :تلفن درجه: 1 ستارهگروه: ……"
        },
        {
            "Id": "311",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "هالی (3 ستاره)",
            "Address": "سپهبد قره نی کوچه بیمه پلاک 11",
            "Description": "021-88808628-9 :تلفن درجه: 3 ستارهگروه: A"
        },
        {
            "Id": "312",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "هما (5 ستاره)",
            "Address": "میدان ونک خیابان ولیعصر خیابان شهیدخدامی",
            "Description": "021-88773021 :تلفن درجه: 5 ستارهگروه: T"
        },
        {
            "Id": "313",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "هویزه (4 ستاره)",
            "Address": "طالقانی خیابان استاد نجات الهی پلاک 143",
            "Description": "021-88804344-58 :تلفن درجه: 4 ستارهگروه: T"
        },
        {
            "Id": "309",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "ورزش (1 ستاره)",
            "Address": "خ حجاب پ 16",
            "Description": "021-88971049 :تلفن درجه: 1 ستارهگروه: ….."
        },
        {
            "Id": "310",
            "CatID": "1",
            "CityID": "177",
            "CityName": "تهران",
            "CatName": "هتل",
            "Name": "وصال (2 ستاره)",
            "Address": "انقلاب ابتدای خیابان وصال شیرازی پلاک 4",
            "Description": "021-66409587 :تلفن درجه: 2 ستارهگروه: A"
        }
    ];
    $.each(topics, function (index, item) {
        $('#selectTopic').append('<option value="' + item.Id + '">' + item.Name + '</option>');
    });
}


$(document).ready(function () {
    getProvince();
    getCity();
    getTorism();
    getCategory();
    getTopic();

    var message = $('#message-box');

    $('#enter-mobile-form').submit(function () {
        var mobileNum = $('#enter-mobile-form').find('#mobileNum').val();
        $('#enter-mobile-form').find('button[type="submit"]').addClass('loading disabled');
        $.ajax({
            url: 'http://ticket.visitoiran.com/ir09629/getToken/' + mobileNum,
            method: 'GET',
            success: function (result) {
                if ($.parseJSON(result).messageId) {
                    $('#enter-mobile').hide();
                    $(message).find('.send-code-success strong.mobile-num').html(mobileNum);
                    $(message).find('.ui.message.send-code-success').fadeIn('fast');
                    $('#enter-password').fadeIn('slow');
                    $('#enter-mobile-form').find('button[type="submit"]').removeClass('loading disabled');
                }
            },
            error: function (errorLog) {
                console.log(errorLog);
            }
        });

        return false;
    });

    $('#enter-password-form').submit(function () {
        $(message).find('.ui.message.send-code-success').hide();
        $(message).find('.ui.message.wrong-password').hide();
        var mobileNum = $('#enter-mobile-form').find('#mobileNum').val();
        var password = $('#enter-password-form').find('#password').val();
        $('#enter-password-form').find('button[type="submit"]').addClass('loading disabled');
        $.ajax({
            url: 'http://ticket.visitoiran.com/ir09629/login',
            method: 'POST',
            data: {
                phone: mobileNum,
                password: password
            },
            success: function (result) {
                if ($.parseJSON(result).login == true) {
                    $('#complete-form').find('#firstname').val($.parseJSON(result).firstname);
                    $('#complete-form').find('#lastname').val($.parseJSON(result).lastname);
                    $('#enter-password').hide();
                    $('#complete-form').fadeIn('slow');
                    $('#enter-password-form').find('button[type="submit"]').removeClass('loading disabled');
                }
            },
            error: function (errorLog) {
                console.log(errorLog);
                $(message).find('.ui.message.wrong-password').fadeIn('fast');
                $('#enter-password-form').find('button[type="submit"]').removeClass('loading disabled');
            }
        });

        return false;
    });

    $('#complete-form-form').submit(function () {
        $('#complete-form').find('button[type="submit"]').addClass('loading disabled');
        $(message).find('.ui.message.send-code-success').hide();
        $(message).find('.ui.message.wrong-password').hide();
        var phone = $('#enter-mobile-form').find('#mobileNum').val();
        var firstname = $('#complete-form').find('#firstname').val();
        var lastname = $('#complete-form').find('#lastname').val();
        var answers = $('#complete-form').find('#answers').val();
        var data = {
            'phone': phone,
            'firstname': firstname,
            'lastname': lastname,
            'answers': [answers]
        };

        $.ajax({
            url: 'http://ticket.visitoiran.com/ir09629/saveTicket',
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                if ($.parseJSON(result).ticketId) {
                    $('#complete-form').hide();
                    $('#complete-form').find('button[type="submit"]').removeClass('loading disabled');
                    $(message).find('.ui.message.save-ticket-success').find('.ticket-number').html($.parseJSON(result).ticketId.replace('#', ''));
                    $(message).find('.ui.message.save-ticket-success').fadeIn('fast');
                }
            },
            error: function (errorLog) {
                console.log(errorLog);
                $('#complete-form').find('button[type="submit"]').removeClass('loading disabled');
            }
        });
        return false;
    });

    $('.message .close').on('click', function () {
        $(this)
            .closest('.message')
            .transition('fade')
        ;
    });

    $('#selectTopic').dropdown({
        allowAdditions: true
    });

    $('.ui.dropdown').dropdown();

    $('.ui.accordion').accordion();

    $('.ui.radio.checkbox').checkbox();

    $('.change-user-info-btn').click(function () {
        $('.ui.modal#change-user-info').modal({
            autofocus: false,
            closable: false,
            observeChanges: true
        }).modal('show');
    });

    $('#tickets table tbody tr').click(function () {
        $('.ui.modal#ticket-detail').modal({
            autofocus: false,
            closable: false,
            observeChanges: true
        }).modal('show');
    });

    // $('.context.admin-menu .ui.sidebar').sidebar();

    $('.context.admin-menu .ui.sidebar').sidebar({
        context: $('.context.admin-menu .bottom.segment')
    }).sidebar('attach events', '.context.admin-menu .menu .item.menu-item');

});