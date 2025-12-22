document.addEventListener('DOMContentLoaded', function () {

    /* ===============================
       GLOBAL STATE
    =============================== */
    let savedLang = localStorage.getItem("lang") || "en";
    let globalCurrentWeek = null;
    let globalTrimester = null;

  

    /* ===============================
       LANGUAGE SWITCH
    =============================== */
    const switcher = document.getElementById("languageSwitcher");
     const lmpMethodBtn = document.getElementById('lmpMethodBtn');
    switcher.value = savedLang;
    setLanguage(savedLang);

    switcher.addEventListener("change", () => setLanguage(switcher.value));

    function setLanguage(lang) {
        savedLang = lang;
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.dataset.lang;
            if (translations[lang]?.[key]) {
                el.innerText = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        var lmpDate = new Date(document.getElementById('lmp-date').value);
        let dueDate;
        if (lmpMethodBtn.classList.contains('active')) {
            
            let cycleLength = +document.getElementById('cycle-length').value || 28;
            dueDate = new Date(lmpDate);
            dueDate.setDate(dueDate.getDate() + 280);

            conceptionDate = new Date(lmpDate);
            conceptionDate.setDate(conceptionDate.getDate() + (cycleLength - 14));
        }
        else if (conceptionMethodBtn.classList.contains('active')) {
            conceptionDate = new Date(document.getElementById('conception-date').value);
            dueDate = new Date(conceptionDate);
            dueDate.setDate(dueDate.getDate() + 266);
        }
        else {
            const ultrasoundDate = new Date(document.getElementById('ultrasound-date').value);
            const weeks = +document.getElementById('ultrasound-weeks').value || 0;
            const days = +document.getElementById('ultrasound-days').value || 0;

            conceptionDate = new Date(ultrasoundDate);
            conceptionDate.setDate(conceptionDate.getDate() - (weeks * 7 + days) + 14);

            dueDate = new Date(conceptionDate);
            dueDate.setDate(dueDate.getDate() + 266);
        }
        let td = new Date();
        console.log("Conceptiondate "+lmpDate);
        generateMilestones(dueDate, conceptionDate, td, lang);
        generateTips(lmpDate, document.getElementById('trimester').textContent);
    }

    /* ===============================
       METHOD TOGGLE
    =============================== */
   
    const conceptionMethodBtn = document.getElementById('conceptionMethodBtn');
    const ultrasoundMethodBtn = document.getElementById('ultrasoundMethodBtn');
    const lmpMethod = document.getElementById('lmpMethod');
    const conceptionMethod = document.getElementById('conceptionMethod');
    const ultrasoundMethod = document.getElementById('ultrasoundMethod');

    function toggleMethod(activeBtn, activeMethod) {
        [lmpMethodBtn, conceptionMethodBtn, ultrasoundMethodBtn].forEach(b => b.classList.remove('active'));
        [lmpMethod, conceptionMethod, ultrasoundMethod].forEach(m => m.classList.add('hidden'));
        activeBtn.classList.add('active');
        activeMethod.classList.remove('hidden');
    }

    lmpMethodBtn.onclick = () => toggleMethod(lmpMethodBtn, lmpMethod);
    conceptionMethodBtn.onclick = () => toggleMethod(conceptionMethodBtn, conceptionMethod);
    ultrasoundMethodBtn.onclick = () => toggleMethod(ultrasoundMethodBtn, ultrasoundMethod);

    /* ===============================
       BUTTONS
    =============================== */
    document.getElementById('calculate-btn').onclick = calculateDueDate;
    document.getElementById('reset-btn').onclick = resetCalculator;
    const resultContainer = document.getElementById('result-container');

    ['lmp-date', 'conception-date', 'ultrasound-date']
        .forEach(id => document.getElementById(id).valueAsDate = new Date());

    /* ===============================
       CALCULATE DUE DATE
    =============================== */
    function calculateDueDate() {
        let dueDate, conceptionDate;
        let lmpDate;
        if (lmpMethodBtn.classList.contains('active')) {
            lmpDate = new Date(document.getElementById('lmp-date').value);
            const cycleLength = +document.getElementById('cycle-length').value || 28;

            dueDate = new Date(lmpDate);
            dueDate.setDate(dueDate.getDate() + 280);

            conceptionDate = new Date(lmpDate);
            conceptionDate.setDate(conceptionDate.getDate() + (cycleLength - 14));
        }
        else if (conceptionMethodBtn.classList.contains('active')) {
            conceptionDate = new Date(document.getElementById('conception-date').value);
            dueDate = new Date(conceptionDate);
            dueDate.setDate(dueDate.getDate() + 266);
        }
        else {
            const ultrasoundDate = new Date(document.getElementById('ultrasound-date').value);
            const weeks = +document.getElementById('ultrasound-weeks').value || 0;
            const days = +document.getElementById('ultrasound-days').value || 0;

            conceptionDate = new Date(ultrasoundDate);
            conceptionDate.setDate(conceptionDate.getDate() - (weeks * 7 + days) + 14);

            dueDate = new Date(conceptionDate);
            dueDate.setDate(dueDate.getDate() + 266);
        }
        displayResults(dueDate, conceptionDate,lmpDate);
    }

    /* ===============================
       DISPLAY RESULTS
    =============================== */
   function displayResults(dueDate, conceptionDate, lmpDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let savedLang = localStorage.getItem("lang") || "en";
        // Format dates
        const dueDateStr = formatDate(dueDate,savedLang);
        const conceptionDateStr = formatDate(conceptionDate,savedLang);
        
        // Calculate pregnancy progress
        const totalDays = 280;
        const daysPassed = Math.ceil((today - conceptionDate) / (1000 * 60 * 60 * 24)) + 14;
        const daysRemaining = totalDays - daysPassed;
        const progressPercent = Math.min(100, Math.max(0, Math.round((daysPassed / totalDays) * 100)));
        
        // Calculate weeks and days
        const currentWeek = Math.floor(daysPassed / 7);
        const currentDay = daysPassed % 7;

        const currentFatalAgeWeek = Math.floor((daysPassed) / 7);
        const currentFatalAgeDay = (daysPassed) % 7;

        const actualcurrentWeek = currentDay > 0 ? currentWeek + 1 : currentWeek;
        
        if(actualcurrentWeek < 0 || actualcurrentWeek >= 40)
        {
           alert('Please enter valid details.');
                return; 
        }
        // Determine trimester
        let trimester;
        if (daysPassed < 98) trimester = "1st";
        else if (daysPassed < 196) trimester = "2nd";
        else trimester = "3rd";
    
        // Update DOM
        document.getElementById('due-date').textContent = dueDateStr;
        document.getElementById('conception-date-result').textContent = conceptionDateStr;

        document.getElementById('current-week').textContent = `${currentWeek}`;
        document.getElementById('current-week-days').textContent = `${currentDay}`;
        document.getElementById('progress-percent').textContent = `${progressPercent}%`;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
        document.getElementById('trimester').textContent = trimester;
        document.getElementById('days-remaining').textContent = daysRemaining > 0 ? daysRemaining : 0;
        document.getElementById('fetal-age').textContent = `${currentFatalAgeWeek}`;
        document.getElementById('fetal-age-days').textContent = `${currentFatalAgeDay}`;
        document.getElementById('current-running-week').textContent = `${actualcurrentWeek}`;
        document.getElementById('current-month').textContent = `${weeksToMonths(actualcurrentWeek)}`;
        
        // Generate milestones
        generateMilestones(dueDate, conceptionDate, today, savedLang);
        
        // Generate tips
        generateTips(lmpDate, trimester);
        
        // Show results
        resultContainer.style.display = 'block';

       resultContainer.scrollIntoView({ behavior: "smooth" });
    }

     function generateMilestones(dueDate, conceptionDate, today, lang) {
        const milestonesList = document.getElementById('milestones-list');
        
        milestonesList.innerHTML = '';
        
    
        const todayDays = Math.floor((today - conceptionDate) / (1000 * 60 * 60 * 24)) + 14;
        
        let milestones = [];

        if(lang == 'en')
        {
        milestones = [
                { days: 0, title: "Conception date", icon: "fas fa-calendar" },
                { days: 14, title: "Ovulation likely occurred", icon: "fas fa-egg" },
                { days: 21, title: "Possible implantation", icon: "fas fa-heart" },
                { days: 28, title: "Missed period - pregnancy test possible", icon: "fas fa-vial" },
                { days: 42, title: "First prenatal visit (6 weeks)", icon: "fas fa-stethoscope" },
                { days: 84, title: "End of first trimester (12 weeks)", icon: "fas fa-flag" },
                { days: 98, title: "Second trimester begins (14 weeks)", icon: "fas fa-baby" },
                { days: 140, title: "Anatomy scan (20 weeks)", icon: "fas fa-ultrasound" },
                { days: 168, title: "Third trimester begins (24 weeks)", icon: "fas fa-running" },
                { days: 252, title: "Full-term (36 weeks)", icon: "fas fa-check-circle" },
                { days: 266, title: "Estimated due date (40 weeks)", icon: "fas fa-birthday-cake" }
            ];
        }
         
        if (lang === 'hi') {
            milestones = [
                { days: 0, title: "गर्भधारण तिथि", icon: "fas fa-calendar" },
                { days: 14, title: "संभवतः ओव्यूलेशन हुआ", icon: "fas fa-egg" },
                { days: 21, title: "संभावित इम्प्लांटेशन", icon: "fas fa-heart" },
                { days: 28, title: "मासिक धर्म छूटा – गर्भावस्था परीक्षण संभव", icon: "fas fa-vial" },
                { days: 42, title: "पहली प्रसवपूर्व जांच (6 सप्ताह)", icon: "fas fa-stethoscope" },
                { days: 84, title: "पहली तिमाही का अंत (12 सप्ताह)", icon: "fas fa-flag" },
                { days: 98, title: "दूसरी तिमाही की शुरुआत (14 सप्ताह)", icon: "fas fa-baby" },
                { days: 140, title: "एनाटॉमी स्कैन (20 सप्ताह)", icon: "fas fa-ultrasound" },
                { days: 168, title: "तीसरी तिमाही की शुरुआत (24 सप्ताह)", icon: "fas fa-running" },
                { days: 252, title: "पूर्ण अवधि (36 सप्ताह)", icon: "fas fa-check-circle" },
                { days: 266, title: "अनुमानित प्रसव तिथि (40 सप्ताह)", icon: "fas fa-birthday-cake" }
            ];
        }

        if (lang === 'mr') {
            milestones = [
                { days: 0, title: "गर्भधारणेची तारीख", icon: "fas fa-calendar" },
                { days: 14, title: "संभवतः ओव्यूलेशन झाले", icon: "fas fa-egg" },
                { days: 21, title: "संभाव्य गर्भरोपण", icon: "fas fa-heart" },
                { days: 28, title: "मासिक पाळी चुकली – गर्भधारणा चाचणी शक्य", icon: "fas fa-vial" },
                { days: 42, title: "पहिली प्रसूतीपूर्व तपासणी (6 आठवडे)", icon: "fas fa-stethoscope" },
                { days: 84, title: "पहिल्या त्रैमासिकाचा शेवट (12 आठवडे)", icon: "fas fa-flag" },
                { days: 98, title: "दुसऱ्या त्रैमासिकाची सुरुवात (14 आठवडे)", icon: "fas fa-baby" },
                { days: 140, title: "अ‍ॅनाटॉमी स्कॅन (20 आठवडे)", icon: "fas fa-ultrasound" },
                { days: 168, title: "तिसऱ्या त्रैमासिकाची सुरुवात (24 आठवडे)", icon: "fas fa-running" },
                { days: 252, title: "पूर्ण कालावधी (36 आठवडे)", icon: "fas fa-check-circle" },
                { days: 266, title: "अंदाजे प्रसूती तारीख (40 आठवडे)", icon: "fas fa-birthday-cake" }
            ];
        }

        milestones.forEach(milestone => {
            const milestoneDate = new Date(conceptionDate);
            milestoneDate.setDate(milestoneDate.getDate() + milestone.days);
            
            let status;
            if (milestone.days < todayDays - 7) status = "completed";
            else if (milestone.days <= todayDays + 7) status = "current";
            else status = "upcoming";
            
            const milestoneEl = document.createElement('div');
            milestoneEl.className = `milestone ${status}`;
            milestoneEl.innerHTML = `
                <div class="milestone-icon"><i class="${milestone.icon}"></i></div>
                <div class="milestone-content">
                    <div class="milestone-date">${formatDate(milestoneDate,lang)}</div>
                    <div class="milestone-title">${milestone.title}</div>
                </div>
            `;
            
            milestonesList.appendChild(milestoneEl);
        });
    }
    
    /* ===============================
       TIPS
    =============================== */
    function generateTips(lmpDate, trimester) {
        const container = document.getElementById('pregnancy-tips');
        container.innerHTML = '';

        const bloodTestList = document.getElementById('blood-test-list');
        bloodTestList.innerHTML = '';

        const sonographyTestList = document.getElementById('sonography-test-list');
        sonographyTestList.innerHTML = '';

        const immunizationTestList = document.getElementById('immunization-test-list');
        immunizationTestList.innerHTML = '';

        const phase = trimester === "1st" ? "first" : trimester === "2nd" ? "second" : "third";
        const tips = translations[savedLang]?.tips?.[phase] || [];
        const bloodTests = translations[savedLang]?.blood_tests?.[phase] || [];
        const sonographyTests = translations[savedLang]?.sonography_tests?.[phase] || [];
        const imminizationTests = translations[savedLang]?.immunization_tests?.[phase] || [];
       

        tips.forEach(tip => {
            const el = document.createElement('div');
            el.className = 'tip-card';
            el.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success); margin-right: 0.5rem;"></i> ${tip}`;
            container.appendChild(el);
        });

       const ol = document.createElement('ol');
        ol.type = "1";

        const bloodWeeks = {
            "Double Marker": [11, 13.6],
            "Quadraple Marker": [15, 22.6],
        };
        const langBloodWeeks = {
            "hi": {
                "Week": "सप्ताह",
                "Weeks": "सप्ताह",
                "to": "से"
            },
            "mr": {
                "Week": "आठवडा",
                "Weeks": "आठवडे",
                "to": "ते"
            },
            "en": {
                "Week": "week",
                "Weeks": "weeks",
                "to": "to"
            }
              
        }

        bloodTests.forEach(tip => {
            const li = document.createElement('li');
            let bweekText = "";
            let week;
            const Brange = bloodWeeks[tip];
            if (Brange) {
                const bstart = getWeekRange(lmpDate, Brange[0], savedLang).text.start;
                const bend = getWeekRange(lmpDate, Brange[1], savedLang).text.end;
                if(Brange[0] === Brange[1])
                {
                    week =  " - " + Brange[0] + " " + langBloodWeeks[savedLang]["Week"] + " - ";
                }else{
                    week = " - " + Brange[0] + " " + langBloodWeeks[savedLang]["to"] + " " + Brange[1] + " " + langBloodWeeks[savedLang]["Weeks"] + " - ";
                }
                bweekText = `\n ( ${bstart}  ${+ langBloodWeeks[savedLang]["to"] +}  ${bend} )`;
            }
            li.innerHTML = `<i class="fa-solid fa-droplet" style="color: var(--danger); margin-right: 0.5rem;"></i> ${tip} ` + week + bweekText;
            ol.appendChild(li);
        });

        bloodTestList.appendChild(ol);


        const sol = document.createElement('ul');
        sol.style.listStyleType = "circle";

        const scanWeeks = {
            "Dating Scan": [6, 8],
            "NT Scan": [11, 13.6],
            "Fetal 2D Echo": [24, 24],
            "Growth Scan + Obstetric Doppler": [28, 32],
            "2nd Growth Scan": [36, 37]
        };

       sonographyTests.forEach(tip => {

            const li = document.createElement('li');
            let weekText = "";
            let week;
            const range = scanWeeks[tip];
            if (range) {
                const start = getWeekRange(lmpDate, range[0], savedLang).text.start;
                const end = getWeekRange(lmpDate, range[1], savedLang).text.end;
                if(range[0] === range[1])
                {
                    week =  " - " + range[0] + " " + langBloodWeeks[savedLang]["Week"] + " - ";
                }else{
                    week = " - " + range[0] + " " + langBloodWeeks[savedLang]["to"] + " " + range[1] + " " + langBloodWeeks[savedLang]["Weeks"] + " - ";
                }
                weekText = `\n ( ${start}  ${+ langBloodWeeks[savedLang]["to"] +}  ${end} )`;
            }

            li.textContent = tip + week + weekText;
            sol.appendChild(li);
        });


        sonographyTestList.appendChild(sol);

        const iol = document.createElement('ol');
             iol.type = "1";

        imminizationTests.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                iol.appendChild(li);
            });

        immunizationTestList.appendChild(iol);

        const MorningList = document.getElementById('morning');
        MorningList.innerHTML = '';
        const morningDiet = translations[savedLang]?.morning_diet?.[phase] || [];
        
        const morning = document.createElement('ul');
        morning.style.listStyleType = "circle";

        morningDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            morning.appendChild(li);
        });

        MorningList.appendChild(morning);


        const breakfastList = document.getElementById('breakfast');
        breakfastList.innerHTML = '';
        const breakfastDiet = translations[savedLang]?.breakfast_diet?.[phase] || [];
        
        const breakfast = document.createElement('ul');
        breakfast.style.listStyleType = "circle";

        breakfastDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            breakfast.appendChild(li);
        });

        breakfastList.appendChild(breakfast);


        const lunchList = document.getElementById('lunch');
        lunchList.innerHTML = '';
        const lunchDiet = translations[savedLang]?.lunch_diet?.[phase] || [];
        
        const lunch = document.createElement('ul');
        lunch.style.listStyleType = "circle";

        lunchDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            lunch.appendChild(li);
        });

        lunchList.appendChild(lunch);


        const evesnacksList = document.getElementById('evesnacks');
        evesnacksList.innerHTML = '';
        const evesnacksDiet = translations[savedLang]?.evesnacks_diet?.[phase] || [];
        
        const evesnacks = document.createElement('ul');
        evesnacks.style.listStyleType = "circle";

        evesnacksDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            evesnacks.appendChild(li);
        });

        evesnacksList.appendChild(evesnacks);


        const dinnerList = document.getElementById('dinner');
        dinnerList.innerHTML = '';
        const dinnerDiet = translations[savedLang]?.dinner_diet?.[phase] || [];
        
        const dinner = document.createElement('ul');
        dinner.style.listStyleType = "circle";

        dinnerDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            dinner.appendChild(li);
        });

        dinnerList.appendChild(dinner);

        const bedtimeList = document.getElementById('bedtime_diet');
        bedtimeList.innerHTML = '';
        const bedtimeDiet = translations[savedLang]?.bedtime_diet?.[phase] || [];
        
        const bedtime = document.createElement('ul');
        bedtime.style.listStyleType = "circle";

        bedtimeDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            bedtime.appendChild(li);
        });

        bedtimeList.appendChild(bedtime);
        

        const donts_mealList = document.getElementById('donts_meal');
        donts_mealList.innerHTML = '';
        const donts_mealDiet = translations[savedLang]?.donts_meal?.[phase] || [];
        
        const donts_meal = document.createElement('ul');
        donts_meal.style.listStyleType = "circle";

        donts_mealDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            donts_meal.appendChild(li);
        });

        donts_mealList.appendChild(donts_meal);


        const excercise_tipsList = document.getElementById('excercise_tips');
        excercise_tipsList.innerHTML = '';
        const excercise_tipsDiet = translations[savedLang]?.excercise_tips?.[phase] || [];
        
        const excercise_tips = document.createElement('ul');
        excercise_tips.style.listStyleType = "circle";

        excercise_tipsDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            excercise_tips.appendChild(li);
        });

        excercise_tipsList.appendChild(excercise_tips);

        const donts_excerciseList = document.getElementById('donts_excercise');
        donts_excerciseList.innerHTML = '';
        const donts_excerciseDiet = translations[savedLang]?.donts_excercise?.[phase] || [];
        
        const donts_excercise = document.createElement('ul');
        donts_excercise.style.listStyleType = "circle";

        donts_excerciseDiet.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = ` ${tip}`;
            donts_excercise.appendChild(li);
        });

        donts_excerciseList.appendChild(donts_excercise);

        // Add general tips
        const generalTipsData = translations[savedLang]?.generalTips;

            if (generalTipsData) {
                const generalTipEl = document.createElement('div');
                generalTipEl.className = 'tip-card';

                generalTipEl.innerHTML = `
                    <div class="tip-title">
                        <i class="fas fa-info-circle" style="color: var(--info); margin-right: 0.5rem;"></i>
                        ${generalTipsData.title}
                    </div>
                    <div class="tip-content">
                        ${generalTipsData.points.map(p => `<p>• ${p}</p>`).join("")}
                    </div>
                `;

                container.appendChild(generalTipEl);
            }

    }

    /* ===============================
       RESET
    =============================== */
    function resetCalculator() {
        console.log("Resetting calculator...");
        resultContainer.style.display = 'none';
        globalCurrentWeek = globalTrimester = null;
        ['lmp-date', 'conception-date', 'ultrasound-date']
        .forEach(id => document.getElementById(id).valueAsDate = new Date());
        lmpMethodBtn.click();
    }

    // function formatDate(date) {
    //     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    // }


    function weeksToMonths(weeks) {
    return Math.min(Math.ceil(weeks / 4), 9);
}

});



