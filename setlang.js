 function formatDate(date, lang) {
        const locales = {
            en: "en-US",
            hi: "hi-IN",
            mr: "mr-IN"
        };

        return date.toLocaleDateString(locales[lang] || "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
 /* ===============================
       TRANSLATIONS
    =============================== */
    const translations = {
        en: {
            welcome: "Hello. We apologize for the inconvenience. Your access to this app has been restricted.",
            title: "PregHealth - Complete Pregnancy Advisor",
            description: "Calculate your estimated due date and track important pregnancy milestones",
            heading: "Calculate Your Due Date",
            lmp: "Last Menstrual Period",
            conception: "Conception Date",
            ultrasound: "Ultrasound Date",
            Current_Stage_tip: " Tips for Your Current Stage",
            Pregnancy_Milestones: "Pregnancy Milestones",
            fdlmp: "First day of last menstrual period",
            acl: "Average cycle length (days)",
            days: " Days",
            week: " Week",
            month: " Month",
            blood_test: "Blood Test",
            Current_Week: "Current Week",
            Current_Month: "Current ongoing Month",
            diet: "Diet",
            reset: "Reset",
            immunization: "Immunization",
            sonography: "Sonography",
            Current_trimester: "Current trimester",
            Days_remaining: "Days remaining",
            complete : " Complete",
            Current_fetal_age: "Current fetal age",
            Conception_date: "Conception date",
            conceptionLabel: "Conception date (estimated)",
            conceptionTip: "Conception typically occurs about 11-21 days after the first day of your last period.",
            ultrasoundDate: "Ultrasound date",
            ultrasoundWeeks: "Weeks at ultrasound",
            ultrasoundDays: "Additional days",
            buttonCalculate: "Calculate Due Date",
            excercise: "Excercise",
            epdd: "Estimated Due Date",
            footer1: "This calculator provides an estimate only and is not a substitute for professional medical advice.",
            footer2: "Always consult with your healthcare provider about your pregnancy.",
            morning: "Morning \n 7:00 AM",
            breakfast: "Breakfast \n 9:00 AM",
            lunch: "Lunch \n 12:00 PM - 01:00 PM",
            evening: "Evening \n 04:00 PM - 05:00 PM",
            dinner: "Dinner \n 07:00 PM - 08:00 PM",
            bedtime: "Bedtime",
            dont: "Don't",
            tips: {
                first: [
                    "Take prenatal vitamins with folic acid daily",
                    "Avoid alcohol, tobacco, and limit caffeine",
                    "Schedule your first prenatal appointment",
                    "Be aware of early pregnancy symptoms like fatigue and nausea",
                    "Start researching childbirth classes and healthcare providers"
                ],
                second: [
                    "You may start feeling baby movements (quickening)",
                    "Consider prenatal genetic testing if recommended",
                    "Stay active with pregnancy-safe exercises",
                    "Begin planning for maternity leave",
                    "Start sleeping on your side to improve circulation"
                ],
                third: [
                    "Prepare your hospital bag and birth plan",
                    "Install car seat at least 4 weeks before due date",
                    "Watch for signs of preterm labor",
                    "Practice relaxation and breathing techniques",
                    "Finalize childcare arrangements for older siblings"
                ]
            },
            blood_tests: {
            first: [
                "CBC with ESR",
                "BT/CT",
                "LFT",
                "Hb Electrophoresis",
                "Double Marker",
                "Blood Group (Rh)",
                "Urine-(R)",
                "TFT",
                "RBS",
                "HIV",
                "HBsAg",
                "VDRL",
                "ICT (if blood group is negative)"
            ],
            second: [
                "CBC",
                "GTT (20th week)",
                "Urine-(R)",
                "Quadraple Marker",
            ],
            third: [
                "CBC",
                "GTT (28th week)",
                "Urine-(R)",
                "ICT (if blood group is negative)",
            ]
        },
        sonography_tests: {
            first: [
                "Dating Scan",
                "NT Scan",
            ],
            second: [
                "Anamoly Scan | TIFFA (Targeted Imaging for Fetal Anamolies) | Targeted Scan",
                "Fetal 2D Echo",
            ],
            third: [
                "Growth Scan + Obstetric Doppler",
                "2nd Growth Scan",
                "NST (Non Stress Test) On Doctors Advice"
            ]
        },
        immunization_tests: {
            first: [
                "You should get it as per your doctor's advice.",
            ],
            second: [
                "You should get it as per your doctor's advice.",
            ],
            third: [
                "You should get it as per your doctor's advice."
            ]
        },
        morning_diet: {
            first: [
                "Puffed Rice (Lahya)", "Toast", "Soaked black raisins",
            ],
            second: [
                "1 Cup Milk, 4-5 Soaked almonds, 1 Walnut",
            ],
            third: [
                "Warm Water, Warm Milk"
            ]
        },
        breakfast_diet: {
            first: [
                "Poha | Upma | Dalia | Idali | Moong Chila | Boiled eggs | Milk "," Fruits : Apple, Banana, Oranges, Pomegranate",
            ],
            second: [
                "Paratha | Dosa | Idali | Eggs | Paneer | Sprouted grains (Full of proteins)",
            ],
            third: [
                "Dalia | Idali | Oats | Eggs | Sprouted grains (Full of proteins)"
            ]
        },
        lunch_diet: {
            first: [
                "Chapati, Bhakari (Jowar and Nachni), Rice, Green Vegetables (Spinach, Red Amaranth leaves, pumpkin)", "Buttermilk | Curd", "Dal | Eggs" , "1-2 Spoon Ghee",
            ],
            second: [
                "2 Chapati, Bhakari (Jowar and Nachni), Rice, Green Vegetables (Spinach, Red Amaranth leaves, pumpkin)", "Buttermilk | Curd", "Mix Dal | Eggs "," 1-2 Spoon Ghee | Chicken | Mutton (Once in a week)" ," Rajma, Chhole",
            ],
            third: [
                "Chapati, Bhakari (Jowar and Nachni), Rice, Dal, Sabji (Veg / Non-veg), Curd , 1-2 Spoon Ghee"
            ]
        },
        evesnacks_diet: {
            first: [
                "Roasted Makhana, Coconut Water, Fruit Juice, Puffed Rice",
            ],
            second: [
                "Fruits (Guava, Pomegranate, Apple and seasonable fruits)", "Coconut Water", "Carrot juice + beetroot juice",
            ],
            third: [
                "Chana, Roasted Makhana, Buttermilk"
            ]
        },
        dinner_diet: {
            first: [
                "Chapati + Sabji, a nutritious and tasty dal made from moong dal",
            ],
            second: [
                "Chapati | Bhakari (Jowar and Nachni) + Rice + Rice",
            ],
            third: [
                "Chapati + Rice + Dal"
            ]
        },
        bedtime_diet: {
            first: [
                "-"
            ],
            second: [
                "Warm Milk",
            ],
            third: [
                "Milk"
            ]
        },
        donts_meal: {
            first: [
                "Do not eat spicy, salty, junk food, fried, stale foods.",
                "Papaya, Pineapple",
                "Don't stay hungry for too long.",
                "Raw fruits and vegetables"
            ],
            second: [
                "-",
            ],
            third: [
                "Heavy foods","excessive salt intake", "fried and stale foods", "staying hungry for long periods of time"
            ]
        },
        excercise_tips: {
            first: [
                "Pranayam : Anulom Vilom, Bhramari",
                "Yoga : Shavasan, Sukhasan, Vajrasan (After Meal)",
                "While sleeping, sleep on your left side with a pillow between your legs."
            ],
            second: [
                "Pranayam : Anulom Vilom, Bhramari",
                "Yoga : Baddhakonasan, Shavasan, Sukhasan, Vajrasan (After Meal)",
                "Take proper rest on left lateral side."
            ],
            third: [
                "Pranayam : Anulom Vilom, Bhramari",
                "Yoga : Baddhakonasan, Shavasan, Sukhasan, Malasan"
            ]
        },
        donts_excercise: {
            first: [
                "Avoid travelling", "lifting heavy objects", "having sex", "going up and down stairs for a long time"
            ],
            second: [
                "Kapalbharti",
                "Bhastrika",
                "Do not practice yoga if you have threatened abortion, placenta previa, severe anemia, PIH (pregnancy-induced hypertension), heart disease, a history of preterm labor, or multiple pregnancy."
            ],
            third: [
                "Kapalbharti",
                "Bhastrika",
                "Do not practice yoga if you have threatened abortion, placenta previa, severe anemia, PIH (pregnancy-induced hypertension), heart disease, a history of preterm labor, or multiple pregnancy."
            ]
        },
            generalTips: {
            title: "General Pregnancy Advice",
            points: [
                "Stay hydrated and eat a balanced diet with plenty of fruits, vegetables, and protein",
                "Get regular moderate exercise as approved by your doctor",
                "Attend all scheduled prenatal appointments",
                "Don't hesitate to call your healthcare provider with any concerns"
            ]
        }
        },

          mr: {
            welcome: "नमस्कार। असुविधा बद्दल आम्हाला खेद आहे. या अॅपमध्ये तुमची प्रवेश मर्यादित केली गेली आहे.",
        title: "PregHealth - पूर्ण गर्भधारण सल्लागार",
        description: "तुमच्या अंदाजे गर्भधारणेच्या अंतिम तारखेची गणना करा आणि गर्भधारणेच्या महत्त्वाच्या टप्प्यांचा मागोवा घ्या",
        heading: "तुमच्या गर्भधारणेची अंतिम तारीख मोजा",

        lmp: "शेवटची मासिक पाळी",
        conception: "गर्भधारणेची तारीख",
        ultrasound: "अल्ट्रासाऊंड तारीख",
        Current_Stage_tip: "सध्याच्या गर्भावस्थेनुसार सल्ले",
        Pregnancy_Milestones: "गर्भधारणेचे टप्पे",

        fdlmp: "शेवटच्या मासिक पाळीचा पहिला दिवस",
        acl: "मासिक पाळीचा सरासरी कालावधी (दिवस)",
        days: " दिवस",

        conceptionLabel: "गर्भधारणेची तारीख (अंदाजे)",
        conceptionTip: "गर्भधारणा सहसा शेवटच्या मासिक पाळीच्या पहिल्या दिवसानंतर 11–21 दिवसांत होते.",

        ultrasoundDate: "अल्ट्रासाऊंड तारीख",
        ultrasoundWeeks: "अल्ट्रासाऊंड वेळी आठवडे",
        ultrasoundDays: "अतिरिक्त दिवस",
        bedtime: "झोपण्याची वेळी आहार",
        buttonCalculate: "गणना करा",
        excercise: "व्यायाम",
        epdd: "अंदाजे गर्भधारणेची अंतिम तारीख",
        complete : " पूर्ण",
        Current_fetal_age: "सध्याचे गर्भाचे वय",
        Days_remaining: "बाकी दिवस",
        Conception_date: "गर्भधारणेची तारीख",
        Current_trimester: "चालू तिमाही",
        week: " आठवडा",
        month: " महिना",
        Current_Week: "चालू आठवडा",
        Current_Month: "चालू महिना",
        diet: "आहार",
        reset: "मूळ स्थितीत आणा",
        immunization: "लसीकरण",
        sonography: "सोनोग्राफ़ी",
        blood_test: "रक्त तपासणी",
        footer1: "हा कॅल्क्युलेटर फक्त अंदाज देतो आणि वैद्यकीय सल्ल्याचा पर्याय नाही.",
        footer2: "तुमच्या गर्भधारणेबाबत नेहमी डॉक्टरांचा सल्ला घ्या.",
        morning: "सकाळ \n ७:०० वाजता",
        breakfast: "नाश्ता \n ९:०० वाजता",
        lunch: "दुपारचे जेवण \n १२:०० ते ०१:००",
        evening: "सायंकाळ \n ०४:०० ते ०५:००",
        dinner: "रात्रीचे जेवण \n ०७:०० ते ०८:००",
        dont: "करू नका",
    
        tips: {
            first: [
                "दररोज फॉलिक अ‍ॅसिडसह गर्भावस्थेतील जीवनसत्त्वे घ्या",
                "दारू व तंबाखू टाळा आणि कॅफिनचे प्रमाण कमी ठेवा",
                "तुमची पहिली प्रसूतीपूर्व तपासणी ठरवा",
                "थकवा व मळमळ यांसारख्या सुरुवातीच्या लक्षणांकडे लक्ष ठेवा",
                "प्रसूती वर्ग व डॉक्टरांची माहिती घ्यायला सुरुवात करा"
            ],
            second: [
                "तुम्हाला बाळाची हालचाल जाणवू लागेल",
                "डॉक्टरांनी सुचवल्यास जनुकीय चाचण्यांचा विचार करा",
                "गर्भावस्थेस सुरक्षित व्यायाम करत रहा",
                "मातृत्व रजेची योजना करा",
                "रक्ताभिसण सुधारण्यासाठी एका कुशीवर झोपण्यास सुरुवात करावी."
            ],
            third: [
                "रुग्णालयासाठी पिशवी व बर्थ प्लॅन तयार ठेवा",
                "प्रसवापूर्वी किमान ४ आठवडे आधी कार सीट बसवा",
                "अकाली प्रसूतीची लक्षणे ओळखा",
                "श्वसन व रिलॅक्सेशन तंत्रांचा सराव करा",
                "मोठ्या भावंडांसाठी देखभाल व्यवस्था पूर्ण करा"
            ]
        },
         blood_tests: {
            first: [
                "CBC with ESR",
                "BT/CT",
                "LFT",
                "Hb Electrophoresis",
                "Double Marker",
                "Blood Group (Rh)",
                "Urine-(R)",
                "TFT",
                "RBS",
                "HIV",
                "HBsAg",
                "VDRL",
                "ICT (जर रक्तगट निगेटिव्ह असेल तर)"
            ],
            second: [
                "CBC",
                "GTT (२० वा आठवडा)",
                "Urine-(R)",
                "Quadraple Marker"

            ],
            third: [
                "CBC",
                "GTT (२८ वा आठवडा)",
                "Urine-(R)",
                "ICT (जर रक्तगट निगेटिव्ह असेल तर)",
            ]
        },
        sonography_tests: {
            first: [
                "Dating Scan",
                "NT Scan",
            ],
            second: [
                "Anamoly Scan | TIFFA (Targeted Imaging for Fetal Anamolies) | Targeted Scan",
                "Fetal 2D Echo",
            ],
            third: [
                "Growth Scan + Obstetric Doppler",
                "2nd Growth Scan",
                "NST (Non Stress Test) डॉक्टरांच्या सल्ल्यानुसार"
            ]
        },
        immunization_tests: {
            first: [
                "तुमच्या डॉक्टरांच्या सल्ल्यानुसार लसीकरण घ्यावे.",
            ],
            second: [
                "तुमच्या डॉक्टरांच्या सल्ल्यानुसार लसीकरण घ्यावे.",
            ],
            third: [
                "तुमच्या डॉक्टरांच्या सल्ल्यानुसार लसीकरण घ्यावे."
            ]
        },
        morning_diet: {
    first: [
        "मुरमुरे (लाह्या)", "टोस्ट", "भिजवलेले काळे मनुके ",
    ],
    second: [
        "१ कप दूध, ४–५ भिजवलेले बदाम, १ अक्रोड",
    ],
    third: [
        "कोमट पाणी, कोमट दूध"
    ]
},
breakfast_diet: {
    first: [
        "पोहे | उपमा | दलिया | इडली | मूग चिल्ला | उकडलेली अंडी | दूध", "फळे : सफरचंद, केळी, संत्री, डाळिंब",
    ],
    second: [
        "पराठा | डोसा | इडली | अंडी | पनीर | अंकुरित धान्य (प्रथिने भरपूर)",
    ],
    third: [
        "डाळीया | इडली | ओट्स | अंडी | अंकुरित धान्य (प्रथिने भरपूर)"
    ]
},
lunch_diet: {
    first: [
        "चपाती, भाकरी (ज्वारी, नाचणी), भात, हिरव्या भाज्या (पालक, लाल माठ, भोपळा)", "ताक | दही", "वरण | अंडी", "1-2 चमचा तूप",
    ],
    second: [
        "२ चपाती, भाकरी (ज्वारी, नाचणी), भात, हिरव्या भाज्या (पालक, लाल माठ, भोपळा)", "ताक | दही", "मिक्स वरण | अंडी", "1-2 चमचा तूप | चिकन | मटण (आठवड्यातून एकदा)"," राजमा, छोले",
    ],
    third: [
        "चपाती, भाकरी (ज्वारी, नाचणी), भात, वरण, भाजी (शाकाहारी / मांसाहारी), दही, 1-2 चमचा तूप"
    ]
},
evesnacks_diet: {
    first: [
        "भाजलेले मखाने, नारळ पाणी, फळांचा रस, मुरमुरे",
    ],
    second: [
        "फळे (पेरू, डाळिंब, सफरचंद व हंगामी फळे)", "नारळ पाणी", "गाजर रस + बीटरूट रस",
    ],
    third: [
        "चना, भाजलेले मखाने, ताक"
    ]
},
dinner_diet: {
    first: [
        "चपाती + भाजी", "मूग डाळीची पौष्टिक वरण",
    ],
    second: [
        "चपाती | भाकरी (ज्वारी, नाचणी) + भात",
    ],
    third: [
        "चपाती + भात + वरण"
    ]
},
bedtime_diet: {
    first: [
        "-"
    ],
    second: [
        "कोमट दूध",
    ],
    third: [
        "दूध"
    ]
},
donts_meal: {
    first: [
        "तिखट, खारट, जंक फूड, तळलेले व शिळे अन्न टाळा.",
        "पपई, अननस",
        "जास्त वेळ उपाशी राहू नका.",
        "कच्ची फळे व भाज्या"
    ],
    second: [
        "-",
    ],
    third: [
        "जड अन्न", "अतिरिक्त मीठ", "तळलेले व शिळे अन्न", "खूप वेळ उपाशी राहणे"
    ]
},
excercise_tips: {
    first: [
        "प्राणायाम : अनुलोम विलोम, भ्रामरी",
        "योग : शवासन, सुखासन, वज्रासन (जेवणानंतर)",
        "झोपताना डाव्या कुशीवर झोपा व पायांच्या मध्ये उशी ठेवा."
    ],
    second: [
        "प्राणायाम : अनुलोम विलोम, भ्रामरी",
        "योग : बद्धकोनासन, शवासन, सुखासन, वज्रासन (जेवणानंतर)",
        "दुपारी डाव्या कुशीवर झोपून पुरेसी झोप घ्यावी. "
    ],
    third: [
        "प्राणायाम : अनुलोम विलोम, भ्रामरी",
        "योग : बद्धकोनासन, शवासन, सुखासन, मलासन"
    ]
},
donts_excercise: {
    first: [
        "प्रवास टाळा", "जड वजन उचलू नका", "लैंगिक संबंध टाळा", "खूप वेळ जिने चढ-उतार करू नका"
    ],
    second: [
        "कपालभाती",
        "भस्त्रिका",
        "गर्भपाताची शक्यता, प्लॅसेंटा प्रिव्हिया, तीव्र अ‍ॅनिमिया, गर्भावस्थेतील उच्च रक्तदाब (PIH), हृदयविकार, पूर्वी अकाली प्रसूतीचा इतिहास किंवा जुळी/अनेक गर्भधारणा असल्यास योग करू नये."
    ],
    third: [
        "कपालभाती",
        "भस्त्रिका",
        "गर्भपाताची शक्यता, प्लॅसेंटा प्रिव्हिया, तीव्र अ‍ॅनिमिया, गर्भावस्थेतील उच्च रक्तदाब (PIH), हृदयविकार, पूर्वी अकाली प्रसूतीचा इतिहास किंवा जुळी/अनेक गर्भधारणा असल्यास योग करू नये."
    ]
},

        generalTips : {
            title: "सामान्य गर्भधारण सल्ला",
            points: [
                "पुरेसे पाणी प्या आणि फळे, भाज्या व प्रथिनेयुक्त संतुलित आहार घ्या",
                "डॉक्टरांच्या सल्ल्यानुसार नियमित सौम्य व्यायाम करा",
                "सर्व नियोजित प्रसूतीपूर्व तपासण्यांना उपस्थित रहा",
                "कोणतीही शंका असल्यास त्वरित डॉक्टरांशी संपर्क साधा"
            ]
},
        
    },

    hi: {
        welcome: "नमस्कार। असुविधा के लिए हमें खेद है। इस ऐप तक आपकी पहुंच प्रतिबंधित कर दी गई है।",
        title: "PregHealth - पूर्ण गर्भावस्था सलाहकार",
        description: "अपनी अनुमानित प्रसव तिथि की गणना करें और गर्भावस्था के महत्वपूर्ण चरणों को ट्रैक करें",
        heading: "अपनी प्रसव तिथि की गणना करें",

        lmp: "अंतिम मासिक चक्र",
        conception: "गर्भधारण तिथि",
        ultrasound: "अल्ट्रासाउंड तिथि",
        Current_Stage_tip: "आपकी वर्तमान स्थिति के लिए सुझाव",
        Pregnancy_Milestones: "गर्भावस्था के टप्पे",
        fdlmp: "अंतिम मासिक चक्र का पहला दिन",
        acl: "औसत मासिक चक्र अवधि (दिन)",
        days: " दिन",
        week: " सप्ताह",
        month: " माह",
        Current_Week: "वर्तमान सप्ताह",
        Current_Month: "वर्तमान माह",
        immunization: "प्रतिरक्षीकरण",
        blood_test: "रक्त परीक्षण",
        diet: "आहार",
        reset: "मूल स्थिति में लाएँ",
        sonography: "सोनोग्राफ़ी",
        complete : " पूरा",
        bedtime: "सोने के समय",
        Current_fetal_age: "वर्तमान भ्रूण आयु",
        Conception_date: "गर्भधारण तिथि",
        Days_remaining: "शेष दिन",
        Current_trimester: "वर्तमान तिमाही",
        conceptionLabel: "गर्भधारण तिथि (अनुमानित)",
        conceptionTip: "गर्भधारण आमतौर पर अंतिम मासिक चक्र के पहले दिन के 11–21 दिनों बाद होता है।",

        ultrasoundDate: "अल्ट्रासाउंड तिथि",
        ultrasoundWeeks: "अल्ट्रासाउंड के समय सप्ताह",
        ultrasoundDays: "अतिरिक्त दिन",

        buttonCalculate: "गणना करें",
        excercise: "व्यायाम",
        epdd: "अनुमानित प्रसव तिथि",

        footer1: "यह कैलकुलेटर केवल अनुमान प्रदान करता है और चिकित्सीय सलाह का विकल्प नहीं है।",
        footer2: "अपनी गर्भावस्था के बारे में हमेशा डॉक्टर से सलाह लें।",

        morning: "सुबह \n 7:00 बजे",
        breakfast: "नाश्ता \n 9:00 बजे",
        lunch: "दोपहर का भोजन \n 12:00 बजे - 01:00 बजे",
        evening: "शाम \n 04:00 बजे - 05:00 बजे",
        dinner: "रात का भोजन \n 07:00 बजे - 08:00 बजे",
        dont: "न करें",

        tips: {
            first: [
                "फोलिक एसिड के साथ प्रीनेटल विटामिन लें",
                "शराब और तंबाकू से बचें, कैफीन सीमित रखें",
                "अपनी पहली प्रसवपूर्व जांच तय करें",
                "थकान और मतली जैसे शुरुआती लक्षणों पर ध्यान दें",
                "प्रसव कक्षाओं और डॉक्टरों की जानकारी लेना शुरू करें"
            ],
            second: [
                "आपको बच्चे की हलचल महसूस होने लगेगी",
                "डॉक्टर की सलाह पर जेनेटिक जांच पर विचार करें",
                "गर्भावस्था के लिए सुरक्षित व्यायाम करते रहें",
                "मातृत्व अवकाश की योजना बनाएं",
                "रक्त संचार बेहतर करने के लिए करवट लेकर सोएं",
            ],
            third: [
                "अस्पताल बैग और बर्थ प्लान तैयार करें",
                "डिलीवरी से कम से कम 4 हफ्ते पहले कार सीट लगाएं",
                "प्रीमैच्योर लेबर के संकेतों पर ध्यान दें",
                "श्वास और विश्राम तकनीकों का अभ्यास करें",
                "बड़े बच्चों की देखभाल की व्यवस्था पूरी करें"
            ]
        },
        blood_tests: {
            first: [
                "CBC with ESR",
                "BT/CT",
                "LFT",
                "Hb Electrophoresis",
                "Double Marker",
                "Blood Group (Rh)",
                "Urine-(R)",
                "TFT",
                "RBS",
                "HIV",
                "HBsAg",
                "VDRL",
                "ICT (यदि रक्त समूह नेगेटिव है)"
            ],
            second: [
                "CBC",
                "GTT (20वां सप्ताह)",
                "Urine-(R)",
                "Quadraple Marker"

            ],
            third: [
                "CBC",
                "GTT (28 वां सप्ताह)",
                "Urine-(R)",
                "ICT (यदि रक्त समूह नेगेटिव है)",
            ]
        },
        sonography_tests: {
            first: [
                "Dating Scan",
                "NT Scan",
            ],
            second: [
                "Anamoly Scan | TIFFA (Targeted Imaging for Fetal Anamolies) | Targeted Scan",
                "Fetal 2D Echo",
            ],
            third: [
                "Growth Scan + Obstetric Doppler",
                "2nd Growth Scan",
                "NST (Non Stress Test) अपने डॉक्टर की सलाह के अनुसार"
            ]
        },
        immunization_tests: {
            first: [
                "आप अपने डॉक्टर की सलाह के अनुसार ही टीका ले।",
            ],
            second: [
                "आप अपने डॉक्टर की सलाह के अनुसार ही टीका ले।",
            ],
            third: [
                "आप अपने डॉक्टर की सलाह के अनुसार ही टीका ले।"
            ]
        },
        morning_diet: {
            first: [
                "मुरमुरा (लहिया)", "टोस्ट", "भीगी हुई काली किशमिश",
            ],
            second: [
                "1 कप दूध", "4–5 भीगे हुए बादाम", "1 अखरोट",
            ],
            third: [
                "गुनगुना पानी, गुनगुना दूध"
            ]
        },
        breakfast_diet: {
            first: [
                "पोहा | उपमा | दलिया | इडली | मूंग चिल्ला | उबले अंडे | दूध", "फल : सेब, केला, संतरा, अनार",
            ],
            second: [
                "पराठा | डोसा | इडली | अंडे | पनीर | अंकुरित अनाज (प्रोटीन से भरपूर)",
            ],
            third: [
                "दलिया | इडली | ओट्स | अंडे | अंकुरित अनाज (प्रोटीन से भरपूर)"
            ]
        },
        lunch_diet: {
            first: [
                "चपाती, भाकरी (ज्वार, बाजरा), चावल, हरी सब्जियां (पालक, लाल माठ, कद्दू)", "छाछ | दही", "दाल | अंडे", "1-2 चम्मच घी",
            ],
            second: [
                "2 चपाती, भाकरी (ज्वार, बाजरा), चावल, हरी सब्जियां (पालक, लाल माठ, कद्दू)"," छाछ | दही", "मिक्स दाल | अंडे", "1-2 चम्मच घी | चिकन | मटन (हफ्ते में एक बार)", "राजमा, छोले",
            ],
            third: [
                "चपाती, भाकरी (ज्वार, बाजरा), चावल, दाल, सब्जी (शाकाहारी / मांसाहारी), दही, 1-2 चम्मच घी"
            ]
        },
        evesnacks_diet: {
            first: [
                "भुने हुए मखाने, नारियल पानी, मुरमुरा, फलों का रस",
            ],
            second: [
                "फल (अमरूद, अनार, सेब और मौसमी फल)", "नारियल पानी", "गाजर रस + चुकंदर रस",
            ],
            third: [
                "चना, भुने हुए मखाने, छाछ"
            ]
        },
        dinner_diet: {
            first: [
                "चपाती + सब्जी", "मूंग दाल से बनी पौष्टिक दाल",
            ],
            second: [
                "चपाती | भाकरी (ज्वार, बाजरा) + चावल",
            ],
            third: [
                "चपाती + चावल + दाल"
            ]
        },
        bedtime_diet: {
            first: [
                "-"
            ],
            second: [
                "गुनगुना दूध",
            ],
            third: [
                "दूध"
            ]
        },
        donts_meal: {
            first: [
                "मसालेदार, ज्यादा नमक वाला, जंक फूड, तला हुआ और बासी भोजन न करें।",
                "पपीता, अनानास",
                "लंबे समय तक भूखे न रहें।",
                "कच्चे फल और सब्जियां"
            ],
            second: [
                "-",
            ],
            third: [
                "भारी भोजन", "अधिक नमक का सेवन", "तला हुआ और बासी भोजन", "लंबे समय तक भूखा रहना"
            ]
        },
        excercise_tips: {
            first: [
                "प्राणायाम : अनुलोम विलोम, भ्रामरी",
                "योग : शवासन, सुखासन, वज्रासन (भोजन के बाद)",
                "सोते समय बाईं करवट सोएं और पैरों के बीच तकिया रखें।"
            ],
            second: [
                "प्राणायाम : अनुलोम विलोम, भ्रामरी",
                "योग : बद्धकोणासन, शवासन, सुखासन, वज्रासन (भोजन के बाद)",
                "दिन में 2–3 बार 10–15 मिनट बाईं करवट लेटकर गहरी सांस लें।"
            ],
            third: [
                "प्राणायाम : अनुलोम विलोम, भ्रामरी",
                "योग : बद्धकोणासन, शवासन, सुखासन, मलासन"
            ]
        },
        donts_excercise: {
            first: [
                "यात्रा से बचें", "भारी वजन न उठाएं", "संभोग से बचें", "लंबे समय तक सीढ़ियां न चढ़ें"
            ],
            second: [
                "कपालभाति",
                "भस्त्रिका",
                "यदि गर्भपात का खतरा, प्लेसेंटा प्रीविया, गंभीर एनीमिया, गर्भावस्था में उच्च रक्तचाप (PIH), हृदय रोग, समय से पहले प्रसव का इतिहास या जुड़वां/एक से अधिक गर्भ हो तो योग न करें।"
            ],
            third: [
                "कपालभाति",
                "भस्त्रिका",
                "यदि गर्भपात का खतरा, प्लेसेंटा प्रीविया, गंभीर एनीमिया, गर्भावस्था में उच्च रक्तचाप (PIH), हृदय रोग, समय से पहले प्रसव का इतिहास या जुड़वां/एक से अधिक गर्भ हो तो योग न करें।"
            ]
        },
        generalTips: {
                    title: "सामान्य गर्भावस्था सलाह",
                    points: [
                        "खूब पानी पिएं और फल, सब्ज़ियों व प्रोटीन से भरपूर संतुलित आहार लें",
                        "डॉक्टर की सलाह अनुसार नियमित हल्का व्यायाम करें",
                        "सभी निर्धारित प्रसवपूर्व जांच में शामिल हों",
                        "किसी भी चिंता में तुरंत अपने डॉक्टर से संपर्क करें"
                    ]
                },

            }
    };


function getWeekRange(date, weekNumber, savedLang = "en") {
    if (!date || weekNumber == null) return null;

    // Extract weeks and days
    const fullWeeks = Math.floor(weekNumber);          // 1
    const extraDays = Math.round((weekNumber - fullWeeks) * 10); // .3 → 3 days

    // Total offset in days
    const startOffset = (fullWeeks - 1) * 7 + extraDays;

    const start = new Date(date);
    start.setDate(start.getDate() + startOffset);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    return {
        weekNumber,
        startDate: start,
        endDate: end,
        text: {
            start: ` ${formatDate(start, savedLang)}`,
            end: ` ${formatDate(end, savedLang)}`
        }
    };
}

function showWelcome() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.welcome').style.display = 'block';
}

function showContainer() {
    document.querySelector('.welcome').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

if(false)
{
showWelcome()
}else{
showContainer()
}
    
