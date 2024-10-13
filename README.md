## Projeto Invite-me

## Descrição
O objetivo do projeto Invite-Me é desenvolver um sistema que facilite o gerenciamento de convidados em eventos e festas, permitindo a recepção e verificação eficiente de convidados.

## Estrutura do Projeto

```plaintext
src
 ├── app
 │   ├── create-account
 │   │   ├── create-account-routing.module.ts
 │   │   ├── create-account.module.ts
 │   │   ├── create-account.page.html
 │   │   ├── create-account.page.scss
 │   │   ├── create-account.page.spec.ts
 │   │   └── create-account.page.ts
 │   ├── explore-container
 │   │   ├── explore-container.component.html
 │   │   ├── explore-container.component.scss
 │   │   ├── explore-container.component.spec.ts
 │   │   └── explore-container.component.ts
 │   ├── login
 │   │   ├── login-routing.module.ts
 │   │   ├── login.module.ts
 │   │   ├── login.page.html
 │   │   ├── login.page.scss
 │   │   ├── login.page.spec.ts
 │   │   └── login.page.ts
 │   ├── maps
 │   │   ├── maps-routing.module.ts
 │   │   ├── maps.module.ts
 │   │   ├── maps.page.html
 │   │   ├── maps.page.scss
 │   │   ├── maps.page.spec.ts
 │   │   └── maps.page.ts
 │   ├── reset-password
 │   │   ├── reset-password-routing.module.ts
 │   │   ├── reset-password.module.ts
 │   │   ├── reset-password.page.html
 │   │   ├── reset-password.page.scss
 │   │   ├── reset-password.page.spec.ts
 │   │   └── reset-password.page.ts
 │   ├── services
 │   │   ├── auth.service.spec.ts
 │   │   └── auth.service.ts
 │   │   ├── maps.service.spec.ts
 │   │   └── maps.service.ts
 │   ├── tab1
 │   │   ├── tab1-routing.module.ts
 │   │   ├── tab1.module.ts
 │   │   ├── tab1.page.html
 │   │   ├── tab1.page.scss
 │   │   ├── tab1.page.spec.ts
 │   │   └── tab1.page.ts
 │   ├── tab3
 │   │   ├── tab3-routing.module.ts
 │   │   ├── tab3.module.ts
 │   │   ├── tab3.page.html
 │   │   ├── tab3.page.scss
 │   │   ├── tab3.page.spec.ts
 │   │   └── tab3.page.ts
 │   ├── tabs
 │   │   ├── tabs-routing.module.ts
 │   │   ├── tabs.module.ts
 │   │   ├── tabs.page.html
 │   │   ├── tabs.page.scss
 │   │   ├── tabs.page.spec.ts
 │   │   └── tabs.page.ts
 │   ├── app-routing.module.ts
 │   ├── app.component.html
 │   ├── app.component.scss
 │   ├── app.component.spec.ts
 │   ├── app.component.ts
 │   ├── app.module.ts
 ├── assets
 │   ├── icon
 │   │   └── favicon.png
 │   ├── img
 │   │   └── invite-me.png
 │   └── shapes.svg
 ├── environments
 │   ├── environment.prod.ts
 │   └── environment.ts
 ├── theme
 ├── environment.d.ts
 ├── global.scss
 ├── index.html
 ├── main.ts
 ├── polyfills.ts
 ├── test.ts
 └── zone-flags.ts
www
.browserslistrc
.editorconfig
.eslintrc.json
.gitignore
angular.json
capacitor.config.ts
ionic.config.json
karma.conf.js
package-lock.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (instalável via npm)

```bash
npm install -g @ionic/cli
```

## Instalação

1. **Clone o repositório**

   ```bash
   git clone <URL do seu repositório>
   cd <nome do seu projeto>
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configurações do ambiente**

   Certifique-se de configurar os arquivos de ambiente em `src/environments/environment.ts` e `src/environments/environment.prod.ts` com as credenciais apropriadas para seu projeto.

## Executando o Aplicativo

Para iniciar o servidor de desenvolvimento e abrir o aplicativo em um navegador, execute:

```bash
ionic serve
```

O aplicativo será aberto em `http://localhost:8100` por padrão.

## Estrutura de Páginas

- **Login**: Página de login do usuário.
- **Criação de Conta**: Permite que novos usuários se registrem.
- **Redefinição de Senha**: Página para redefinir a senha.
- **Mapas**: Integração com mapas para visualização de locais.

## Testes

Para executar os testes unitários, use o comando:

```bash
npm run test
```

Para executar testes end-to-end, use:

```bash
npm run e2e
```

```bash
// src/app/services/maps.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private apiKey = ''; // Sua chave da API
  private baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(private http: HttpClient) {}

  getGeocode(address: string): Observable<any> {
    const url = `${this.baseUrl}?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
    return this.http.get<any>(url); // Faz a requisição GET para a API
  }
}

```

## Licença
© `[Matheus Bourguignon]` e `[12/08/24]`Todos os direitos reservados.


