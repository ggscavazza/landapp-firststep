# Dados do candidato

Nome: Gustavo Gonçalves Scavazza
E-mail: ggscavazza.php@gmail.com

# 🧪 Case Técnico — Desenvolvedor Front End Pleno

Este projeto é uma solução para o case técnico da vaga de Desenvolvedor Front End Pleno, contendo duas etapas:

- Interface de Login responsiva com validações
- Integração com API externa exibindo dados com experiência avançada de usuário

## 🧱 Tecnologias Utilizadas

- **Next.js 15** com App Router
- **React 19** (Client components)
- **TypeScript**
- **Tailwind CSS** para estilização
- `IntersectionObserver` para scroll infinito
- `clsx` para manipulação condicional de classes

## 🚀 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/ggscavazza/landapp-firststep.git
cd landapp-firststep

# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev

# Acesse:
http://localhost:3000
```

## ✅ Funcionalidades por desafio

### 💻 Desafio 1 — Interface Responsiva

✔ Tela de login com campos para e-mail e senha  
✔ Validação básica de e-mail e senha forte (mínimo 8 caracteres, 1 maiúscula, 1 caractere especial)  
✔ Exibição de erro em alert estilizado  
✔ Redirecionamento automático para `/home` após login  
✔ Componente reutilizável de botão, input e logo  
✔ Responsivo para mobile e desktop  
✔ Tema visual limpo e consistente com boas práticas de design

### 🌐 Desafio 2 — Integração com API Externa

✔ Consumo da API pública [`https://jsonplaceholder.typicode.com/posts`](https://jsonplaceholder.typicode.com/posts)  
✔ Exibição de posts em formato de cartão (título e corpo)  
✔ Scroll infinito com `IntersectionObserver`  
✔ Skeleton loading durante carregamento de dados  
✔ Modal para visualização completa do post  
✔ Mensagem de erro personalizada em falha de requisição  
✔ Navbar fixa com logo, nome da tela atual e botão "Sair"

## 📁 Estrutura de componentes

```
src/
├── app/
│   ├── login/          # Tela de login
│   ├── home/           # Tela de listagem de posts
│   └── layout.tsx      # Layout global com CSS base
│
├── components/
│   ├── Alert.tsx       # Alertas de erro/sucesso
│   ├── Button.tsx      # Botão reutilizável
│   ├── Input.tsx       # Campo de input reutilizável
│   ├── Logo.tsx        # Logo centralizado
│   ├── Navbar.tsx      # Topo com título e botão sair
│   ├── PostCard.tsx    # Cartão de post
│   └── PostModal.tsx   # Modal de post
```

## 📄 Documentação técnica

✅ Este README
