# Prettier - Formateador de Código

Prettier es una herramienta de formateo de código que garantiza un estilo consistente en el código fuente mediante reglas predefinidas. Funciona con varios lenguajes y puede integrarse con editores, sistemas de control de versiones y herramientas de linter como ESLint.

---

##  Características
- Formatea automáticamente el código.
- Compatible con JavaScript, TypeScript, JSON, HTML, CSS, Markdown y más.
- Se integra con editores de texto como VS Code, WebStorm y Sublime Text.
- Evita debates sobre estilo de código en equipos.

---

##  Instalación
Para instalar Prettier en un proyecto, usa npm o yarn:

### Con npm:
```sh
npm install --save-dev prettier
```

### Con yarn:
```sh
yarn add --dev prettier
```

Para verificar la instalación:
```sh
npx prettier --version
```

---

## Configuración
Prettier permite personalizar su comportamiento mediante un archivo de configuración.

Crea un archivo `.prettierrc` en la raíz del proyecto y define tus reglas:

```json
{
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

O usa `.prettierrc.yaml`:
```yaml
singleQuote: true
semi: false
tabWidth: 2
trailingComma: es5
printWidth: 80
```

Si deseas ignorar archivos, crea `.prettierignore` y agrega rutas:
```txt
node_modules/
dist/
build/
```

---

## Uso

Para formatear archivos manualmente, usa:
```sh
npx prettier --write archivo.js
```

Para verificar el formato sin modificar archivos:
```sh
npx prettier --check archivo.js
```

Para formatear todos los archivos en el proyecto:
```sh
npx prettier --write .
```

---

## Integración con VS Code
Si usas Visual Studio Code, instala la extensión **Prettier - Code formatter** y configura el `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## ⚡ Integración con ESLint
Para evitar conflictos entre ESLint y Prettier, instala los siguientes paquetes:

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Configura `.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

---

## Comandos rápidos
| Comando | Descripción |
|---------|-------------|
| `npx prettier --write .` | Formatea todos los archivos del proyecto |
| `npx prettier --check .` | Verifica si los archivos cumplen con Prettier |
| `npx prettier --write archivo.js` | Formatea un archivo específico |
| `npm install --save-dev prettier` | Instala Prettier en el proyecto |
