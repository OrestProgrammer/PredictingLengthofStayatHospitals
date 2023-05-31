function getRadioValue (radioName) {
    const radios = document.getElementsByName(radioName);
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return Number(radios[i].value)
        }
    }
}

document.getElementById("form-button").onclick = function() {
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

document.getElementById('fillValuesBtn').onclick = function() {
    document.getElementById('rcount').value = '3';
    document.querySelector('input[name="gender"][value="0"]').checked = true;
    document.querySelector('input[name="dialysisrenalendstage"][value="0"]').checked = true;
    document.querySelector('input[name="asthma"][value="0"]').checked = true;
    document.querySelector('input[name="irondef"][value="0"]').checked = true;
    document.querySelector('input[name="pneum"][value="0"]').checked = true;
    document.querySelector('input[name="substancedependence"][value="0"]').checked = true;
    document.querySelector('input[name="psychologicaldisordermajor"][value="0"]').checked = true;
    document.querySelector('input[name="depress"][value="0"]').checked = true;
    document.querySelector('input[name="psychother"][value="0"]').checked = true;
    document.querySelector('input[name="fibrosisandother"][value="0"]').checked = true;
    document.querySelector('input[name="malnutrition"][value="0"]').checked = true;
    document.querySelector('input[name="hemo"][value="0"]').checked = true;
    document.getElementById('hematocrit').value = '8.9';
    document.getElementById('neutrophils').value = '13.1';
    document.getElementById('sodium').value = '138.0687056';
    document.getElementById('glucose').value = '162.9936488';
    document.getElementById('bloodureanitro').value = '10';
    document.getElementById('creatinine').value = '1.015644651';
    document.getElementById('bmi').value = '32.05203186';
    document.getElementById('pulse').value = '66';
    document.getElementById('respiration').value = '5.5';
    document.getElementById('secondarydiagnosisnonicd9').value = '0';
};


document.getElementById('clearvalues').onclick = function() {
    document.getElementById('rcount').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.querySelector('input[name="dialysisrenalendstage"]:checked').checked = false;
    document.querySelector('input[name="asthma"]:checked').checked = false;
    document.querySelector('input[name="irondef"]:checked').checked = false;
    document.querySelector('input[name="pneum"]:checked').checked = false;
    document.querySelector('input[name="substancedependence"]:checked').checked = false;
    document.querySelector('input[name="psychologicaldisordermajor"]:checked').checked = false;
    document.querySelector('input[name="depress"]:checked').checked = false;
    document.querySelector('input[name="psychother"]:checked').checked = false;
    document.querySelector('input[name="fibrosisandother"]:checked').checked = false;
    document.querySelector('input[name="malnutrition"]:checked').checked = false;
    document.querySelector('input[name="hemo"]:checked').checked = false;
    document.getElementById('hematocrit').value = '';
    document.getElementById('neutrophils').value = '';
    document.getElementById('sodium').value = '';
    document.getElementById('glucose').value = '';
    document.getElementById('bloodureanitro').value = '';
    document.getElementById('creatinine').value = '';
    document.getElementById('bmi').value = '';
    document.getElementById('pulse').value = '';
    document.getElementById('respiration').value = '';
    document.getElementById('secondarydiagnosisnonicd9').value = '';
    document.getElementById("result").textContent = "";
};


// Sample data
//eid	vdate	rcount	gender	dialysisrenalendstage	asthma	irondef	pneum	substancedependence	psychologicaldisordermajor	depress	psychother	fibrosisandother	malnutrition	hemo	hematocrit	neutrophils	sodium	glucose	bloodureanitro	creatinine	bmi	pulse	respiration	secondarydiagnosisnonicd9	discharged	facid	lengthofstay
// 17	12/10/2012	3	F	0	0	0	0	0	0	0	0	0	0	0	8.9	13.1	138.0687056	162.9936488	10	1.015644651	32.05203186	66	5.5	0	12/16/2012	B	6