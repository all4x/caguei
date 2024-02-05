Certamente! Vamos ajustar o README para refletir as mudanças no código:

# Contador de Merda para Grupo de WhatsApp

## Visão Geral

Este projeto é um contador de "merdas" desenvolvido para ser integrado a um grupo de WhatsApp. Ele utiliza a biblioteca `whatsapp-web.js` e o banco de dados `Prisma` para rastrear e exibir estatísticas sobre as contribuições dos membros do grupo.

## Tecnologias Utilizadas

Banco de Dados: Prisma versão 5.6.0 - ORM para facilitar a interação com o banco de dados SQLITE.

WhatsApp API: whatsapp-web.js versão 1.23.0.

## Funcionalidades

1. **Contagem Simples:** Os membros do grupo podem adicionar uma "merda" à contagem usando o comando adequado.

2. **Reset Manual:** O contador pode ser reiniciado manualmente pelo administrador do grupo, enviando a mensagem 'reset' no WhatsApp.

3. **Estatísticas Detalhadas:** Exibe estatísticas detalhadas sobre as contribuições de cada membro, incluindo o pódio dos cagadores.

## Como Usar

1. Adicione o bot ao seu grupo de WhatsApp usando o link de convite fornecido.

2. Utilize o comando `caguei` seguido de uma mensagem para adicionar uma contagem.

3. Para reiniciar manualmente a contagem, envie a mensagem 'reset' no WhatsApp.

4. Digite `pódio` para visualizar o pódio dos cagadores no grupo.

5. Configure na linha 4 de index.js seu contato do whatsapp como adminstrador da rinha de merda, ex 55+DD+Número, comando "reset" reseta o placar.
## Configuração do Desenvolvedor

Se você é um desenvolvedor e deseja contribuir ou personalizar o projeto, siga as etapas abaixo:

1. **Clonagem do Repositório:**
   ```
   git clone git@github.com:all4x/caguei.git 
   cd caguei
   ```

2. **Instalação das Dependências:**
   ```
   npm install
   ```

3. **Execução do Projeto:**
   ```
   npm build
   npm start
   ```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, propor melhorias ou enviar pull requests.

## Notas Legais

Este projeto é desenvolvido e mantido por [Alex]. Consulte a licença para obter informações sobre os termos de uso e distribuição.

**Divirta-se contando suas "merdas" no grupo!**
