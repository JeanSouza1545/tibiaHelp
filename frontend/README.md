# tibiaHelp Frontend

## 📋 Sobre o Projeto

O **tibiaHelp** é uma plataforma web desenvolvida para fornecer ferramentas e informações em tempo real para jogadores de Tibia. O frontend é construído com React, TypeScript e segue os princípios de Clean Architecture, DDD e TDD.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e servidor de desenvolvimento
- **Jest** - Framework de testes
- **Axios** - Cliente HTTP para comunicação com APIs

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** com as seguintes camadas:

- **Presentation** - Interface de usuário (React components)
- **Application** - Casos de uso da aplicação
- **Domain** - Regras de negócio e entidades
- **Infrastructure** - Implementações externas (APIs, repositórios)
- **Shared** - Código compartilhado entre camadas

Para mais detalhes sobre a arquitetura, consulte o arquivo [architecture.md](./docs/architecture.md).

## 📁 Estrutura do Projeto

```
src/
├── application/          # Casos de uso
├── domain/               # Entidades e regras de negócio
│   ├── entities/
│   ├── repositories/
│   └── usecases/
├── infrastructure/        # Implementações externas
│   ├── api/
│   └── repositories/
├── presentation/         # Camada de apresentação
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── styles/
├── shared/               # Código compartilhado
│   ├── types/
│   └── utils/
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## 🛠️ Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Git

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Mallfurion15/tibiaHelp.git
   cd tibiaHelp
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🧪 Testes

### Executar todos os testes:
```bash
npm test
```

### Executar testes em modo watch:
```bash
npm run test:watch
```

### Executar testes com cobertura:
```bash
npm run test:coverage
```

## 🏗️ Build de Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria o build de produção |
| `npm run preview` | Visualiza o build de produção |
| `npm run test` | Executa os testes |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:coverage` | Executa testes com relatório de cobertura |
| `npm run lint` | Executa o linter |
| `npm run lint:fix` | Corrige problemas de linting automaticamente |

## 🎯 Features Planejadas

### Fase 1 - MVP
- [x] Estrutura base do projeto
- [x] Landing page responsiva
- [ ] Calculadora de experiência básica
- [ ] Consulta de personagem

### Fase 2 - Ferramentas Básicas
- [ ] Calculadora de dano
- [ ] Calculadora de resistências
- [ ] Análise de equipamentos
- [ ] Comparador de personagens

### Fase 3 - Integração Avançada
- [ ] Integração com API TibiaData
- [ ] Dados em tempo real
- [ ] Sistema de notificações
- [ ] Histórico de personagens

### Fase 4 - Features Avançadas
- [ ] Marketplace integration
- [ ] Guild management
- [ ] World events tracking
- [ ] Mobile app (React Native)

## 🔧 Configuração do Ambiente de Desenvolvimento

### VS Code (Recomendado)

Instale as seguintes extensões:
- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **Prettier - Code formatter**
- **ESLint**

### Configurações Recomendadas

Crie um arquivo `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📝 Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (`PlayerCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`usePlayer.ts`)
- **Interfaces**: PascalCase com prefixo `I` (`IPlayerRepository.ts`)
- **Tipos**: PascalCase (`PlayerData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Estrutura de Arquivos
- Um arquivo por componente/entidade
- Interfaces em arquivos separados
- Testes co-localizados com o código

### Imports
- Imports absolutos usando aliases (`@domain/entities/Player`)
- Ordem: bibliotecas externas → internas → relativos

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de dependências:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Erro de TypeScript:**
   ```bash
   npm run build
   ```

3. **Problemas de cache do Vite:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit

Use o formato: `tipo(escopo): descrição`

Exemplos:
- `feat(calculator): adiciona calculadora de experiência`
- `fix(api): corrige erro de timeout`
- `docs(readme): atualiza instruções de instalação`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/Mallfurion15/tibiaHelp/issues)
- **Discord**: [Servidor do tibiaHelp](https://discord.gg/tibiahelp)
- **Email**: contato@tibiahelp.com

## 🙏 Agradecimentos

- Comunidade Tibia por feedback e sugestões
- Desenvolvedores da TibiaData API
- Contribuidores do projeto

---

**Desenvolvido com ❤️ para a comunidade Tibia**
