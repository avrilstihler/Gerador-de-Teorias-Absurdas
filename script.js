// Elementos DOM
const theoryTitle = document.getElementById('theoryTitle');
const theoryDescription = document.getElementById('theoryDescription');
const newTheoryBtn = document.getElementById('newTheoryBtn');

// Variáveis
let theories = [];
let currentTheoryIndex = 0;

// Carregar teorias
async function loadTheories() {
    try {
        const response = await fetch('theories.json');
        const data = await response.json();
        theories = data.theories;
        showRandomTheory();
    } catch (error) {
        console.error('Erro ao carregar teorias:', error);
        theoryTitle.textContent = "Magia em manutenção";
        theoryDescription.textContent = "Nossos ajudantes mágicos estão ocupados. Por favor, tente novamente mais tarde.";
    }
}

// Mostrar teoria aleatória
function showRandomTheory() {
    if (theories.length === 0) return;
    
    currentTheoryIndex = Math.floor(Math.random() * theories.length);
    const theory = theories[currentTheoryIndex];
    
    // Animação de transição
    theoryTitle.style.opacity = 0;
    theoryDescription.style.opacity = 0;
    
    setTimeout(() => {
        theoryTitle.textContent = theory.title;
        theoryDescription.textContent = theory.description;
        theoryTitle.style.opacity = 1;
        theoryDescription.style.opacity = 1;
    }, 300);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadTheories();
    
    // Event listeners
    newTheoryBtn.addEventListener('click', showRandomTheory);
    
    // Tecla espaço para nova teoria
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            showRandomTheory();
        }
    });
});