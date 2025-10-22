# 🏦 Bankist - Aplicação Bancária Moderna

Uma aplicação bancária moderna e interativa desenvolvida com JavaScript vanilla, HTML5 e CSS3. O projeto demonstra conceitos avançados de programação JavaScript, incluindo manipulação de arrays, programação funcional, e arquitetura modular.

## 🚀 Funcionalidades

### 💳 Sistema de Login
- Login seguro com username e PIN
- Interface responsiva e intuitiva
- Gerenciamento de sessão do usuário

### 💰 Gestão Financeira
- **Visualização de Saldo**: Exibição em tempo real do saldo atual
- **Histórico de Transações**: Lista completa de movimentações (depósitos e saques)
- **Resumo Financeiro**: Cálculo automático de:
  - Total de entradas
  - Total de saídas  
  - Juros acumulados

### 🔄 Operações Bancárias
- **Transferências**: Envio de dinheiro entre contas
- **Empréstimos**: Solicitação de empréstimos (10% do maior depósito)
- **Fechamento de Conta**: Encerramento seguro da conta

### 📊 Funcionalidades Extras
- **Ordenação**: Organize transações por valor (crescente/decrescente)
- **Timer de Logout**: Logout automático por inatividade
- **Validações**: Sistema robusto de validação de operações

## 🏗️ Arquitetura do Projeto

O projeto foi completamente modularizado para melhor organização e manutenibilidade:

```
Bank-App/
├── assets/              # Recursos estáticos
│   ├── icon.png
│   ├── logo.png
│   └── Bankist-flowchart.png
├── css/                 # Estilos
│   └── style.css
├── js/                  # Módulos JavaScript
│   ├── app.js          # Arquivo principal e coordenação
│   ├── auth.js         # Sistema de autenticação
│   ├── data.js         # Dados das contas
│   ├── dom.js          # Seletores DOM
│   ├── transactions.js # Operações financeiras
│   └── ui.js           # Interface do usuário
├── index.html          # Página principal
└── README.md           # Documentação
```

### 📂 Descrição dos Módulos

- **`data.js`**: Contém todas as contas de teste e funções relacionadas aos dados
- **`dom.js`**: Centraliza todos os seletores de elementos DOM
- **`ui.js`**: Funções para manipulação da interface (exibição de dados)
- **`auth.js`**: Sistema de login, logout e gerenciamento de sessão
- **`transactions.js`**: Lógica para transferências e empréstimos
- **`app.js`**: Arquivo principal que coordena todos os módulos

## 🧪 Contas de Teste

Para testar a aplicação, use uma das seguintes contas:

| Nome | Usuário | PIN | Saldo Inicial |
|------|---------|-----|---------------|
| Jonas Schmedtmann | `js` | `1111` | €2,770 |
| Jessica Davis | `jd` | `2222` | €11,810 |
| Steven Thomas Williams | `stw` | `3333` | €10 |
| Sarah Smith | `ss` | `4444` | €2,270 |

## 🛠️ Como Usar

### 1. **Fazer Login**
- Digite o username (ex: `js`)
- Digite o PIN correspondente (ex: `1111`)
- Clique na seta (→) para entrar

### 2. **Visualizar Conta**
Após o login, você verá:
- Saldo atual
- Histórico de transações
- Resumo financeiro (entradas, saídas, juros)

### 3. **Realizar Transferência**
- Digite o username do destinatário
- Insira o valor a transferir
- Clique na seta (→) para confirmar

### 4. **Solicitar Empréstimo**
- Digite o valor desejado
- O sistema verifica se você tem direito (10% do maior depósito)
- Clique na seta (→) para solicitar

### 5. **Fechar Conta**
- Digite seu username
- Digite seu PIN
- Clique na seta (→) para confirmar

### 6. **Ordenar Transações**
- Clique no botão "↓ SORT" para alternar entre ordem crescente e decrescente

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilização avançada com Flexbox e Grid
- **JavaScript ES6+**: 
  - Módulos ES6
  - Arrow Functions
  - Destructuring
  - Array Methods (map, filter, reduce, forEach)
  - Programação Funcional

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/AugustoArand/Bank-App.git
   cd Bank-App
   ```

2. **Abra no navegador**:
   - Abra o arquivo `index.html` em um navegador moderno
   - Ou use um servidor local (Live Server, Python HTTP Server, etc.)

3. **Teste a aplicação**:
   - Use as contas de teste listadas acima
   - Explore todas as funcionalidades

## 🔒 Recursos de Segurança

- Validação de PIN numérico
- Verificação de saldo antes de transferências
- Prevenção de transferências para a própria conta
- Timer de logout automático por inatividade
- Validação de valores positivos para operações

## 🎯 Conceitos JavaScript Demonstrados

- **Manipulação de Arrays**: map(), filter(), reduce(), forEach()
- **Programação Funcional**: Funções puras e imutabilidade
- **Módulos ES6**: Import/Export para organização do código
- **Event Handling**: Gestão avançada de eventos
- **DOM Manipulation**: Criação dinâmica de elementos
- **Validação de Dados**: Verificações robustas de entrada
- **Gerenciamento de Estado**: Controle do estado da aplicação

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 💻 Desktop
- 📱 Tablets
- 📱 Smartphones

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Melhorar a documentação

## 📄 Licença

Este projeto é para fins educacionais e demonstrativos.

---

**Desenvolvido com ❤️ para demonstrar conceitos avançados de JavaScript**

*Explore, aprenda e divirta-se! 🚀*
