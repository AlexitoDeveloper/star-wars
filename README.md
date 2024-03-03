# Prueba técnica Frontend

---

En esta prueba se han realizado los siguientes puntos:

- Crear un proyecto React con Vite.
- Código realizado totalmente en TypeScript sin tipados any.
- Uso de componentes funcionales.
- Uso de [Zustand](https://zustand-demo.pmnd.rs/) como manegador de estado global.
- Uso de la API [Swapi](https://swapi.dev/).
- Testing mediante [Vitest](https://vitest.dev/).
- Listado de planetas con scroll infinito.
- Edición y borrado de planetas.
- Enrutado con [React Router](https://reactrouter.com/en/main)
- Uso de la librería [AntDesign](https://ant.design/) para componentes como Input, Button o Skeleton.

## Requisitos

- Tener instalado npm y Node.js (en mi caso: npm 9.8.1 y Node.js 18.18.1)

## Tecnologías

Para este proyecto, se ha utilizado las siguientes tecnologías:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Sass](https://sass-lang.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [AntDesign](https://ant.design/)

## Arrancar el proyecto

Para poder arrancar el proyecto, primero hay que instalar las dependencias. Para ello, nos situamos en la raiz del proyecto y ejecutamos:

```bash
npm install
```

Hecho esto, se autogenerará el node_modules (que contendrá las dependencias del package.json) y el package-lock.json.
Una vez instaladas las dependencias, para iniciar el proyecto ejecutamos:

```bash
npm run dev
```

Finalmente, abrimos el navegador con la URL especificada en la terminal para visualizar el proyecto.

Para ejecutar los tests:

```bash
npm run test
```
