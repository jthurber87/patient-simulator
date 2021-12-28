let names = ["Jay", "Mollie", "Aja", "Calvin", "Elizabeth", "Andy", "Maggie", "Ivan", "Maja", "Clint"]

class Patient {
    constructor(bp, pulse, respirations, capilaryRefillRate) {
    this.name = names[Math.floor(Math.random() * names.length)]
    this.age = Math.floor(Math.random() * (66 - 18) + 18)
    this.bp = {
        systolic : Math.floor(Math.random() * (130 - 100) + 100),
        diastolic : Math.floor(Math.random() * (90 - 60) + 60)
    }
    this.pulse = Math.floor(Math.random() * (100 - 60) + 60)
    this.respirations = Math.floor(Math.random() * (17 - 12) + 12)
    this.capilaryRefillRate = Math.floor(Math.random() * (3 - 1) + 1)
    this.pain = 0
    this.diagnosis = null
    }
}

let patient = new Patient

const newPatient = (bp, pulse, respirations, diagnosis) => {
    patient.bp = bp;
    patient.pulse = pulse;
    patient.respirations = respirations
    patient.diagnosis = diagnosis
    return patient
}

// newPatient({systolic = 120, diastolic = 80}, 80, 16)

while (true) {
    newPatient({systolic: 70, diastolic: 40}, 120, 10, "hypovolemic")
    let symptom = prompt("What would you like to check?")
    if (symptom === "bp") {
        alert(patient.bp.systolic + "/" + patient.bp.diastolic)
    } else {
        alert(patient[symptom])
    }
}