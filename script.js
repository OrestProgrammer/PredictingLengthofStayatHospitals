// const data = [[0, 1, 0, 0, 0, 0,
//     0, 1, 1, 0, 0, 0,
//     0, 0.49238577, 0.0374288, 0.66779757, 0.5652498, 0.01907557,
//     0.4643127,  0.5987951, 0.49541286, 0.63265306, 4]];
//
// const jsonData = JSON.stringify(data);

const btn = document.getElementById("form-button");

function getRadioValue (radioName) {
    const radios = document.getElementsByName(radioName);
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return Number(radios[i].value)
        }
    }
}

btn.onclick = function() {
    const e = document.getElementById("rcount");
    const rcount = Number(e.options[e.selectedIndex].value);
    const gender = getRadioValue("gender");
    const dialysisrenalendstage = getRadioValue("dialysisrenalendstage");
    const asthma = getRadioValue("asthma");
    const irondef = getRadioValue("irondef");
    const pneum = getRadioValue("pneum");
    const substancedependence = getRadioValue("substancedependence");
    const psychologicaldisordermajor = getRadioValue("psychologicaldisordermajor");
    const depress = getRadioValue("depress");
    const psychother = getRadioValue("psychother");
    const fibrosisandother = getRadioValue("fibrosisandother");
    const malnutrition = getRadioValue("malnutrition");
    const hemo = getRadioValue("hemo");
    const hematocrit = Number(document.getElementById("hematocrit").value);
    const neutrophils = Number(document.getElementById("neutrophils").value);
    const sodium = Number(document.getElementById("sodium").value);
    const glucose = Number(document.getElementById("glucose").value);
    const bloodureanitro = Number(document.getElementById("bloodureanitro").value);
    const creatinine = Number(document.getElementById("creatinine").value);
    const bmi = Number(document.getElementById("bmi").value);
    const pulse = Number(document.getElementById("pulse").value);
    const respiration = Number(document.getElementById("respiration").value);
    const secondarydiagnosisnonicd9 = Number(document.getElementById("secondarydiagnosisnonicd9").value);

    const data = [[
        rcount,
        gender,
        dialysisrenalendstage,
        asthma,
        irondef,
        pneum,
        substancedependence,
        psychologicaldisordermajor,
        depress,
        psychother,
        fibrosisandother,
        malnutrition,
        hemo,
        hematocrit,
        neutrophils,
        sodium,
        glucose,
        bloodureanitro,
        creatinine,
        bmi,
        pulse,
        respiration,
        secondarydiagnosisnonicd9
    ]];

    const jsonData = JSON.stringify(data);

    fetch('http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("result").textContent = "Predicted length of stay at hospital is: " + result + " day(s)";
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

// fetch('http://127.0.0.1:5000', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: jsonData
// })
//     .then(response => response.json())
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });