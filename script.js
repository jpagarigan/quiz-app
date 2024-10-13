const scientific_constants = {
    1: {"name": "Proton mass (mp)", "value": "1.67 × 10⁻²⁷ kg"},
    2: {"name": "Neutron mass (mn)", "value": "1.67 × 10⁻²⁷ kg"},
    3: {"name": "Electron mass (me)", "value": "9.11 × 10⁻³¹ kg"},
    4: {"name": "Muon mass (mμ)", "value": "1.88 × 10⁻²⁸ kg"},
    5: {"name": "Bohr radius (a₀)", "value": "5.29 × 10⁻¹¹ m"},
    6: {"name": "Planck constant (h)", "value": "6.63 × 10⁻³⁴ J·s"},
    7: {"name": "Nuclear magneton (μN)", "value": "5.05 × 10⁻²⁷ J·T⁻¹"},
    8: {"name": "Bohr magneton (μB)", "value": "9.27 × 10⁻²⁴ J·T⁻¹"},
    9: {"name": "Rationalized Planck constant (ħ)", "value": "1.05 × 10⁻³⁴ J·s"},
    10: {"name": "Fine-structure constant (α)", "value": "7.30 × 10⁻³"},
    11: {"name": "Classical electron radius (re)", "value": "2.82 × 10⁻¹⁵ m"},
    12: {"name": "Compton wavelength (λₑ)", "value": "2.43 × 10⁻¹² m"},
    13: {"name": "Proton gyromagnetic ratio (γₚ)", "value": "2.68 × 10⁸ s⁻¹·T⁻¹"},
    14: {"name": "Proton Compton wavelength (λₚ)", "value": "1.32 × 10⁻¹⁵ m"},
    15: {"name": "Neutron Compton wavelength (λₙ)", "value": "1.32 × 10⁻¹⁵ m"},
    16: {"name": "Rydberg constant (R∞)", "value": "1.10 × 10⁷ m⁻¹"},
    17: {"name": "Atomic mass unit (u)", "value": "1.66 × 10⁻²⁷ kg"},
    18: {"name": "Proton magnetic moment (μₚ)", "value": "1.41 × 10⁻²⁶ J·T⁻¹"},
    19: {"name": "Electron magnetic moment (μₑ)", "value": "9.28 × 10⁻²⁴ J·T⁻¹"},
    20: {"name": "Neutron magnetic moment (μₙ)", "value": "−9.66 × 10⁻²⁷ J·T⁻¹"},
    21: {"name": "Muon magnetic moment (μμ)", "value": "4.49 × 10⁻²⁶ J·T⁻¹"},
    22: {"name": "Faraday constant (F)", "value": "9.65 × 10⁴ C·mol⁻¹"},
    23: {"name": "Elementary charge (e)", "value": "1.60 × 10⁻¹⁹ C"},
    24: {"name": "Avogadro constant (NA)", "value": "6.02 × 10²³ mol⁻¹"},
    25: {"name": "Boltzmann constant (k)", "value": "1.38 × 10⁻²³ J·K⁻¹"},
    26: {"name": "Molar volume of ideal gas (Vm, 273.15K, 100kPa)", "value": "2.24 × 10⁻² m³·mol⁻¹"},
    27: {"name": "Molar gas constant (R)", "value": "8.31 J·mol⁻¹·K⁻¹"},
    28: {"name": "Speed of light in vacuum (C₀)", "value": "3.00 × 10⁸ m·s⁻¹"},
    29: {"name": "First radiation constant (C₁)", "value": "3.74 × 10⁸ W·m²"},
    30: {"name": "Second radiation constant (C₂)", "value": "1.44 × 10⁻² m·K"},
    31: {"name": "Stefan-Boltzmann constant (σ)", "value": "5.67 × 10⁻⁸ W·m⁻²·K⁻⁴"},
    32: {"name": "Electric constant (ε₀)", "value": "8.85 × 10⁻¹² F·m⁻¹"},
    33: {"name": "Magnetic constant (μ₀)", "value": "1.26 × 10⁻⁶ N·A⁻²"},
    34: {"name": "Magnetic flux quantum (Φ₀)", "value": "2.07 × 10⁻¹⁵ Wb"},
    35: {"name": "Standard acceleration of gravity (g)", "value": "9.81 m·s⁻²"},
    36: {"name": "Conductance quantum (G₀)", "value": "7.75 × 10⁻⁵ S"},
    37: {"name": "Characteristic impedance of vacuum (Z₀)", "value": "3.77 × 10² Ω"},
    38: {"name": "Celsius temperature (t)", "value": "273.15 K"},
    39: {"name": "Newtonian constant of gravitation (G)", "value": "6.67 × 10⁻¹¹ m³·kg⁻¹·s⁻²"},
    40: {"name": "Standard atmosphere (atm)", "value": "1.01 × 10⁵ Pa"}
};

const metric_conversions = {
    1: {"name": "Inches to centimeters", "units": "in → cm"},
    2: {"name": "Centimeters to inches", "units": "cm → in"},
    3: {"name": "Feet to meters", "units": "ft → m"},
    4: {"name": "Meters to feet", "units": "m → ft"},
    5: {"name": "Yards to meters", "units": "yd → m"},
    6: {"name": "Meters to yards", "units": "m → yd"},
    7: {"name": "Miles to kilometers", "units": "mile → km"},
    8: {"name": "Kilometers to miles", "units": "km → mile"},
    9: {"name": "Nautical miles to meters", "units": "n mile → m"},
    10: {"name": "Meters to nautical miles", "units": "m → n mile"},
    11: {"name": "Acres to square meters", "units": "acre → m²"},
    12: {"name": "Square meters to acres", "units": "m² → acre"},
    13: {"name": "Gallons (US) to liters", "units": "gal (US) → ℓ"},
    14: {"name": "Liters to gallons (US)", "units": "ℓ → gal (US)"},
    15: {"name": "Gallons (UK) to liters", "units": "gal (UK) → ℓ"},
    16: {"name": "Liters to gallons (UK)", "units": "ℓ → gal (UK)"},
    17: {"name": "Parsecs to kilometers", "units": "pc → km"},
    18: {"name": "Kilometers to parsecs", "units": "km → pc"},
    19: {"name": "Kilometers per hour to meters per second", "units": "km/h → m/s"},
    20: {"name": "Meters per second to kilometers per hour", "units": "m/s → km/h"},
    21: {"name": "Ounces to grams", "units": "oz → g"},
    22: {"name": "Grams to ounces", "units": "g → oz"},
    23: {"name": "Pounds to kilograms", "units": "lb → kg"},
    24: {"name": "Kilograms to pounds", "units": "kg → lb"},
    25: {"name": "Atmospheres to pascals", "units": "atm → Pa"},
    26: {"name": "Pascals to atmospheres", "units": "Pa → atm"},
    27: {"name": "Millimeters of mercury to pascals", "units": "mmHg → Pa"},
    28: {"name": "Pascals to millimeters of mercury", "units": "Pa → mmHg"},
    29: {"name": "Horsepower to kilowatts", "units": "hp → kW"},
    30: {"name": "Kilowatts to horsepower", "units": "kW → hp"},
    31: {"name": "Kilogram-force per square centimeter to pascals", "units": "kgf/cm² → Pa"},
    32: {"name": "Pascals to kilogram-force per square centimeter", "units": "Pa → kgf/cm²"},
    33: {"name": "Kilogram-force meter to joules", "units": "kgf·m → J"},
    34: {"name": "Joules to kilogram-force meter", "units": "J → kgf·m"},
    35: {"name": "Pounds-force per square inch to kilopascals", "units": "lbf/in² → kPa"},
    36: {"name": "Kilopascals to pounds-force per square inch", "units": "kPa → lbf/in²"},
    37: {"name": "Fahrenheit to Celsius", "units": "°F → °C"},
    38: {"name": "Celsius to Fahrenheit", "units": "°C → °F"},
    39: {"name": "Joules to calories", "units": "J → cal"},
    40: {"name": "Calories to joules", "units": "cal → J"}
};


let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(type) {
    document.getElementById('title').style.display = 'none';
    document.getElementById('constants-btn').style.display = 'none';
    document.getElementById('conversions-btn').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('choices').style.display = 'block';

    if (type === 'constants') {
        currentQuestions = Object.values(scientific_constants);
    } else {
        currentQuestions = Object.values(metric_conversions);
    }

    getNextQuestion();
}

function getNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = `What is the Constant or Conversion for ${currentQuestionIndex + 1}?`;

        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';

        const correctAnswer = currentQuestion.name + (currentQuestion.value || currentQuestion.units);
        const choices = [...currentQuestions.map(q => q.name + (q.value || q.units)), correctAnswer];
        shuffleArray(choices);

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.onclick = () => checkAnswer(button, correctAnswer);
            choicesDiv.appendChild(button);
        });

        document.getElementById('next-btn').style.display = 'none';
    } else {
        endQuiz();
    }
}

function checkAnswer(button, correctAnswer) {
    if (button.innerText === correctAnswer) {
        button.style.backgroundColor = 'green';
        score++;
    } else {
        button.style.backgroundColor = 'red';
    }
    document.getElementById('next-btn').style.display = 'block';
    currentQuestionIndex++;
}

function endQuiz() {
    document.getElementById('question').innerText = `Quiz Completed! Your score is ${score}/${currentQuestions.length}`;
    document.getElementById('choices').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
