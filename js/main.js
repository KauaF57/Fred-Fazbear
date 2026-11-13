const botao = document.getElementById("botao-chat");
const janela = document.getElementById("janela-chat");
const entrada = document.getElementById("entrada");
const mensagens = document.getElementById("mensagens");

const respostas = [
  {
    palavras: ["horario", "horário", "abre", "fecha", "funciona"],
    resposta: "Estamos abertos das 18h às 6h. Cuidado com o horário!"
  },
  {
    palavras: ["cardapio", "cardápio", "pizza", "menu"],
    resposta: "Temos a Pizza do Freddy, a Pizza da Foxy e a Pizza do Chica. Veja todos os sabores na aba Cardápio!"
  },
  {
    palavras: ["entrega", "delivery", "entregam"],
    resposta: "Entregamos em até 40 minutos. Se o Bonnie bater na sua porta, não abra!"
  },
  {
    palavras: ["telefone", "contato", "ligar", "whatsapp"],
    resposta: "Você pode nos ligar pelo número que está na aba Contato."
  },
  {
    palavras: ["preco", "preço", "valor", "quanto custa"],
    resposta: "Os preços estão na aba Cardápio. Pizzas a partir de R$ 35,00."
  },
  {
    palavras: ["endereco", "endereço", "onde", "local"],
    resposta: "Estamos na Rua do Pesadelo, nº 1987. Não se perca no caminho!"
  },
  {
    palavras: ["oi", "olá", "ola", "bom dia", "boa noite", "tudo bem"],
    resposta: "Olá! Sou o assistente da Freddy's Pizza. Pergunte sobre horário, cardápio, entrega ou contato."
  },
  {
    palavras: ["obrigado", "obrigada", "valeu"],
    resposta: "De nada! Volte sempre... se conseguir sobreviver à noite."
  }
];

function responder(pergunta) {
  const texto = pergunta.toLowerCase();
  for (const item of respostas) {
    if (item.palavras.some(p => texto.includes(p))) {
      return item.resposta;
    }
  }
  return "Não entendi. Tente perguntar sobre horário, cardápio, entrega ou contato.";
}

function adicionarMensagem(quem, texto) {
  mensagens.innerHTML += `<p><b>${quem}:</b> ${texto}</p>`;
  mensagens.scrollTop = mensagens.scrollHeight;
}

function enviar() {
  const pergunta = entrada.value.trim();
  if (pergunta === "") return;
  adicionarMensagem("Você", pergunta);
  adicionarMensagem("Bot", responder(pergunta));
  entrada.value = "";
}

botao.addEventListener("click", () => {
  janela.style.display = janela.style.display === "block" ? "none" : "block";
});
document.getElementById("enviar").addEventListener("click", enviar);
entrada.addEventListener("keydown", e => {
  if (e.key === "Enter") enviar();
});