const database = [
    {
        name: "ALVAREZ RAVELO, AURORA",
        id: "*6739",
        position: "249",
        source: "Navarra - Secundaria Inglés",
        status: "Admitida"
    },
    {
        name: "SAMUEL ALVAREZ PEREZ",
        id: "6482",
        position: "858",
        source: "mptmd.gob.es / Canarias",
        status: "Admitido"
    },
    {
        name: "MARIA DEL CARMEN RAVELO GONZALEZ",
        id: "**6169",
        position: "144",
        source: "mptmd.gob.es / Canarias",
        status: "Admitida"
    },
    {
        name: "AUXILIAR DE ENFERMERIA (LISTADO)",
        id: "Various",
        position: "Multiple",
        source: "RESOLUCION ADMITIDOS_1115372144.pdf",
        status: "Provisional"
    },
    {
        name: "OPERADOR INFORMÁTICO (BURGOS)",
        id: "BOPBUR 10-06-2024",
        position: "TBD",
        source: "aytoburgos.es / Burgos",
        status: "Provisional"
    },
    {
        name: "DIRECTOR SERVICIO (VALLADOLID)",
        id: "BOPVA Lista Definitiva",
        position: "1",
        source: "valladolid.gob.es",
        status: "Definitiva"
    },
    {
        name: "AGENTES HACIENDA PÚBLICA",
        id: "OEP_2020",
        position: "Multiple",
        source: "agenciatributaria.gob.es",
        status: "Definitivo"
    },
    {
        name: "APRENDICES SENA (COLOMBIA)",
        id: "Inscripción Jun 10-12",
        position: "Global",
        source: "sena.edu.co",
        status: "Inscrito"
    },
    {
        name: "ETGOA ESTABILIZACIÓN",
        id: "RD408-2022",
        position: "Generic",
        source: "digital.gob.es",
        status: "Admitido"
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
            `;
            container.appendChild(card);
        });
        resultArea.classList.remove('hidden');
    } else {
        container.innerHTML = `
            <div class="result-card">
                <h2>NOT FOUND IN DB</h2>
                <p>No data found for "${input}". Try the Google Dork section below!</p>
            </div>
        `;
        resultArea.classList.remove('hidden');
    }
}

// FUNCIÓN PARA GOOGLE DORKING
function doDork(type) {
    const query = document.getElementById('dorkInput').value.trim();
    if (query === "") {
        alert("Please enter a name or website for the Dork search!");
        return;
    }

    let dorkQuery = "";

    if (type === 'pdf') {
        // Busca el nombre y que el archivo sea específicamente PDF
        dorkQuery = `"${query}" filetype:pdf`;
    } else if (type === 'docx') {
        // Busca el nombre y que el archivo sea Word
        dorkQuery = `"${query}" filetype:docx`;
    } else if (type === 'site') {
        // Busca el nombre dentro de un sitio web específico (si el usuario puso un sitio o un nombre)
        dorkQuery = `site:gob.es "${query}"`;
    }

    // Abrir Google en una nueva pestaña con la búsqueda de dork construida
    window.open(`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`, '_blank');
}

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') searchDB();
});
