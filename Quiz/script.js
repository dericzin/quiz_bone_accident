const quizzes = {
    osso1: {
        name: "Coxal Equino", // Nome do osso
        image: "coxal_equino.jpg", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do osso número 1", answer: "Ílio" },
            { question: "2. Nome do osso número 2", answer: "Púbis" },
            { question: "3. Nome do osso número 3", answer: "Ísquio" },
            { question: "4. Nome do Acidente Ósseo número 4", answer: "Tuberosidade Coxal" },
            { question: "5. Nome do Acidente Ósseo número 5", answer: "Tuberosidade Sacral" },
            { question: "6. Nome do Acidente Ósseo número 6", answer: "Tuberosidade Isquiática" },
            { question: "7. Nome do Acidente Ósseo número 7", answer: "Asa do Ílio" },
            { question: "8. Nome do Acidente Ósseo número 8", answer: "Crista Ilíaca" },
            { question: "9. Nome do Acidente Ósseo número 9", answer: "Face Articular" },
            { question: "10. Nome do Acidente Ósseo número 10", answer: "Incisura Isquiática Maior" },
            { question: "11. Nome do Acidente Ósseo número 11", answer: "Incisura Isquiática Menor" },
            { question: "12. Nome do Acidente Ósseo número 12", answer: "Espinha Isquiática" },
            { question: "13. Nome do Acidente Ósseo número 13", answer: "Eminência Iliopúbica" },
            { question: "14. Nome do Acidente Ósseo número 14", answer: "Forame Obturador" },
            { question: "15. Nome do Acidente Ósseo número 15", answer: "Sínfise Púbica" },
            { question: "16. Nome do Acidente Ósseo número 16", answer: "Arco Isquiático" },
            { question: "17. Nome do Acidente Ósseo número 17", answer: "Acetábulo" },
            { question: "18. Nome do Acidente Ósseo número 18", answer: "Face Lunata" },
            { question: "19. Nome do Acidente Ósseo número 19", answer: "Fossa do Acetábulo" }

        ]
    },
    osso2: {
        name: "Osso 2", // Nome do osso
        image: "osso2.jpg", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 4?", answer: "resposta4" },
            { question: "2. Nome do acidente ósseo 5?", answer: "resposta5" },
            { question: "3. Nome do acidente ósseo 6?", answer: "resposta6" }
        ]
    },
    osso3: {
        name: "Osso 3", // Nome do osso
        image: "osso3.jpg", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 7?", answer: "resposta7" },
            { question: "2. Nome do acidente ósseo 8?", answer: "resposta8" },
            { question: "3. Nome do acidente ósseo 9?", answer: "resposta9" }
        ]
    }
};

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function startQuiz() {
    const selectedBone = document.getElementById("bone-select").value;
    if (selectedBone) {
        document.getElementById("selection-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";

        const quizData = quizzes[selectedBone];
        document.getElementById("osso-image").src = quizData.image;
        document.getElementById("quiz-title").innerText = quizData.name; // Atualiza o título

        const questionsDiv = document.getElementById("questions");
        questionsDiv.innerHTML = ''; // Limpa perguntas anteriores

        quizData.questions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.innerHTML = `
                <label for="answer${index + 1}">${q.question}</label>
                <input type="text" id="answer${index + 1}" placeholder="Digite sua resposta">
            `;
            questionsDiv.appendChild(questionDiv);
        });
    }
}

function checkAnswers() {
    const selectedBone = document.getElementById("bone-select").value;
    const correctAnswers = quizzes[selectedBone].questions.map(q => ({
        normalized: normalizeString(q.answer),
        original: q.answer
    }));

    const userAnswers = [];
    for (let i = 0; i < correctAnswers.length; i++) {
        userAnswers.push(normalizeString(document.getElementById(`answer${i + 1}`).value.trim()));
    }

    let score = 0;
    let resultMessage = "Resultados:<br>";

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index].normalized) {
            score++;
            resultMessage += `Pergunta ${index + 1}: Correta!<br>`;
        } else {
            resultMessage += `Pergunta ${index + 1}: Errada! Resposta correta: ${correctAnswers[index].original}<br>`;
        }
    });

    resultMessage += `<strong>Você acertou ${score} de ${correctAnswers.length} perguntas!</strong>`;
    document.getElementById("result").innerHTML = resultMessage;
}

function goBack() {
    // Limpa as respostas anteriores e retorna à tela de seleção
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("selection-container").style.display = "block";
    document.getElementById("result").innerHTML = ''; // Limpa resultados
    document.getElementById("bone-select").selectedIndex = 0; // Reseta a seleção
}
