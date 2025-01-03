const quizzes = {
    osso1: {
        name: "Coxal Equino", // Nome do osso
        image: "coxal_equino.jpg", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do osso número 1", answer: ["Ílio"] },
            { question: "2. Nome do osso número 2", answer: ["Púbis"] },
            { question: "3. Nome do osso número 3", answer: ["Ísquio"] },
            { question: "4. Nome do Acidente Ósseo número 4", answer: ["Tuberosidade Coxal"] },
            { question: "5. Nome do Acidente Ósseo número 5", answer: ["Tuberosidade Sacral"] },
            { question: "6. Nome do Acidente Ósseo número 6", answer: ["Tuberosidade Isquiática"] },
            { question: "7. Nome do Acidente Ósseo número 7", answer: ["Asa do Ílio"] },
            { question: "8. Nome do Acidente Ósseo número 8", answer: ["Crista Ilíaca"] },
            { question: "9. Nome do Acidente Ósseo número 9", answer: ["Face Articular"] },
            { question: "10. Nome do Acidente Ósseo número 10", answer: ["Incisura Isquiática Maior"] },
            { question: "11. Nome do Acidente Ósseo número 11", answer: ["Incisura Isquiática Menor"] },
            { question: "12. Nome do Acidente Ósseo número 12", answer: ["Espinha Isquiática"] },
            { question: "13. Nome do Acidente Ósseo número 13", answer: ["Eminência Iliopúbica"] },
            { question: "14. Nome do Acidente Ósseo número 14", answer: ["Forame Obturador"] },
            { question: "15. Nome do Acidente Ósseo número 15", answer: ["Sínfise Pélvica"] },
            { question: "16. Nome do Acidente Ósseo número 16", answer: ["Arco Isquiático"] },
            { question: "17. Nome do Acidente Ósseo número 17", answer: ["Acetábulo"] },
            { question: "18. Nome do Acidente Ósseo número 18", answer: ["Face Lunata"] },
            { question: "19. Nome do Acidente Ósseo número 19", answer: ["Fossa do Acetábulo"] }
        ]
    },
    osso2: {
        name: "Crânio Equino - Lateral", // Nome do osso
        image: "cranio_equino_lateral.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 15?", answer: ["Corpo do Incisivo"] },
            { question: "2. Nome do acidente ósseo 16?", answer: ["Processo Nasal do Incisivo"] },
            { question: "3. Nome do acidente ósseo 17?", answer: ["Dentes Incisivos"] },
            { question: "4. Nome do acidente ósseo 21?", answer: ["Incisura Nasoincisiva"] },
            { question: "5. Nome do acidente ósseo 22?", answer: ["Crista Facial"] },
            { question: "6. Nome do acidente ósseo 24?", answer: ["Diastema"] },
            { question: "7. Nome do acidente ósseo 25?", answer: ["Dentes Caninos"] },
            { question: "8. Nome do acidente ósseo 26?", answer: ["Dentes Pré-Molares"] },
            { question: "9. Nome do acidente ósseo 27?", answer: ["Dentes Molares"] },
            { question: "10. Nome do acidente ósseo 28?", answer: ["Tuberosidade Maxilar"] },
            { question: "11. Nome do acidente ósseo 29?", answer: ["Forame Infraorbital"] },
            { question: "12. Nome do acidente ósseo 31?", answer: ["Processo Temporal do Zigomático"] },
            { question: "13. Nome do acidente ósseo 32?", answer: ["Processo Zigomático do Frontal"] },
            { question: "14. Nome do acidente ósseo 33?", answer: ["Processo Zigomático do Temporal"] },
            { question: "15. Nome do acidente ósseo 45?", answer: ["Meato Acústico Externo"] },
            { question: "16. Nome do acidente ósseo 53?", answer: ["Crista Nucal"] },
            { question: "17. Nome do acidente ósseo 54?", answer: ["Côndilo do Occipital"] },
            { question: "18. Nome do acidente ósseo 55?", answer: ["Processo Paracondilar do Occipital"] }
        ]
    },

    osso3: {
        name: "Crânio Equino - Dorsal", // Nome do osso
        image: "cranio_equino_dorsal.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 15?", answer: ["Corpo do Incisivo"] },
            { question: "2. Nome do acidente ósseo 16?", answer: ["Processo Nasal do Incisivo"] },
            { question: "3. Nome do acidente ósseo 22?", answer: ["Crista Facial"] },
            { question: "4. Nome do acidente ósseo 29?", answer: ["Forame Infraorbital"] },
            { question: "5. Nome do acidente ósseo 30?", answer: ["Forame Supraorbital"] },
            { question: "6. Nome do acidente ósseo 31?", answer: ["Processo Temporal do Zigomático"] },
            { question: "7. Nome do acidente ósseo 32?", answer: ["Processo Zigomático do Frontal"] },
            { question: "8. Nome do acidente ósseo 33?", answer: ["Processo Zigomático do Temporal"] },
            { question: "9. Nome do acidente ósseo 43?", answer: ["Linha Temporal"] },
            { question: "10. Nome do acidente ósseo 44?", answer: ["Crista Sagital Externa"] },
            { question: "11. Nome do acidente ósseo 46?", answer: ["Fossa Temporal"] },
            { question: "12. Nome do acidente ósseo 53?", answer: ["Crista Nucal"] }
        ]
    },
    osso4: {
        name: "Crânio Equino - Ventral", // Nome do osso
        image: "cranio_equino_ventral.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 15?", answer: ["Corpo do Incisivo"] },
            { question: "2. Nome do acidente ósseo 17?", answer: ["Dentes Incisivos"] },
            { question: "3. Nome do acidente ósseo 18?", answer: ["Processo Palatino do Incisivo"] },
            { question: "4. Nome do acidente ósseo 19?", answer: ["Fissura Palatina"] },
            { question: "5. Nome do acidente ósseo 20?", answer: ["Canal Interincisivo"] },
            { question: "6. Nome do acidente ósseo 22?", answer: ["Crista Facial"] },
            { question: "7. Nome do acidente ósseo 23?", answer: ["Processo Palatino da Maxila"] },
            { question: "8. Nome do acidente ósseo 24?", answer: ["Diastema"] },
            { question: "9. Nome do acidente ósseo 25?", answer: ["Dentes Caninos"] },
            { question: "10. Nome do acidente ósseo 26?", answer: ["Dentes Pré-Molares"] },
            { question: "11. Nome do acidente ósseo 27?", answer: ["Dentes Molares"] },
            { question: "12. Nome do acidente ósseo 28?", answer: ["Tuberosidade Maxilar"] },
            { question: "13. Nome do acidente ósseo 34?", answer: ["Lâmina Perpendicular do Palatino"] },
            { question: "14. Nome do acidente ósseo 35?", answer: ["Lâmina Horizontal do Palatino"] },
            { question: "15. Nome do acidente ósseo 36?", answer: ["Forame Palatino Maior"] },
            { question: "16. Nome do acidente ósseo 37?", answer: ["Asa do Vômer"] },
            { question: "17. Nome do acidente ósseo 38?", answer: ["Haste do Vômer"] },
            { question: "18. Nome do acidente ósseo 39?", answer: ["Coanas"] },
            { question: "19. Nome do acidente ósseo 40?", answer: ["Hâmulo do Pterigoide"] },
            { question: "20. Nome do acidente ósseo 41?", answer: ["Basoesfenoide"] },
            { question: "21. Nome do acidente ósseo 42?", answer: ["Asa do Esfenoide"] },
            { question: "22. Nome do acidente ósseo 47?", answer: ["Bula Timpânica"] },
            { question: "23. Nome do acidente ósseo 48?", answer: ["Processos Musculares do Temporal"] },
            { question: "24. Nome do acidente ósseo 49?", answer: ["Forame Lácero"] },
            { question: "25. Nome do acidente ósseo 50?", answer: ["Tubérculo Articular do Temporal"] },
            { question: "26. Nome do acidente ósseo 51?", answer: ["Fossa Mandibular do Temporal"] },
            { question: "27. Nome do acidente ósseo 52?", answer: ["Processo Retroarticular do Temporal"] },
            { question: "28. Nome do acidente ósseo 54?", answer: ["Côndilo do Occipital"] },
            { question: "29. Nome do acidente ósseo 55?", answer: ["Processo Paracondilar do Occipital"] },
            { question: "30. Nome do acidente ósseo 56?", answer: ["Forame Magno"] },
            { question: "31. Nome do acidente ósseo 57?", answer: ["Parte Basilar do Occipital"] },
            { question: "32. Nome do acidente ósseo 58?", answer: ["Canal do Nervo Hipoglosso"] }
        ]
    },

    osso5: {
        name: "Ossos do crânio Eq. Lat.", // Nome do osso
        image: "cranio_bovino_lateral.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do osso número 1?", answer: ["Osso Incisivo"] },
            { question: "2. Nome do osso número 2?", answer: ["Osso Nasal"] },
            { question: "3. Nome do osso número 3?", answer: ["Osso Maxilar"] },
            { question: "4. Nome do osso número 4?", answer: ["Osso Lacrimal"] },
            { question: "5. Nome do osso número 5?", answer: ["Osso Zigomático"] },
            { question: "6. Nome do osso número 6?", answer: ["Osso Frontal"] },
            { question: "7. Nome do osso número 7?", answer: ["Osso Parietal"] },
            { question: "8. Nome do osso número 8?", answer: ["Osso Interparietal"] },
            { question: "9. Nome do osso número 9?", answer: ["Osso Temporal"] },
            { question: "10. Nome do osso número 10?", answer: ["Osso Occipital"] },
            { question: "11. Nome do osso número 11?", answer: ["Mandíbula"] },
            { question: "12. Nome do osso número 12?", answer: ["Osso Palatino"] }
        ]
    },
    osso6: {
        name: "Mândibula Equino - Lateral", // Nome do osso
        image: "mandibula_equino_lateral.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 59?", answer: ["Corpo da Mandíbula"] },
            { question: "2. Nome do acidente ósseo 60?", answer: ["Forame Mentoniano"] },
            { question: "3. Nome do acidente ósseo 61?", answer: ["Incisura Vascular"] },
            { question: "4. Nome do acidente ósseo 62?", answer: ["Ângulo da Mandíbula"] },
            { question: "5. Nome do acidente ósseo 63?", answer: ["Ramo da Mandíbula"] },
            { question: "6. Nome do acidente ósseo 64?", answer: ["Forame Mandibular"] },
            { question: "7. Nome do acidente ósseo 65?", answer: ["Processo Condilar da Mandíbula"] },
            { question: "8. Nome do acidente ósseo 66?", answer: ["Processo Coronoide da Mandíbula"] }
        ]
    },
    osso7: {
        name: "Escápula Esquerda Eq.", // Nome do osso
        image: "escapula_esq_equino.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 01?", answer: ["Cartilagem da Escápula"] },
            { question: "2. Nome do acidente ósseo 02?", answer: ["Espinha da Escápula"] },
            { question: "3. Nome do acidente ósseo 03?", answer: ["Fossa Infraespinhal"] },
            { question: "4. Nome do acidente ósseo 04?", answer: ["Fossa Supraespinhal"] },
            { question: "5. Nome do acidente ósseo 05?", answer: ["Face Serrátil"] },
            { question: "6. Nome do acidente ósseo 06?", answer: ["Fossa Subescapular"] },
            { question: "7. Nome do acidente ósseo 07?", answer: ["Colo da Escápula"] },
            { question: "8. Nome do acidente ósseo 08?", answer: ["Forame Nutrício"] },
            { question: "9. Nome do acidente ósseo 09?", answer: ["Cavidade Glenoide"] },
            { question: "10. Nome do acidente ósseo 10?", answer: ["Tubérculo Supraglenoide"] },
            { question: "11. Nome do acidente ósseo 11?", answer: ["Processo Coracóide"] }
        ]
    },
    osso8: {
        name: "Úmero Esquerdo Eq.", // Nome do osso
        image: "umero_esq_equino.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 12?", answer: ["Cabeça do Úmero"] },
            { question: "2. Nome do acidente ósseo 13?", answer: ["Colo do Úmero"] },
            { question: "3. Nome do acidente ósseo 14?", answer: ["Tubérculo Maior"] },
            { question: "4. Nome do acidente ósseo 15?", answer: ["Tubérculo Menor"] },
            { question: "5. Nome do acidente ósseo 16?", answer: ["Tubérculo Intermédio"] },
            { question: "6. Nome do acidente ósseo 17?", answer: ["Sulco Intertubercular"] },
            { question: "7. Nome do acidente ósseo 18?", answer: ["Tuberosidade Deltoide"] },
            { question: "8. Nome do acidente ósseo 19?", answer: ["Tuberosidade Redonda Maior"] },
            { question: "9. Nome do acidente ósseo 20?", answer: ["Corpo do Úmero"] },
            { question: "10. Nome do acidente ósseo 21?", answer: ["Forame Nutrício"] },
            { question: "11. Nome do acidente ósseo 22?", answer: ["Fossa do Olécrano"] },
            { question: "12. Nome do acidente ósseo 23?", answer: ["Fossa Radial"] },
            { question: "13. Nome do acidente ósseo 24?", answer: ["Tróclea do Úmero"] },
            { question: "14. Nome do acidente ósseo 25?", answer: ["Côndilo Medial"] },
            { question: "15. Nome do acidente ósseo 26?", answer: ["Côndilo Lateral"] },
            { question: "16. Nome do acidente ósseo 27?", answer: ["Epicôndilo Medial do Úmero"] },
            { question: "17. Nome do acidente ósseo 28?", answer: ["Epicôndilo Lateral do Úmero"] }
        ]
    },

    osso9: {
        name: "Atlas (C1) Equino.",
        image: "atlas_c1_equino.png",
        questions: [
            { question: "1. Nome do acidente ósseo 1?", answer: ["Forame Vertebral"] },
            { question: "2. Nome do acidente ósseo 2?", answer: ["Arco Vertebral"] },
            { question: "3. Nome do acidente ósseo 3?", answer: ["Processo Transverso", "Asa do Atlas"] },
            { question: "4. Nome do acidente ósseo 4?", answer: ["Forame Vertebral Lateral"] },
            { question: "5. Nome do acidente ósseo 5?", answer: ["Forame Alar do Atlas"] },
            { question: "6. Nome do acidente ósseo 6?", answer: ["Forame Transverso"] },
            { question: "7. Nome do acidente ósseo 7?", answer: ["Face Articular Cranial do Atlas"] },
            { question: "8. Nome do acidente ósseo 8?", answer: ["Fossa do Atlas"] }
        ]
    },
    osso10: {
        name: "Axis (C2) Equino.",
        image: "axis_c2_equino.png",
        questions: [
            { question: "1. Nome do acidente ósseo 9?", answer: ["Dente do Áxis"] },
            { question: "2. Nome do acidente ósseo 10?", answer: ["Processo Articular Cranial"] },
            { question: "3. Nome do acidente ósseo 11?", answer: ["Processo Articular Caudal"] },
            { question: "4. Nome do acidente ósseo 12?", answer: ["Corpo Vertebral"] },
            { question: "5. Nome do acidente ósseo 13?", answer: ["Processo Espinhoso"] },
            { question: "6. Nome do acidente ósseo 14?", answer: ["Forame Vertebral"] },
            { question: "7. Nome do acidente ósseo 15?", answer: ["Processo Transverso"] },
            { question: "8. Nome do acidente ósseo 16?", answer: ["Forame Vertebral Lateral"] },
            { question: "9. Nome do acidente ósseo 17?", answer: ["Forame Transverso"] }
        ]
    },
    osso11: {
        name: "Ulna e Rádio", // Nome do osso
        image: "radio_ulna.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 29?", answer: ["Olécrano"] },
            { question: "2. Nome do acidente ósseo 30?", answer: ["Tuberosidade do Olécrano"] },
            { question: "3. Nome do acidente ósseo 31?", answer: ["Processo Ancôneo da Ulna"] },
            { question: "4. Nome do acidente ósseo 32?", answer: ["Incisura Troclear"] },
            { question: "5. Nome do acidente ósseo 33?", answer: ["Tuberosidade do Rádio"] },
            { question: "6. Nome do acidente ósseo 34?", answer: ["Cabeça do Rádio"] },
            { question: "7. Nome do acidente ósseo 35?", answer: ["Espaço Interósseo"] },
            { question: "8. Nome do acidente ósseo 36?", answer: ["Corpo da Ulna"] },
            { question: "9. Nome do acidente ósseo 37?", answer: ["Corpo do Rádio"] },
            { question: "10. Nome do acidente ósseo 38?", answer: ["Crista Transversa"] },
            { question: "11. Nome do acidente ósseo 39?", answer: ["Tróclea do Rádio"] },
            { question: "12. Nome do acidente ósseo 40?", answer: ["Processo Estilóideo Medial"] },
            { question: "13. Nome do acidente ósseo 41?", answer: ["Processo Estilóideo Lateral"] }
        ]
    },
    osso12: {
        name: "Vértebras Cervicais C3-C7.", // Nome do osso
        image: "vertebras_cervicais_c3_c7.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 18?", answer: ["Forame Vertebral"] },
            { question: "2. Nome do acidente ósseo 19?", answer: ["Processo Articular Cranial"] },
            { question: "3. Nome do acidente ósseo 20?", answer: ["Processo Articular Caudal"] },
            { question: "4. Nome do acidente ósseo 21?", answer: ["Corpo Vertebral"] },
            { question: "5. Nome do acidente ósseo 22?", answer: ["Processo Espinhoso"] },
            { question: "6. Nome do acidente ósseo 23?", answer: ["Processo Transverso"] },
            { question: "7. Nome do acidente ósseo 24?", answer: ["Forame (Canal) Transverso", "Forame Canal Transverso"] }
        ]
    },
    osso13: {
        name: "Vértebra Torácica.", // Nome do osso
        image: "vertebra_toracica.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 25?", answer: ["Forame Vertebral"] },
            { question: "2. Nome do acidente ósseo 26?", answer: ["Processo Articular Cranial"] },
            { question: "3. Nome do acidente ósseo 27?", answer: ["Processo Articular Caudal"] },
            { question: "4. Nome do acidente ósseo 28?", answer: ["Corpo Vertebral"] },
            { question: "5. Nome do acidente ósseo 29?", answer: ["Processo Espinhoso"] },
            { question: "6. Nome do acidente ósseo 30?", answer: ["Processo Transverso"] },
            { question: "7. Nome do acidente ósseo 31?", answer: ["Fóvea Costal do Processo Transverso"] },
            { question: "8. Nome do acidente ósseo 32?", answer: ["Fóvea Costal Caudal"] },
            { question: "9. Nome do acidente ósseo 33?", answer: ["Fóvea Costal Cranial"] },
            { question: "10. Nome do acidente ósseo 34?", answer: ["Processo Mamilar"] }
        ]
    },
    osso14: {
        name: "Vértebra Lombar", // Nome do osso
        image: "vertebra_lombar.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 35?", answer: ["Forame Vertebral"] },
            { question: "2. Nome do acidente ósseo 36?", answer: ["Processo Articular Cranial"] },
            { question: "3. Nome do acidente ósseo 37?", answer: ["Processo Articular Caudal"] },
            { question: "4. Nome do acidente ósseo 38?", answer: ["Corpo Vertebral"] },
            { question: "5. Nome do acidente ósseo 39?", answer: ["Processo Espinhoso"] },
            { question: "6. Nome do acidente ósseo 40?", answer: ["Processo Transverso"] },
            { question: "7. Nome do acidente ósseo 41?", answer: ["Processo Mamilar"] },
            { question: "8. Nome do acidente ósseo 42?", answer: ["Face Articular para Asa do Sacro (L6)", "Face Articular para Asa do Sacro L6"] }
        ]
    },
    osso15: {
        name: "Fêmur", // Nome do osso
        image: "femur.png", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 20?", answer: ["Cabeça do Fêmur"] },
            { question: "2. Nome do acidente ósseo 21?", answer: ["Fóvea do Fêmur"] },
            { question: "3. Nome do acidente ósseo 22?", answer: ["Trocânter Maior"] },
            { question: "4. Nome do acidente ósseo 23?", answer: ["Trocânter Menor"] },
            { question: "5. Nome do acidente ósseo 24?", answer: ["Terceiro Trocânter"] },
            { question: "6. Nome do acidente ósseo 25?", answer: ["Fossa Supracondilar"] },
            { question: "7. Nome do acidente ósseo 26?", answer: ["Côndilo Lateral do Fêmur"] },
            { question: "8. Nome do acidente ósseo 27?", answer: ["Côndilo Medial do Fêmur"] },
            { question: "9. Nome do acidente ósseo 28?", answer: ["Fossa Intercondilar"] },
            { question: "10. Nome do acidente ósseo 29?", answer: ["Epicôndilo Lateral do Fêmur"] },
            { question: "11. Nome do acidente ósseo 30?", answer: ["Epicôndilo Medial do Fêmur"] },
            { question: "12. Nome do acidente ósseo 31?", answer: ["Tróclea do Fêmur"] }
        ]
    },
    osso16: {
        name: "Tíbia e Fíbula", // Nome do osso
        image: "tibia_fibula.jpeg", // Substitua com a imagem correta
        questions: [
            { question: "1. Nome do acidente ósseo 32?", answer: ["Côndilo Lateral da Tíbia"] },
            { question: "2. Nome do acidente ósseo 33?", answer: ["Côndilo Medial da Tíbia"] },
            { question: "3. Nome do acidente ósseo 34?", answer: ["Eminência Intercondilar"] },
            { question: "4. Nome do acidente ósseo 35?", answer: ["Tuberosidade da Tíbia"] },
            { question: "5. Nome do acidente ósseo 36?", answer: ["Sulco da Tuberosidade da Tíbia"] },
            { question: "6. Nome do acidente ósseo 37?", answer: ["Corpo da Fíbula"] },
            { question: "7. Nome do acidente ósseo 38?", answer: ["Corpo da Tíbia"] },
            { question: "8. Nome do acidente ósseo 39?", answer: ["Espaço Interósseo"] },
            { question: "9. Nome do acidente ósseo 40?", answer: ["Maléolo Lateral"] },
            { question: "10. Nome do acidente ósseo 41?", answer: ["Maléolo Medial"] },
            { question: "11. Nome do acidente ósseo 42?", answer: ["Cóclea da Tíbia"] },
            { question: "11. Nome do acidente ósseo 43?", answer: ["Linha Muscular"] }
        ]
    },
    osso17: {
        name: "Classificação Anatômica",
        image: "classificacao_anatomica.jpeg",
        questions: [
            { question: "1. Qual a classificação anatômica do alfinete vermelho?", answer: ["Lábio articular"] },
            { question: "2. Qual a classificação anatômica do alfinete branco?", answer: ["Cartilagem Articular"] },
            { question: "3. Qual a classificação anatômica do alfinete verde?", answer: ["Cápsula articular"] },
            { question: "4. Qual a classificação anatômica da pinça?", answer: ["Cavidade articular"] }
        ]
    },
    osso18: {
        name: "Classificação Anatômica 2",
        image: "classificacao_anatomica2.jpeg",
        questions: [
            { question: "1. Qual a classificação anatômica do alfinete Branco?", answer: ["Ligamento Articular"] },
            { question: "2. Qual a classificação anatômica do alfinete Preto?", answer: ["Cartilagem Articular"] },
        ]
    },
    osso19: {
        name: "Sacro",
        image: "sacro.jpeg",
        questions: [
            { question: "1. Nome do acidente ósseo 43?", answer: ["Asa do Sacro"] },
            { question: "2. Nome do acidente ósseo 44?", answer: ["Face articular para o processo transverso da ultima vértebra lombar"] },
            { question: "3. Nome do acidente ósseo 45?", answer: ["Face articular do sacro"] },
            { question: "4. Nome do acidente ósseo 46?", answer: ["Face articular do corpo do sacro"] },
            { question: "5. Nome do acidente ósseo 47?", answer: ["Promontório"] },
            { question: "6. Nome do acidente ósseo 48?", answer: ["Forames sacrais dorsais"] },
            { question: "7. Nome do acidente ósseo 49?", answer: ["Forames sacrais ventrais"] },
            { question: "8. Nome do acidente ósseo 51?", answer: ["Crista sacral lateral"] },
            { question: "9. Nome do acidente ósseo 52?", answer: ["Crista sacral mediana", "Processo transverso"] }
        ]
    },
    osso20: {
        name: "Costela e Esterno",
        image: "costela_esterno.jpeg",
        questions: [
            { question: "1. Nome do acidente ósseo 53?", answer: ["Cabeça da Costela"] },
            { question: "2. Nome do acidente ósseo 54?", answer: ["Colo da Costela"] },
            { question: "3. Nome do acidente ósseo 55?", answer: ["Tubérculo da Costela"] },
            { question: "4. Nome do acidente ósseo 56?", answer: ["Corpo da Costela"] },
            { question: "5. Nome do acidente ósseo 57?", answer: ["Cartilagem Costal"] },
            { question: "6. Nome do acidente ósseo 58?", answer: ["Junção Costocondral"] },
            { question: "7. Nome do acidente ósseo 59?", answer: ["Corpo do Esterno"] },
            { question: "8. Nome do acidente ósseo 60?", answer: ["Manúbrio do Esterno"] },
            { question: "9. Nome do acidente ósseo 61?", answer: ["Estérnebras"] },
            { question: "10. Nome do acidente ósseo 62?", answer: ["Processo Xifoide"] },
            { question: "11. Nome do acidente ósseo 63?", answer: ["Cartilagem Xifoide"] },
            { question: "12. Nome do acidente ósseo 64?", answer: ["Cartilagem Costal"] },
            { question: "13. Nome do acidente ósseo 65?", answer: ["Junção Costocondral"] },
            { question: "14. Nome do acidente ósseo 66?", answer: ["Junção Condroesternal"] },
            { question: "15. Nome do acidente ósseo 67?", answer: ["Junção Condrocondral"] }
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
        document.getElementById("quiz-title").innerText = quizData.name;

        const questionsDiv = document.getElementById("questions");
        questionsDiv.innerHTML = ''; // Limpa perguntas anteriores

        quizData.questions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.innerHTML = `
                <label for="answer${index + 1}">${q.question}</label>
                <input type="text" autocomplete="off" id="answer${index + 1}" placeholder="Digite sua resposta">
            `;
            questionsDiv.appendChild(questionDiv);
        });
    }
}

function checkAnswers() {
    const selectedBone = document.getElementById("bone-select").value;
    const correctAnswers = quizzes[selectedBone].questions.map(q =>
        Array.isArray(q.answer) ? q.answer.map(answer => normalizeString(answer)) : [normalizeString(q.answer)]
    );

    const userAnswers = [];
    for (let i = 0; i < correctAnswers.length; i++) {
        userAnswers.push(normalizeString(document.getElementById(`answer${i + 1}`).value.trim()));
    }

    let score = 0;
    let resultMessage = `<h2>Resultados:</h2><ul class="results-list">`;

    userAnswers.forEach((answer, index) => {
        if (correctAnswers[index].includes(answer)) {
            score++;
            resultMessage += `<li>Pergunta ${index + 1}: Correta!</li>`;
        } else {
            resultMessage += `<li>Pergunta ${index + 1}: Errada! Resposta correta: ${quizzes[selectedBone].questions[index].answer.join(" ou ")}</li>`;
        }
    });

    resultMessage += `</ul><strong>Você acertou ${score} de ${correctAnswers.length} perguntas!</strong>`;
    document.getElementById("result").innerHTML = resultMessage;

    // Verifica se todas as respostas estão corretas
    if (score === correctAnswers.length) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Ocultar o botão "Enviar Respostas" após mostrar o resultado
    document.getElementById("submit-button").style.display = "none";
}

function retryQuiz() {
    document.getElementById("result").innerHTML = '';
    document.getElementById("submit-button").style.display = "inline-block";

    const inputs = document.querySelectorAll("#questions input[type='text']");
    inputs.forEach(input => input.value = "");

    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("selection-container").style.display = "block";
    document.getElementById("result").innerHTML = ''; // Limpa resultados
    document.getElementById("bone-select").selectedIndex = 0;

    document.getElementById("submit-button").style.display = "inline-block";
}
