
---

##  Como Rodar

### Pré-requisitos
- Node.js 22+
- Angular CLI 22+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/zzzhome.git

# Entre na pasta
cd zzzhome

# Instale as dependências
npm install

# Rode o projeto
ng serve
```

Acesse em: **http://localhost:4200**

---

##  Download das Imagens

Para baixar as imagens dos agentes automaticamente:

```bash
node download-imagens.js
```

As imagens serão salvas em `public/agentes/`.

---

##  Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | HubComponent | Página principal |
| `/zzz` | HomeComponent | Grid de agentes |
| `/agente/:id` | AgenteDetalheComponent | Detalhes do agente |

---

##  Próximas Features

- [ ] Sistema de login e cadastro
- [ ] Posts e comentários da comunidade
- [ ] Suporte a Honkai: Star Rail
- [ ] Suporte a Genshin Impact
- [ ] Builds para todos os agentes
- [ ] Times completos com sinergia
- [ ] Review dos agentes

---

##  Contribuição

Projeto em desenvolvimento. Contribuições são bem-vindas!

---

## Licença

MIT
