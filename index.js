console.log('funguju!');

/*
Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. 
Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve 
všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u 
posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu 
a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu,
 abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
*/


let skillLevelOfHtml = prompt("Jaká je vaše schopnost v HTML? Zadejte Vaši úroveň hodnotou 0 - 100.")
let skillLevelOfCss = prompt("Jaká je vaše schopnost v Css? Zadejte Vaši úroveň hodnotou 0 - 100.")
let skillLevelOfJavaScript = prompt("Jaká je vaše schopnost v JavaScriptu? Zadejte Vaši úroveň hodnotou 0 - 100.")


const updateSkill = (idElement, skillLevel) => {

    
    let container = document.querySelector(idElement)
    
    container.querySelector(".skill__value").innerHTML = skillLevel + "/100";
    container.querySelector(".skill__progress").style.width = skillLevel + "%";
    }


updateSkill("#skill1", skillLevelOfHtml)
updateSkill("#skill2", skillLevelOfCss)
updateSkill("#skill3", skillLevelOfJavaScript)

