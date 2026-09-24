# 💌 Convite

Este é um site de convite interativo.

## 📁 Estrutura

* `index.html` — página principal do convite
* `style.css` — aparência e layout do site
* `script.js` — funcionamento dos botões e textos
* `imagens/memes/` — imagens usadas no site

---

## ✏️ Como alterar o texto

Abra o arquivo:

`script.js`

No começo do arquivo existe uma área chamada `config`:

```javascript
const config = {

    pergunta:
        "Quer sair comigo?",

    tituloSucesso:
        "ESCOLHA CERTA, parabéns! ❤️",

    mensagemSucesso:
        "Eu sabia que você não ia resistir!"
};
```

Você pode alterar somente os textos entre aspas.

### Exemplo:

```javascript
pergunta:
    "Quer ir ao cinema comigo?",
```

Não altere os nomes `pergunta`, `tituloSucesso` e `mensagemSucesso`.

---

## 🖼️ Como trocar os memes

Entre na pasta:

`imagens/memes/`

Os memes do fundo devem seguir esta sequência:

* `meme1.jpg`
* `meme2.jpg`
* `meme3.jpg`
* etc.

Você pode substituir as imagens por outras mantendo o **mesmo nome do arquivo**.

Por exemplo:

> Quer trocar o `meme12.jpg`?

Basta apagar o antigo e colocar outro arquivo chamado `meme12.jpg`.

O site aceita imagens `.jpg`, `.png` e `.gif`.

### ⚠️ Importante

Não altere o nome:

`sucesso.jpg`

Essa é a imagem que aparece quando o botão **SIM** é escolhido.

---

## 🌐 Hospedagem

Este é um site estático, então pode ser hospedado gratuitamente em serviços como Netlify ou GitHub Pages.

Não existe banco de dados ou servidor necessário.

---

## ⚠️ Dica importante

Se você não sabe o que uma parte do código faz, **não altere ou apague o código**.

Para personalizar o convite, normalmente você só precisa:

1. Alterar os textos no `config`.
2. Trocar os memes dentro de `imagens/memes/`.
3. Manter os nomes dos arquivos.

Pronto. 💗
