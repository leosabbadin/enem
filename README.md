# Hackeando a Redação do ENEM

Esta é uma aplicação Next.js criada no Firebase Studio. A plataforma utiliza Inteligência Artificial para corrigir redações com base nos critérios do ENEM, além de fornecer material de estudo completo.

## Como Subir o Site com Vercel e GitHub

Para colocar seu site no ar de forma simples e gratuita, vamos usar a **Vercel**, que se integra perfeitamente com o **GitHub**.

### Pré-requisitos

1.  **Conta no GitHub**: Você precisa de uma conta no [GitHub](https://github.com/).
2.  **Conta na Vercel**: Crie uma conta na [Vercel](https://vercel.com/signup) usando seu perfil do GitHub.
3.  **Chave de API do Gemini**: Tenha sua `GEMINI_API_KEY` em mãos.

---

### Passo 1: Enviar seu Projeto para o GitHub

Primeiro, você precisa criar um repositório no GitHub e enviar seu código para ele.

1.  **Crie um novo repositório no GitHub**:
    *   Vá para o [GitHub](https://github.com/new) e crie um novo repositório (pode ser público ou privado).
    *   **Não** adicione `README`, `.gitignore` ou licença. Deixe-o vazio.

2.  **Envie seu código local para o repositório**:
    *   No seu terminal, na pasta do projeto, execute os seguintes comandos, substituindo `URL_DO_SEU_REPOSITORIO` pela URL que o GitHub forneceu (ex: `https://github.com/seu-usuario/nome-do-repo.git`):
    ```bash
    git init -b main
    git add .
    git commit -m "Primeiro commit"
    git remote add origin URL_DO_SEU_REPOSITORIO
    git push -u origin main
    ```

---

### Passo 2: Fazer o Deploy na Vercel

Agora que seu código está no GitHub, o deploy na Vercel é muito fácil.

1.  **Acesse seu Dashboard na Vercel**:
    *   Faça login na [Vercel](https://vercel.com/dashboard).

2.  **Importe seu Projeto**:
    *   Clique em **"Add New... > Project"**.
    *   Na seção **"Import Git Repository"**, encontre o repositório que você acabou de criar no GitHub e clique em **"Import"**.

3.  **Configure as Variáveis de Ambiente**:
    *   Durante a configuração do projeto, a Vercel vai pedir para você configurar as "Environment Variables" (Variáveis de Ambiente). Isso é crucial para a IA funcionar.
    *   Adicione uma variável com o nome `GEMINI_API_KEY`.
    *   No campo do valor, cole a sua chave de API do Gemini.
    *   Clique em **"Add"**.

4.  **Faça o Deploy**:
    *   Clique no botão **"Deploy"**. A Vercel vai automaticamente detectar que é um projeto Next.js, instalar as dependências e colocar seu site no ar.

Ao final do processo, a Vercel fornecerá a URL onde seu site está funcionando.

Pronto! Seu site estará online, com a IA funcionando, e qualquer alteração que você enviar para o GitHub (usando `git push`) será automaticamente atualizada no seu site.
