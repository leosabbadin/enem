# Hackeando a Redação do ENEM

Esta é uma aplicação Next.js criada no Firebase Studio. A plataforma utiliza Inteligência Artificial para corrigir redações com base nos critérios do ENEM, além de fornecer material de estudo completo.

## Como Subir o Site com Firebase App Hosting

Para colocar seu site no ar de forma profissional, vamos usar o **Firebase App Hosting**, que é otimizado para aplicações Next.js como esta.

### Pré-requisitos

1.  **Node.js**: Certifique-se de que você tem o Node.js instalado no seu computador.
2.  **Conta no Firebase**: Você precisa de uma conta no [Firebase](https://firebase.google.com/).
3.  **Chave de API do Gemini**: Tenha sua `GEMINI_API_KEY` em mãos.

---

### Passo 1: Instalar o Firebase CLI e Fazer Login

Primeiro, você precisa das ferramentas de linha de comando do Firebase.

1.  **Instale o Firebase Tools**:
    *   Abra seu terminal e execute o comando:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Faça Login na sua Conta Firebase**:
    *   No mesmo terminal, execute:
    ```bash
    firebase login
    ```
    *   Isso vai abrir uma janela no seu navegador para você autorizar o acesso à sua conta Google.

---

### Passo 2: Configurar o Projeto e Fazer o Deploy

Agora vamos conectar seu código ao Firebase e publicá-lo.

1.  **Inicialize o Firebase App Hosting**:
    *   No terminal, na pasta do seu projeto, execute:
    ```bash
    firebase apphosting:backends:create
    ```
    *   Siga as instruções:
        *   Selecione o projeto Firebase correto da lista.
        *   Escolha uma localização para o servidor (ex: `us-central1`).

2.  **Configure a Chave de API do Gemini (Variável de Ambiente)**:
    *   Para a IA funcionar, você precisa adicionar sua chave de API ao ambiente de produção. Execute o comando abaixo, substituindo `SUA_CHAVE_AQUI` pela sua `GEMINI_API_KEY`:
    ```bash
    firebase apphosting:secrets:set GEMINI_API_KEY --value=SUA_CHAVE_AQUI
    ```

3.  **Faça o Deploy do Site**:
    *   Finalmente, para construir e enviar seu site para o Firebase, execute:
    ```bash
    firebase apphosting:deploy
    ```
    *   Aguarde o processo terminar. O Firebase vai construir seu projeto Next.js, configurar o servidor e colocar tudo no ar.

Ao final, o terminal mostrará a URL onde seu site está funcionando.

Pronto! Seu site estará online, com a IA funcionando. Toda vez que você fizer uma alteração no código e quiser atualizar o site, basta executar o comando `firebase apphosting:deploy` novamente.
