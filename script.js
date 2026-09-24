// =========================
// CONFIGURAÇÃO DO CONVITE
// =========================
//
// EDITE SOMENTE OS TEXTOS ABAIXO
// PARA PERSONALIZAR O CONVITE.
//
// Não é necessário alterar o restante
// deste arquivo para trocar as frases.
//

const config = {

    pergunta:
        "Quer sair comigo gatinha?",

    tituloSucesso:
        "ESCOLHA CERTA, parabens! ❤️",

    mensagemSucesso:
        "Eu sabia que você nao ia resistir!"
};


// =========================
// CONFIGURAÇÃO DOS MEMES
// =========================
//
// O site suporta até 50 memes
// chamados meme1 até meme50.
//
// Os arquivos podem ser .jpg, .png ou .gif.
//

const totalMemes = 50;


// =========================
// ELEMENTOS DA PÁGINA
// =========================

const noButton =
    document.getElementById("noButton");

const yesButton =
    document.getElementById("yesButton");

const question =
    document.getElementById("question");

const successTitle =
    document.getElementById("successTitle");

const successMessage =
    document.getElementById("successMessage");

const startScreen =
    document.getElementById("startScreen");

const successScreen =
    document.getElementById("successScreen");

const backgroundMemes =
    document.getElementById("backgroundMemes");

const card =
    document.querySelector(".card");


let attempts = 0;


// =========================
// CONTROLE DO MOVIMENTO
// =========================
//
// Impede que o mesmo movimento
// gere várias tentativas seguidas
// enquanto o botão ainda está fugindo.
//

let noButtonMoving = false;


// =========================
// APLICA A CONFIGURAÇÃO
// =========================

question.textContent =
    config.pergunta;

successTitle.textContent =
    config.tituloSucesso;

successMessage.textContent =
    config.mensagemSucesso;


// =========================
// CRIA OS MEMES
// =========================

function createMemes(container) {

    for (
        let i = 1;
        i <= totalMemes;
        i++
    ) {

        const meme =
            document.createElement("img");


        meme.classList.add(
            "backgroundMeme"
        );


        meme.alt = "";


        // Primeiro tenta JPG.

        meme.src =
            `imagens/memes/meme${i}.jpg`;


        // Se não encontrar JPG,
        // tenta PNG e depois GIF.

        meme.onerror =
            function () {

                if (
                    meme.src.endsWith(".jpg")
                ) {

                    meme.src =
                        `imagens/memes/meme${i}.png`;

                    return;
                }


                if (
                    meme.src.endsWith(".png")
                ) {

                    meme.src =
                        `imagens/memes/meme${i}.gif`;

                    return;
                }


                // Se nenhum formato existir,
                // remove o elemento.

                meme.remove();
            };


        container.appendChild(
            meme
        );
    }
}


createMemes(
    backgroundMemes
);


// =========================
// DISTRIBUIÇÃO DOS MEMES
// =========================

function positionMemes(container) {

    const memes =
        Array.from(
            container.querySelectorAll(
                ".backgroundMeme"
            )
        );


    const columns = 10;
    const rows = 5;

    const totalCells =
        columns * rows;

    const cells = [];


    for (
        let i = 0;
        i < totalCells;
        i++
    ) {

        cells.push(i);
    }


    // Embaralha as regiões.

    for (
        let i = cells.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            cells[i],
            cells[randomIndex]
        ] =
        [
            cells[randomIndex],
            cells[i]
        ];
    }


    const cellWidth =
        100 / columns;

    const cellHeight =
        100 / rows;


    memes.forEach(
        (meme, index) => {

            const cell =
                cells[index];


            const column =
                cell % columns;


            const row =
                Math.floor(
                    cell / columns
                );


            const randomX =
                10 +
                Math.random() * 80;


            const randomY =
                10 +
                Math.random() * 80;


            const left =
                column * cellWidth +
                (randomX / 100) *
                cellWidth -
                5;


            const top =
                row * cellHeight +
                (randomY / 100) *
                cellHeight -
                5;


            meme.style.left =
                `${left}%`;


            meme.style.top =
                `${top}%`;


            // =========================
            // ROTAÇÃO
            // =========================

            const rotation =
                Math.random() * 16 - 8;


            meme.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );


            // =========================
            // MOVIMENTO
            // =========================

            const moveX =
                Math.random() * 50 - 25;


            const moveY =
                Math.random() * 50 - 25;


            meme.style.setProperty(
                "--move-x",
                `${moveX}px`
            );


            meme.style.setProperty(
                "--move-y",
                `${moveY}px`
            );


            // =========================
            // VELOCIDADE
            // =========================

            const duration =
                30 +
                Math.random() * 25;


            meme.style.animationDuration =
                `${duration}s`;


            meme.style.animationDelay =
                `-${Math.random() * duration}s`;
        }
    );
}


positionMemes(
    backgroundMemes
);


// =========================
// MENSAGENS DO BOTÃO NÃO
// =========================

const messages = [
    "NÃO",
    "Tem certeza?",
    "Pensa melhor...",
    "Não mesmo?",
    "Você tem certeza disso?",
    "Olha o outro botão...",
    "Hmm... acho que não.",
    "Vai mesmo fazer isso?",
    "Nem tenta.",
    "Você não desiste?",
    "Sério?",
    "Ainda tentando?",
    "Isso não vai funcionar.",
    "Desiste logo.",
    "O Sim é o outro botão...",
    "Você está insistindo nisso?",
    "Não acredito que você tentou de novo.",
    "Por que quer apertar esse botão?",
    "Pensa com carinho...",
    "Tem certeza absoluta?",
    "Última chance... mentira.",
    "Você sabe qual botão deveria apertar.",
    "Esse botão não quer você.",
    "Acho que você deveria reconsiderar.",
    "Isso está ficando constrangedor.",
    "Esse aqui não é o SIM!",
    "O NÃO, NÃO É UMA OPÇÃO!",
    "Você realmente quer clicar aqui?",
    "Tá bom, tenta de novo.",
    "Você é persistente, hein?",
    "Clica no verde",
    "Você sabe o que fazer",
    "Vai no Sim",
    "Tá bom, o Não agora é o botão verde"
];


// =========================
// MENSAGENS DO BOTÃO SIM
// =========================

const yesMessages = [
    "O SIM é aqui!",
    "Aperta Sim, vai",
    "Vai, confia",
    "É só apertar",
    "Não custa nada",
    "Qual é o problema?",
    "Você tá pensando demais",
    "Por favorzinho",
    "Só um clique",
    "Eu tô esperando...",
    "Não me faz implorar",
    "Não é difícil",
    "Olha o tamanho do SIM",
    "O SIM tá crescendo",
    "Você percebeu que o SIM tá gigante, né?",
    "Aperta aqui então",
    "Sim",
    "Sim, Sim",
    "Sim, Sim, Sim",
    "Sim, Sim, Sim, Sim",
    "Siiiiiiiiiiiiiiiiiiiiiiiim!",
    "Siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiim!",
    "SIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIM!!!!!!!!!!!"
];


// =========================
// SISTEMA DE SEQUÊNCIA
// =========================

let messageDeck = [];


// =========================
// EMBARALHA AS MENSAGENS
// =========================

function shuffleMessages() {

    messageDeck =
        [...messages];


    for (
        let i = messageDeck.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            messageDeck[i],
            messageDeck[randomIndex]
        ] =
        [
            messageDeck[randomIndex],
            messageDeck[i]
        ];
    }
}


shuffleMessages();


// =========================
// PEGA A PRÓXIMA MENSAGEM
// =========================

function getNextMessage() {

    if (
        messageDeck.length === 0
    ) {

        shuffleMessages();
    }


    return messageDeck.shift();
}


// =========================
// ATUALIZA O TEXTO DO SIM
// =========================

function updateYesButton() {

    /*
       O texto começa a mudar
       depois da 10ª tentativa.
    */

    if (attempts < 10) {

        return;
    }


    /*
       10ª tentativa = primeiro texto
       11ª = segundo
       12ª = terceiro...
    */

    const index =
        Math.min(
            attempts - 10,
            yesMessages.length - 1
        );


    yesButton.textContent =
        yesMessages[index];


    /*
       Mede quanto espaço o texto atual
       precisa ocupar.
    */

    const textWidth =
        yesButton.scrollWidth;


    /*
       Guarda o maior tamanho já atingido.

       Assim o botão nunca diminui depois
       que cresce por causa de uma mensagem.
    */

    const currentWidth =
        parseFloat(
            yesButton.dataset.maxWidth ||
            "0"
        );


    const newWidth =
        Math.max(
            currentWidth,
            textWidth
        );


    yesButton.dataset.maxWidth =
        newWidth;


    /*
       Define uma largura mínima baseada
       no maior texto já exibido.
    */

    yesButton.style.width =
        `${newWidth}px`;
}


// =========================
// VERIFICA COLISÃO
// =========================

function rectanglesOverlap(
    rectA,
    rectB,
    padding = 0
) {

    return !(
        rectA.right + padding <
            rectB.left ||

        rectA.left - padding >
            rectB.right ||

        rectA.bottom + padding <
            rectB.top ||

        rectA.top - padding >
            rectB.bottom
    );
}


// =========================
// ENCONTRA POSIÇÃO SEGURA
// =========================

function findSafePosition(
    buttonWidth,
    buttonHeight
) {

    const margin = 20;


    const maxX =
        Math.max(
            margin,
            window.innerWidth -
            buttonWidth -
            margin
        );


    const maxY =
        Math.max(
            margin,
            window.innerHeight -
            buttonHeight -
            margin
        );


    const cardRect =
        card.getBoundingClientRect();


    const yesRect =
        yesButton.getBoundingClientRect();


    for (
        let attempt = 0;
        attempt < 100;
        attempt++
    ) {

        const x =
            margin +
            Math.random() *
            Math.max(
                0,
                maxX - margin
            );


        const y =
            margin +
            Math.random() *
            Math.max(
                0,
                maxY - margin
            );


        const candidateRect = {

            left: x,

            top: y,

            right:
                x + buttonWidth,

            bottom:
                y + buttonHeight
        };


        const overlapsCard =
            rectanglesOverlap(
                candidateRect,
                cardRect,
                15
            );


        if (overlapsCard) {

            continue;
        }


        const overlapsYes =
            rectanglesOverlap(
                candidateRect,
                yesRect,
                45
            );


        if (overlapsYes) {

            continue;
        }


        return {
            x: x,
            y: y
        };
    }


    const fallbackPositions = [

        {
            x: margin,
            y: margin
        },

        {
            x: maxX,
            y: margin
        },

        {
            x: margin,
            y: maxY
        },

        {
            x: maxX,
            y: maxY
        }
    ];


    for (
        const position of fallbackPositions
    ) {

        const candidateRect = {

            left: position.x,

            top: position.y,

            right:
                position.x +
                buttonWidth,

            bottom:
                position.y +
                buttonHeight
        };


        if (
            !rectanglesOverlap(
                candidateRect,
                cardRect,
                15
            )
            &&
            !rectanglesOverlap(
                candidateRect,
                yesRect,
                45
            )
        ) {

            return position;
        }
    }


    return {
        x: margin,
        y: margin
    };
}


// =========================
// BOTÃO NÃO
// =========================
//
// No computador:
// passar o mouse em cima faz o botão fugir.
//
// No celular:
// tocar no botão faz o botão fugir.
//
// O bloqueio noMoving impede que
// uma única aproximação do mouse
// dispare várias fugas.
//

noButton.addEventListener(
    "pointerover",
    function (event) {

        /*
           Só reage ao mouse.

           O toque será tratado pelo
           pointerdown abaixo.
        */

        if (
            event.pointerType === "mouse"
            &&
            !noButtonMoving
        ) {

            moveNoButton();
        }
    }
);


noButton.addEventListener(
    "pointerdown",
    function (event) {

        /*
           Impede que o toque/click normal
           seja executado no botão NÃO.
        */

        event.preventDefault();


        /*
           Se o botão ainda estiver se movendo,
           ignora o toque.
        */

        if (noButtonMoving) {

            return;
        }


        moveNoButton();
    }
);


// =========================
// MOVE O BOTÃO NÃO
// =========================

function moveNoButton() {

    /*
       Bloqueia novas tentativas enquanto
       o botão está executando a fuga.
    */

    if (noButtonMoving) {

        return;
    }


    noButtonMoving = true;


    attempts++;


    // =========================
    // MUDA O TEXTO DO NÃO
    // =========================

    noButton.textContent =
        getNextMessage();


    // =========================
    // MUDA O TEXTO DO SIM
    // =========================

    updateYesButton();


    // =========================
    // CRESCE O SIM
    // =========================

    const scale =
        1 + attempts * 0.10;


    yesButton.style.transform =
        `scale(${scale})`;


    // =========================
    // TIRA O NÃO DO CARD
    // =========================

    if (
        noButton.parentElement !==
        document.body
    ) {

        document.body.appendChild(
            noButton
        );
    }


    // =========================
    // POSIÇÃO DO NÃO
    // =========================

    noButton.style.position =
        "fixed";


    noButton.style.zIndex =
        "10000";


    // Movimento suave.

    noButton.style.transition =
        "left 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), " +
        "top 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), " +
        "transform 0.2s ease";


    const buttonWidth =
        noButton.offsetWidth;


    const buttonHeight =
        noButton.offsetHeight;


    const safePosition =
        findSafePosition(
            buttonWidth,
            buttonHeight
        );


    noButton.style.left =
        `${safePosition.x}px`;


    noButton.style.top =
        `${safePosition.y}px`;


    /*
       Libera uma nova tentativa depois
       que a animação de fuga terminou.

       O tempo é um pouco maior que os
       0.4 segundos da transição.
    */

    setTimeout(
        () => {

            noButtonMoving = false;

        },

        450
    );
}


// =========================
// MANTÉM O NÃO DENTRO DA TELA
// =========================

window.addEventListener(
    "resize",
    keepNoButtonInside
);


function keepNoButtonInside() {

    if (
        noButton.style.position !==
        "fixed"
    ) {

        return;
    }


    const buttonWidth =
        noButton.offsetWidth;


    const buttonHeight =
        noButton.offsetHeight;


    const margin = 20;


    let currentX =
        parseFloat(
            noButton.style.left
        ) || margin;


    let currentY =
        parseFloat(
            noButton.style.top
        ) || margin;


    const maxX =
        Math.max(
            margin,
            window.innerWidth -
            buttonWidth -
            margin
        );


    const maxY =
        Math.max(
            margin,
            window.innerHeight -
            buttonHeight -
            margin
        );


    currentX =
        Math.min(
            Math.max(
                currentX,
                margin
            ),
            maxX
        );


    currentY =
        Math.min(
            Math.max(
                currentY,
                margin
            ),
            maxY
        );


    noButton.style.left =
        `${currentX}px`;


    noButton.style.top =
        `${currentY}px`;
}


// =========================
// CONFETES
// =========================

function createConfetti() {

    const confettiContainer =
        document.createElement("div");


    confettiContainer.id =
        "confettiContainer";


    confettiContainer.style.position =
        "fixed";


    confettiContainer.style.inset =
        "0";


    confettiContainer.style.width =
        "100%";


    confettiContainer.style.height =
        "100%";


    confettiContainer.style.pointerEvents =
        "none";


    confettiContainer.style.zIndex =
        "99999";


    confettiContainer.style.overflow =
        "hidden";


    document.body.appendChild(
        confettiContainer
    );


    const confettiColors = [
        "#ff5c8a",
        "#ffcc4d",
        "#61d477",
        "#6eb6ff",
        "#c77dff",
        "#ffffff"
    ];


    const confettiCount = 130;


    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.style.position =
            "absolute";


        const width =
            6 +
            Math.random() * 8;


        const height =
            8 +
            Math.random() * 14;


        confetti.style.width =
            `${width}px`;


        confetti.style.height =
            `${height}px`;


        confetti.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];


        const startX =
            Math.random() *
            window.innerWidth;


        const startY =
            -30 -
            Math.random() * 200;


        confetti.style.left =
            `${startX}px`;


        confetti.style.top =
            `${startY}px`;


        if (
            Math.random() < 0.5
        ) {

            confetti.style.borderRadius =
                "2px";

        } else {

            confetti.style.borderRadius =
                "50%";
        }


        const rotation =
            Math.random() * 360;


        const duration =
            2.5 +
            Math.random() * 2.5;


        const delay =
            Math.random() * 0.8;


        const fallDistance =
            window.innerHeight +
            200 +
            Math.random() * 400;


        const horizontalMovement =
            Math.random() * 500 -
            250;


        confetti.animate(

            [

                {
                    transform:
                        `translate(0, 0) rotate(${rotation}deg)`,

                    opacity: 1
                },

                {
                    transform:
                        `translate(${horizontalMovement}px, ${fallDistance}px) rotate(${rotation + 720}deg)`,

                    opacity: 0.9
                }

            ],

            {

                duration:
                    duration * 1000,

                delay:
                    delay * 1000,

                easing:
                    "cubic-bezier(0.2, 0.7, 0.3, 1)",

                fill:
                    "forwards"
            }
        );


        confettiContainer.appendChild(
            confetti
        );
    }


    setTimeout(
        () => {

            confettiContainer.remove();

        },

        6000
    );
}


// =========================
// BOTÃO SIM
// =========================

yesButton.addEventListener(
    "click",
    acceptInvite
);


function acceptInvite() {

    startScreen.style.display =
        "none";


    successScreen.style.display =
        "flex";


    successScreen.appendChild(
        backgroundMemes
    );


    noButton.style.display =
        "none";


    createConfetti();
}