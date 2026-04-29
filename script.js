// La base de datos: Cada objeto es un "PDF" o una entrada de un PDF
const database = [
    {
        name: "ALVAREZ RAVELO, AURORA",
        id: "*6739",
        position: "249",
        source: "Navarra - Secundaria Inglés",
        status: "Admitida",
        fullData: "English Teacher, Secondary Education, Position 249 in Merit Competition."
    },
    {
        name: "SAMUEL ALVAREZ PEREZ",
        id: "6482",
        position: "858",
        source: "mptmd.gob.es / Canarias",
        status: "Admitido",
        fullData: "Interino in Canarias, Administrative List TF121225."
    },
    {
        name: "MARIA DEL CARMEN RAVELO GONZALEZ",
        id: "**6169",
        position: "144",
        source: "mptmd.gob.es / Canarias",
        status: "Admitida",
        fullData: "Family member of Aurora, listed in Canarias Administrative de Las Palmas."
    },
    {
        name: "ABAD CASADO, MARIA DEL PILAR",
        id: "***3894**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Registro de admitidos en sede central."
    },
    {
        name: "ABAD DE LOS SANTOS, DANIEL",
        id: "***8320**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Registro oficial de la sede de Sevilla."
    },
    {
        name: "ABAD DIAZ, ALVARO",
        id: "***8420**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Incluido en listado de personal."
    },
    {
        name: "ABAD GARCIA, JAVIER",
        id: "***7748**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Listado de Barcelona."
    },
    {
        name: "ABAD GARCIA, NATALIA",
        id: "***4675**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Listado de Madrid."
    },
    {
        name: "ABAD JARQUE, RUTH",
        id: "***6880**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Listado de Valencia."
    },
    {
        name: "ABAD LAIGLESIA, FERNANDO",
        id: "***3530**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABAD MAÑAS, JOSE DAVID",
        id: "***2127**",
        position: "N/A",
        source: "MALAGA",
        status: "Admitido",
        fullData: "Sede Málaga."
    },
    {
        name: "ABAD VELILLA, LIDIA",
        id: "***1650**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABAD VERDIA, DAVID",
        id: "***7082**",
        position: "N/A",
        source: "MALAGA",
        status: "Admitido",
        fullData: "Sede Málaga."
    },
    {
        name: "ABALDE NOVAS, ALICIA",
        id: "***1185**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "ABALOS CALVILLO, CARLOTA",
        id: "***1047**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABANADES MARTINEZ, MELISA",
        id: "***0898**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ABASCAL SANTANDER, BEATRIZ",
        id: "***2367**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABDERRAHMAN MOHAMED, DINA",
        id: "***0750**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABELLA ABELLA, CARLOS",
        id: "***8423**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "ABELLAN GARCIA, ELENA",
        id: "***8844**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABELLAN MINAYA, FERMIN",
        id: "***8418**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ABELLON ARCE, BLANCA",
        id: "***9345**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "ABENOJAR AGUDO, SILVIA",
        id: "***3843**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABENOJAR AGUDO, VIRGINIA",
        id: "***7453**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABENZA MARTINEZ, ISABEL MARIA",
        id: "***5007**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ABENZA ORTA, LETICIA",
        id: "***8537**",
        position: "N/A",
        source: "MALAGA",
        status: "Admitido",
        fullData: "Sede Málaga."
    },
    {
        name: "ABENZA SIMON, MARIA DOLORES",
        id: "***5610**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ABIO OTAL, BEGOÑA",
        id: "***4874**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "ABRAHAM DE LAMO, ROCIO",
        id: "***6060**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ABREU PEREZ, RAQUEL ANDREA",
        id: "***2045**",
        position: "N/A",
        source: "LA CORUÑA",
        status: "Admitido",
        fullData: "Sede La Coruña."
    },
    {
        name: "ABRIL GONZALEZ, VANESA",
        id: "***1911**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ABRIL ORTEGA, KIARA DEL CARMEN",
        id: "***5129**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ACACIO SANCHEZ, PABLO",
        id: "***0815**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "ACEBES SERRANO, HENAR",
        id: "***3367**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ACEBRON NAVARRO, PILAR",
        id: "***4571**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ACERO PEGITO, MARIA REBECA",
        id: "***6121**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "ACEVEDO HERNANDEZ, ADRIAN",
        id: "***6787**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ACEVEDO MIRO, ENMA",
        id: "***4184**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ACEVEDO RODRIGUEZ, INMACULADA",
        id: "***4907**",
        position: "N/A",
        source: "VALLADOLID",
        status: "Admitido",
        fullData: "Sede Valladolid."
    },
    {
        name: "ACHA ORTEGA, LUIS JAVIER",
        id: "***6077**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Sede Sevilla."
    },
    {
        name: "ACHHAB EXPOSITO, NOREDIN",
        id: "***9479**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "ACON CHUECA, MARIA DEL CARMEN",
        id: "***5514**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ACOSTA ALVAREZ, RICARDO",
        id: "***4552**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "ACOSTA FONCUBIERTA, DANIEL",
        id: "***7522**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Sede Sevilla."
    },
    {
        name: "ACOSTA FONCUBIERTA, JAIME",
        id: "***7523**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Sede Sevilla."
    },
    {
        name: "ACOSTA HERNANDEZ, CARLOS MANUEL",
        id: "***8751**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "ACOSTA MATEO, ANGEL",
        id: "***9551**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ACOSTA NUÑEZ, MARLENY",
        id: "***5023**",
        position: "N/A",
        source: "VALLADOLID",
        status: "Admitido",
        fullData: "Sede Valladolid."
    },
    {
        name: "ACOSTA PADRON, ALEXANDER",
        id: "***7558**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "ACOSTA ROMERO, MARIA DOLORES",
        id: "***1631**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Sede Sevilla."
    },
    {
        name: "ACOSTA SUAREZ, NESTOR",
        id: "***7732**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "ACUÑA GARRIDO, SOFIA",
        id: "***0378**",
        position: "N/A",
        source: "LA CORUÑA",
        status: "Admitido",
        fullData: "Sede La Coruña."
    },
    {
        name: "ACUÑA QUINTANA, OSCAR",
        id: "***5913**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Sede Sevilla."
    },
    {
        name: "ACUÑA RUBIO, ADRIAN",
        id: "***4397**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ACUÑAS FERNANDEZ, ALICIA MARIA",
        id: "***2029**",
        position: "N/A",
        source: "MALAGA",
        status: "Admitido",
        fullData: "Sede Málaga."
    },
    {
        name: "ADELL FERRER, VICENT",
        id: "***8865**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "ADMIRABLE GIMENEZ, BEGOÑA",
        id: "***4505**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "ADRIAN BARBUZANO, SILVESTRE",
        id: "***5604**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "ADRIAN COZAR, MIRIAM",
        id: "***9248**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "AFASSI TAHER, ASMAE",
        id: "***2267**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "AFONSO CURBELO, EVA MARIA",
        id: "***8594**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "AFONSO FALCON, HARIDIAN DE JESUS",
        id: "***3376**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "AFONSO LUIS, MARCOS",
        id: "***3807**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "AGHLA HAFID, MUSTAPHA",
        id: "***1398**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "AGRADO AGUDELO, JENNY ALEJANDRA",
        id: "***9932**",
        position: "N/A",
        source: "VALLADOLID",
        status: "Admitido",
        fullData: "Sede Valladolid."
    },
    {
        name: "AGREGAN PEREZ, PABLO",
        id: "***9611**",
        position: "N/A",
        source: "LA CORUÑA",
        status: "Admitido",
        fullData: "Sede La Coruña."
    },
    {
        name: "AGUADO FERREIRA, ISABEL",
        id: "***9429**",
        position: "N/A",
        source: "VALLADOLID",
        status: "Admitido",
        fullData: "Sede Valladolid."
    },
    {
        name: "AGUADO LLORENTE, PATRICIA",
        id: "***5096**",
        position: "N/A",
        source: "VALLADOLID",
        status: "Admitido",
        fullData: "Sede Valladolid."
    },
    {
        name: "AGUADO LOUBET, SARA",
        id: "***7034**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "AGUADO RODRIGUEZ, ANGELICA",
        id: "***6842**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "AGUDO GOMEZ, JOSE IGNACIO",
        id: "***8526**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "AGUDO HERRERA, ANDREA",
        id: "***9024**",
        position: "N/A",
        source: "MALAGA",
        status: "Admitido",
        fullData: "Sede Málaga."
    },
    {
        name: "AGÜERO FERNANDEZ, SANDRA",
        id: "***1859**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    },
    {
        name: "AGUIAR DIAZ, MARIA DEL CARMEN",
        id: "***6375**",
        position: "N/A",
        source: "SANTA CRUZ DE TENERIFE",
        status: "Admitido",
        fullData: "Sede Tenerife."
    },
    {
        name: "AGUILA ESTRADA, MIGUEL ANGEL",
        id: "***7123**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "AGUILAR AVALO, VICTOR",
        id: "***7561**",
        position: "N/A",
        source: "SEVILLA",
        status: "Admitido",
        fullData: "Sede Sevilla."
    },
    {
        name: "AGUILAR CASTILLO, URSULA VANESSA",
        id: "***8528**",
        position: "N/A",
        source: "MADRID",
        status: "Admitido",
        fullData: "Sede Madrid."
    },
    {
        name: "AGUILAR CHAMORRO, JAIME",
        id: "***6999**",
        position: "N/A",
        source: "MALAGA",
        status: "Admitido",
        fullData: "Sede Málaga."
    },
    {
        name: "AGUILAR COBO, MARIA FRANCISCA",
        id: "***6876**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "AGUILAR COBO, VIRTUDES AMPARO",
        id: "***9700**",
        position: "N/A",
        source: "VALENCIA",
        status: "Admitido",
        fullData: "Sede Valencia."
    },
    {
        name: "AGUILAR FRANCO, IVAN",
        id: "***9865**",
        position: "N/A",
        source: "BARCELONA",
        status: "Admitido",
        fullData: "Sede Barcelona."
    }
];

function searchDB() {
    const input = document.getElementById('searchInput').value.toUpperCase().trim();
    const resultArea = document.getElementById('resultArea');
    const container = document.getElementById('resultsContainer');

    container.innerHTML = "";

    if (input === "") {
        alert("Please enter a name or surname!");
        return;
    }

    const matches = database.filter(u => u.name.toUpperCase().includes(input));

    if (matches.length > 0) {
        matches.forEach(user => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <h2>${user.name}</h2>
                <div class="data-grid">
                    <div class="data-item"><strong>ID/DNI:</strong> ${user.id}</div>
                    <div class="data-item"><strong>Position:</strong> ${user.position}</div>
                    <div class="data-item"><strong>Source PDF:</strong> ${user.source}</div>
                    <div class="data-item"><strong>Status:</strong> ${user.status}</div>
                </div>
                <div style="margin-top:10px; font-size:0.85rem; opacity:0.8; border-top:1px solid #333; padding-top:10px;">
                    <strong>Full Info:</strong> ${user.fullData}
                </div>
            `;
            container.appendChild(card);
        });
        resultArea.classList.remove('hidden');
    } else {
        container.innerHTML = `<div class="result-card"><h2>NOT FOUND</h2><p>No data found for "${input}" in any PDF.</p></div>`;
        resultArea.classList.remove('hidden');
    }
}

function doDork(type) {
    const query = document.getElementById('dorkInput').value.trim();
    if (query === "") { alert("Enter a name for the Dork!"); return; }
    let dorkQuery = type === 'pdf' ? `"${query}" filetype:pdf` : type === 'docx' ? `"${query}" filetype:docx` : `site:gob.es "${query}"`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`, '_blank');
}

// Escuchar la tecla Enter en el buscador
document.getElementById('searchInput').addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') searchDB(); 
});
