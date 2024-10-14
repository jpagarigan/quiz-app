const math1_subject = {
    1: {
        "question": "What is the derivative of f(x) = x^2?",
        "choices": [
            "2x",
            "x^2",
            "x",
            "2x^2"
        ],
        "correctAnswer": "2x"
    },
    2: {
        "question": "What is the derivative of f(x) = sin(x)?",
        "choices": [
            "cos(x)",
            "-sin(x)",
            "sin(x)",
            "1"
        ],
        "correctAnswer": "cos(x)"
    },
    3: {
        "question": "What is the derivative of f(x) = e^x?",
        "choices": [
            "e^x",
            "1",
            "x^2",
            "ln(x)"
        ],
        "correctAnswer": "e^x"
    },
    4: {
        "question": "What is the derivative of f(x) = ln(x)?",
        "choices": [
            "1/x",
            "ln(x)",
            "x",
            "e^x"
        ],
        "correctAnswer": "1/x"
    },
    5: {
        "question": "What is the derivative of f(x) = tan(x)?",
        "choices": [
            "sec^2(x)",
            "tan^2(x)",
            "1/cos^2(x)",
            "cos(x)"
        ],
        "correctAnswer": "sec^2(x)"
    },
    6: {
        "question": "What is the derivative of f(x) = x^3 - 3x?",
        "choices": [
            "3x^2 - 3",
            "3x^3 - 3",
            "x^2 - 3",
            "3x^2 + 3"
        ],
        "correctAnswer": "3x^2 - 3"
    },
    7: {
        "question": "What is the derivative of f(x) = √x?",
        "choices": [
            "1/(2√x)",
            "√x",
            "2√x",
            "x/2"
        ],
        "correctAnswer": "1/(2√x)"
    },
    8: {
        "question": "What is the derivative of f(x) = 3x^4?",
        "choices": [
            "12x^3",
            "4x^3",
            "3x^3",
            "x^4"
        ],
        "correctAnswer": "12x^3"
    },
    9: {
        "question": "What is the derivative of f(x) = cos(x)?",
        "choices": [
            "-sin(x)",
            "sin(x)",
            "-cos(x)",
            "1"
        ],
        "correctAnswer": "-sin(x)"
    },
    10: {
        "question": "What is the derivative of f(x) = 5x^2 + 2x - 7?",
        "choices": [
            "10x + 2",
            "5x + 2",
            "2x + 5",
            "5x^2 - 2"
        ],
        "correctAnswer": "10x + 2"
    }
};


const math2_subject = {
    1: {
        "question": "What is the integral of f(x) = x with respect to x?",
        "choices": [
            "(1/2)x^2 + C",
            "x^2 + C",
            "2x + C",
            "(1/3)x^3 + C"
        ],
        "correctAnswer": "(1/2)x^2 + C"
    },
    2: {
        "question": "What is the integral of f(x) = 1/x?",
        "choices": [
            "ln|x| + C",
            "x + C",
            "1/x + C",
            "e^x + C"
        ],
        "correctAnswer": "ln|x| + C"
    },
    3: {
        "question": "What is the integral of f(x) = e^x?",
        "choices": [
            "e^x + C",
            "x^2 + C",
            "ln|x| + C",
            "x + C"
        ],
        "correctAnswer": "e^x + C"
    },
    4: {
        "question": "What is the integral of f(x) = cos(x)?",
        "choices": [
            "sin(x) + C",
            "-sin(x) + C",
            "cos(x) + C",
            "-cos(x) + C"
        ],
        "correctAnswer": "sin(x) + C"
    },
    5: {
        "question": "What is the integral of f(x) = sin(x)?",
        "choices": [
            "-cos(x) + C",
            "cos(x) + C",
            "sin(x) + C",
            "-sin(x) + C"
        ],
        "correctAnswer": "-cos(x) + C"
    },
    6: {
        "question": "What is the integral of f(x) = 3x^2?",
        "choices": [
            "x^3 + C",
            "x^3 + 3C",
            "x^3 + 1 + C",
            "x^2 + C"
        ],
        "correctAnswer": "x^3 + C"
    },
    7: {
        "question": "What is the integral of f(x) = 1?",
        "choices": [
            "x + C",
            "1 + C",
            "0 + C",
            "x^2 + C"
        ],
        "correctAnswer": "x + C"
    },
    8: {
        "question": "What is the integral of f(x) = x^3?",
        "choices": [
            "(1/4)x^4 + C",
            "(1/3)x^3 + C",
            "(1/2)x^2 + C",
            "x^4 + C"
        ],
        "correctAnswer": "(1/4)x^4 + C"
    },
    9: {
        "question": "What is the integral of f(x) = 2x?",
        "choices": [
            "x^2 + C",
            "2x^2 + C",
            "x^2 + 2C",
            "2 + C"
        ],
        "correctAnswer": "x^2 + C"
    },
    10: {
        "question": "What is the integral of f(x) = 5?",
        "choices": [
            "5x + C",
            "5 + C",
            "x^5 + C",
            "x + 5C"
        ],
        "correctAnswer": "5x + C"
    }
};

const math3_subject = {
    1: {
        question: "What is the area of a triangle with a base of 10 units and a height of 5 units?",
        choices: ["25 square units", "50 square units", "30 square units", "15 square units"],
        correctAnswer: "25 square units"
    },
    2: {
        question: "What is the circumference of a circle with a radius of 7 units?",
        choices: ["14π units", "21π units", "7π units", "49 units"],
        correctAnswer: "14π units"
    },
    3: {
        question: "What is the volume of a cube with side length 3 units?",
        choices: ["9 cubic units", "27 cubic units", "6 cubic units", "3 cubic units"],
        correctAnswer: "27 cubic units"
    },
    4: {
        question: "What is the Pythagorean theorem?",
        choices: [
            "a^2 + b^2 = c^2",
            "a + b = c",
            "a^3 + b^3 = c^3",
            "a^2 - b^2 = c"
        ],
        correctAnswer: "a^2 + b^2 = c^2"
    },
    5: {
        question: "What is the area of a circle with a radius of 4 units?",
        choices: ["16π square units", "8π square units", "12π square units", "4π square units"],
        correctAnswer: "16π square units"
    },
    6: {
        question: "What is the sum of the interior angles of a hexagon?",
        choices: ["360 degrees", "720 degrees", "540 degrees", "180 degrees"],
        correctAnswer: "720 degrees"
    },
    7: {
        question: "What is the length of the diagonal of a rectangle with sides of 3 units and 4 units?",
        choices: ["5 units", "7 units", "6 units", "8 units"],
        correctAnswer: "5 units"
    },
    8: {
        question: "What is the surface area of a sphere with a radius of 5 units?",
        choices: ["100π square units", "50π square units", "25π square units", "75π square units"],
        correctAnswer: "100π square units"
    },
    9: {
        question: "What is the formula for the volume of a cylinder?",
        choices: [
            "πr^2h",
            "2πr^2h",
            "πr^2",
            "4/3πr^3"
        ],
        correctAnswer: "πr^2h"
    },
    10: {
        question: "What is the area of a trapezoid with bases of 5 units and 7 units, and a height of 4 units?",
        choices: ["24 square units", "20 square units", "26 square units", "18 square units"],
        correctAnswer: "24 square units"
    }
};


const math4_subject = {
    1: {
        question: "What is the Z-transform of a unit step function?",
        choices: ["1/(1 - z^(-1))", "z/(z - 1)", "z/(z + 1)", "1/(1 + z^(-1))"],
        correctAnswer: "1/(1 - z^(-1))"
    },
    2: {
        question: "What is the Z-transform of the discrete signal x[n] = a^n u[n]?",
        choices: ["1/(1 - az^(-1))", "a/(1 - az^(-1))", "1/(1 + az^(-1))", "z/(z - a)"],
        correctAnswer: "1/(1 - az^(-1))"
    },
    3: {
        question: "If X(z) = 1/(1 - 0.5z^(-1)), what is the impulse response?",
        choices: ["0.5^n u[n]", "0.5^n", "u[n]", "1"],
        correctAnswer: "0.5^n u[n]"
    },
    4: {
        question: "What is the Z-transform of x[n] = n u[n]?",
        choices: ["z/(z - 1)^2", "1/(1 - z^(-1))", "z^2/(z - 1)^2", "1/(1 + z^(-1))"],
        correctAnswer: "z/(z - 1)^2"
    },
    5: {
        question: "What is the region of convergence (ROC) for the Z-transform of x[n] = a^n u[n]?",
        choices: ["|z| > |a|", "|z| < |a|", "|z| = |a|", "None of the above"],
        correctAnswer: "|z| > |a|"
    },
    6: {
        question: "What is the Z-transform of a discrete-time exponential sequence x[n] = e^(jω_0 n) u[n]?",
        choices: ["z/(z - e^(jω_0))", "1/(1 - e^(jω_0)z^(-1))", "1/(1 + e^(jω_0)z^(-1))", "e^(jω_0)/(1 - z^(-1))"],
        correctAnswer: "1/(1 - e^(jω_0)z^(-1))"
    },
    7: {
        question: "What is the inverse Z-transform of X(z) = 1/(1 - 0.9z^(-1))?",
        choices: ["0.9^n u[n]", "u[n]", "1", "0.9^n"],
        correctAnswer: "0.9^n u[n]"
    },
    8: {
        question: "What is the effect of time-shifting on the Z-transform?",
        choices: [
            "X(z)z^(-k)",
            "X(z)z^(k)",
            "X(z) + k",
            "None of the above"
        ],
        correctAnswer: "X(z)z^(-k)"
    },
    9: {
        question: "What is the convolution property of the Z-transform?",
        choices: [
            "X(z)Y(z)",
            "X(z) + Y(z)",
            "X(z) * Y(z)",
            "X(z) - Y(z)"
        ],
        correctAnswer: "X(z)Y(z)"
    },
    10: {
        question: "If X(z) is a rational function, what can we say about its poles?",
        choices: [
            "They are always real",
            "They can be complex",
            "They are always positive",
            "They must be integer values"
        ],
        correctAnswer: "They can be complex"
    }
};

