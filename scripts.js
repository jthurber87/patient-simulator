let names = ["Jay", "Mollie", "Aja", "Calvin", "Elizabeth", "Andy", "Maggie", "Ivan", "Maja", "Clint"]

class Patient {
    constructor(
        bp = {
            systolic : Math.floor(Math.random() * (130 - 100) + 100),
            diastolic : Math.floor(Math.random() * (90 - 60) + 60)
        }, 
        pulse = Math.floor(Math.random() * (100 - 60) + 60), 
        respirations = Math.floor(Math.random() * (17 - 12) + 12), 
        capilaryRefillRate = Math.floor(Math.random() * (3 - 1) + 1),
        diagnosis = null
    ) {
    this.name = names[Math.floor(Math.random() * names.length)];
    this.age = Math.floor(Math.random() * (66 - 18) + 18);
    this.bp = bp;
    this.pulse = pulse;
    this.respirations = respirations;
    this.capilaryRefillRate = capilaryRefillRate;
    this.pain = 0
    this.diagnosis = diagnosis
    }
}

// let patient = new Patient


// newPatient({systolic = 120, diastolic = 80}, 80, 16)

while (true) {
    let newPatient = new Patient({systolic: 70, diastolic: 40}, 120, 10, 1, "hypovolemic")

    let symptom = prompt("What would you like to check?")
    if (symptom === "bp") {
        alert(newPatient.bp.systolic + "/" + newPatient.bp.diastolic)
    } else {
        alert(newPatient[symptom])
    }
}