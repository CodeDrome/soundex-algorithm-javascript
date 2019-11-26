
window.onload = function()
{
    writeToConsole("Soundex Algorithm<br/><br/>", "console");

    let names1 = ["Johnson", "Adams", "Davis", "Simons", "Richards", "Taylor", "Carter", "Stevenson", "Taylor", "Smith", "McDonald", "Harris", "Sim", "Williams", "Baker", "Wells", "Fraser", "Jones", "Wilks", "Hunt", "Sanders", "Parsons", "Robson", "Harker"];

    let names2 = ["Jonson", "Addams", "Davies", "Simmons", "Richardson", "Tailor", "Chater", "Stephenson", "Naylor", "Smythe", "MacDonald", "Harrys", "Sym", "Wilson", "Barker", "Wills", "Frazer", "Johns", "Wilkinson", "Hunter", "Saunders", "Pearson", "Robertson", "Parker"];

    let namecount = names1.length;

    let s1;
    let s2;

    for(let i = 0; i < namecount; i++)
    {
        s1 = soundex(names1[i]);
        s2 = soundex(names2[i]);

        writeToConsole(`${names1[i].padEnd(16, " ").replace(/ /g, "&nbsp;")} ${s1} ${names2[i].padEnd(16, " ").replace(/ /g, "&nbsp;")} ${s2}<br/>`, "console");
    }
};
