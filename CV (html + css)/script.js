let save_button = document.getElementById("add-skill-button");

function validateSkillAddition(name, level) {
    if (name === "") {
        alert("Please enter correct skill name");
        return false;
    } else if (level < 1 || level > 10 || level == "") {
        alert("Please enter correct skill level");
        return false;
    }
    return true;
}

function addSkillToTable() {
    let skillname = document.getElementById("skill-name").value;
    let level = document.getElementById("skill-level").value;
    let remarks = document.getElementById("skill-remarks").value;
    let table = document.getElementById("skills-table");
    let num = table.rows.length; 

    if (validateSkillAddition(skillname, level)) {
        let row = table.insertRow();
        let cellNumber = row.insertCell();
        let cellName = row.insertCell();
        let cellLevel = row.insertCell();
        let cellRemarks = row.insertCell();
        cellNumber.innerHTML = num;
        cellName.innerHTML = skillname;
        cellLevel.innerHTML = level;
        cellRemarks.innerHTML = remarks;

        // document.getElementById("skill-name").value = "";
        // document.getElementById("skill-level").value = "";
        // document.getElementById("skill-remarks").value = "";
    }
}

save_button.addEventListener("click", addSkillToTable, false);