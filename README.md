Projeto: Pipeline CI/CD com React

Este projeto demonstra a implementação de uma pipeline de CI/CD para uma aplicação React, utilizando GitHub Actions e Docker.

🧱 Estrutura do projeto
REACT-CI-CD/
├── .github/workflows/
├── react-ci-cd/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
⚙️ Tecnologias utilizadas
React
GitHub Actions
Docker
Docker Hub
🔄 Pipeline CI/CD

A pipeline é executada automaticamente a cada push na branch main.

🔹 1. Instalação de dependências

Instala os pacotes necessários para execução da aplicação.

📌 Por que é importante?
Sem as dependências, a aplicação não pode ser executada nem testada.

🔹 2. Execução de testes

Executa testes automatizados da aplicação.

📌 Por que é importante?
Garante que o código está funcionando corretamente antes de seguir para produção.

🔹 3. Build da aplicação

Compila a aplicação React para produção.

📌 Por que é importante?
React precisa ser convertido em arquivos estáticos otimizados.

🔹 4. Build da imagem Docker

Cria uma imagem da aplicação utilizando Docker.

📌 Por que é importante?
Permite padronizar o ambiente e facilita o deploy.

🔹 5. Push para o Docker Hub

Envia a imagem criada para o Docker Hub.

📌 Por que é importante?
Permite armazenar e versionar a aplicação para uso futuro.

🧠 Observação técnica

Como o projeto está dentro de um subdiretório (react-ci-cd), foi necessário configurar o working-directory na pipeline para garantir a execução correta dos comandos.

🎯 Conclusão

Esta pipeline simula um fluxo real de desenvolvimento, garantindo:

Automação
Qualidade do código
Padronização de ambiente
Preparação para deploy contínuo
