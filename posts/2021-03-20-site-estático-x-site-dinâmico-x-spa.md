---
title: Site estático x site dinâmico x SPA
description: Um breve resumo sobre a definição de sites dinâmicos, estáticos e SPA.
date: 2021-03-20 01:17:16
image: assets/img/site-estatico-ou-dinamico.png
category: dev
background: "#c21b1b"
---

Será que algo novo é sempre necessariamente algo moderno? Recentemente, ao estudar conceitos como sites estáticos, sites dinâmicos e SPA (Single Page Application) me deparei com essa questão e gostaria de compartilhar quais foram minhas conclusões, mas primeiro vamos entender o que significa cada um desses conceitos.

## Um resumo da história do desenvolvimento web

Se formos explicar esses conceitos levando em conta a linha do tempo, precisamos começar a falar sobre sites estáticos pois quando a internet surgiu no mundo os sites eram em sua grande maioria estáticos como vemos na imagem a seguir.

![Imagem dos primeiros sites estáticos](assets/img/sites-estaticos.png "Exemplo de como eram os primeiros sites estáticos")

Como assim? O que são sites estáticos? Basicamente, como o próprio nome já diz, sites estáticos são sites com comportamentos fixos, não sofrem alteração. Ou seja a exata mesma pagina é sempre exibida pra qualquer usuário, isso porque todo o conteúdo de um site estático é gerado no momento do build que fornece um único arquivo HTML com tudo que precisa pra exibir o site.

Mas com a evolução da internet, ocorreu uma grande evolução em como eram criadas essas paginas, com a invenção de paginas criadas dinamicamente. Com esse novo conceito surgiu a possibilidade de a cada requisição, uma pagina diferente ser gerada pra cada usuário, e pela primeira vez pessoas e empresas podiam oferecer serviços com informações customizadas para cada usuário. 

Mas mesmo com esse grande avanço ainda faltava algo. Isso porquê, nesse modelo de paginas geradas dinamicamente, para cada interação era sempre necessário uma requisição que voltasse uma nova pagina por inteiro como resposta.  E por isso o SPA entrou em cena, pois com esse novo método de criar sites, era possível desenvolver aplicações webs com o mesmo comportamento de aplicações desktops e mobile, onde sempre é passada uma única pagina e quando um interação ocorre o javaScript é responsável por exibir a alteração apenas no pedaço em que é realmente necessário.

![Imagem demonstrando um SPA](assets/img/spa-1.png "Ilustração de como se comporta um SPA")

## Qual é o método mais moderno?

Agora chegamos na parte interessante e é o ponto polemico da questão. Muitos na internet brigavam e ainda brigam para chegar a resposta desta pergunta: Qual o melhor método? As divergências estão sempre entre paginas dinâmicas e SPAs, e assim acabam deixando de lado as paginas estáticas. Mas é exatamente aqui que ocorre o plot twist!

**A forma mais antiga de se fazer na verdade tem virado a forma melhor e mais moderna.** Isso porque este modelo traz muitos benefícios não só pra quem acessa mas também pra segurança de quem desenvolve os sites, levando em conta que sites estáticos são muito melhores em performance, com paginas processadas uma única vez e distribuídas infinitamente e são também difíceis de serem hackeadas. Sem mencionar que é a opção mais econômica também pois o uso do servido é quase nulo, e se for usado um servidor é possível ter maior flexibilidade para usar qualquer servidor.

Obviamente esse modelo não deve ser considerado como uma *bala de prata*, ou perfeita para cada situação, pois para situações específicas ele pode apresentar desvantagens como o fato de a cada alteração ser necessário um novo build, tornando mais difícil a implementação em aplicações grandes que necessitam realizar atualizações constantes. Mas mesmo assim vale muito a pena considerar como uma principal opção já que se apresentam muitos benefícios, e inclusive existem ótimas ferramentas que auxiliam a desenvolver sites estáticos como o GatsbyJs e o Next. 

Com isso queria deixar essa reflexão que me chamou muito a atenção: "Algo moderno não será necessariamente sempre algo novo". Espero que essa mesma reflexão por mais simples que possa parecer impacte o modo de vocês pensarem, de forma positiva claro!