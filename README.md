# Hackeando a Redação do ENEM

Esta é uma aplicação Next.js criada no Firebase Studio. A plataforma utiliza Inteligência Artificial para corrigir redações com base nos critérios do ENEM, além de fornecer material de estudo completo.

## Como Subir (Fazer Deploy) do Site

Para colocar seu site no ar, vamos usar o **Firebase App Hosting**. Siga os passos abaixo.

### Pré-requisitos

1.  **Conta no Firebase**: Certifique-se de que você tem uma conta no Firebase e que este projeto foi criado.
2.  **Node.js**: Você precisa ter o Node.js instalado em sua máquina.
3.  **Chaves de API**:
    *   `GEMINI_API_KEY`: Sua chave de API para o Google AI Studio (Gemini).
    *   `FIREBASE_SERVICE_ACCOUNT_KEY`: A chave de serviço da sua conta Firebase para o backend.

### Passo 1: Instalar o Firebase CLI

Se você ainda não tem as ferramentas de linha de comando do Firebase, instale-as globalmente no seu computador. Abra o terminal e execute:

```bash
npm install -g firebase-tools
```

### Passo 2: Fazer Login no Firebase

Ainda no terminal, faça login na sua conta do Firebase:

```bash
firebase login
```
Isso abrirá uma janela no seu navegador para que você possa autenticar sua conta.

### Passo 3: Configurar as Variáveis de Ambiente

Para que a aplicação funcione corretamente após o deploy, as chaves de API precisam ser configuradas como "Secrets" no Google Cloud.

1.  Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2.  No menu, navegue até **Segurança > Secret Manager**.
3.  Crie dois secrets:
    *   **Nome:** `GEMINI_API_KEY`
        *   **Valor:** Cole a sua chave da API do Gemini.
    *   **Nome:** `FIREBASE_SERVICE_ACCOUNT_KEY`
        *   **Valor:** Cole o conteúdo completo do seu arquivo JSON da chave de serviço do Firebase.

> **Importante:** Após criar os secrets, você precisa dar permissão para o serviço do App Hosting acessá-los. Na página do **Secret Manager**, selecione cada secret, vá em **Permissões** e adicione o principal `service-<PROJECT_NUMBER>@gcp-sa-apphosting.iam.gserviceaccount.com` com o papel **Acessador de secrets do Secret Manager**.

### Passo 4: Construir o Projeto para Produção

Antes de fazer o deploy, você precisa gerar a versão otimizada do seu site. No terminal, na raiz do seu projeto, execute:

```bash
npm run build
```
Este comando cria uma pasta `out` com todos os arquivos estáticos prontos para serem enviados ao servidor.

### Passo 5: Fazer o Deploy para o Firebase

Finalmente, para subir o site, execute o seguinte comando no terminal:

```bash
firebase deploy --only hosting
```

O terminal mostrará o progresso do deploy. Ao final, ele fornecerá a URL onde seu site está no ar.

Pronto! Seu site estará online e funcionando.