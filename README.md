# 📚 API REST: Clean Architecture con Node.js y Express

## 📌 Descripción
Este proyecto es una API REST desarrollada en **Node.js** con **Express**, siguiendo el principio de **Clean Architecture**. Implementa la gestión de libros y autores mediante una estructura modular y escalable.

## 🏗️ Estructura del Proyecto
```
/clean-architecture
│── /app                     # 📌 Carpeta principal de la aplicación
│   │── /domain              # 📌 Entidades principales
│   │   ├── book.js
│   │   ├── author.js
│   │── /use_cases           # 📌 Casos de uso (Reglas de negocio)
│   │   ├── bookUseCases.js
│   │   ├── authorUseCases.js
│   │── /infrastructure      # 📌 Infraestructura (Persistencia, Controladores, Rutas, etc.)
│   │   │── /database        # 📂 Simulación de base de datos en memoria
│   │   │   ├── db.js
│   │   │── /repositories    # 📂 Repositorios de datos
│   │   │   ├── bookRepository.js
│   │   │   ├── authorRepository.js
│   │   │── /adapters        # 📂 Adaptadores para transformación de datos
│   │   │   ├── bookAdapter.js
│   │   │   ├── authorAdapter.js
│   │   │── /validators      # 📂 Validaciones de datos
│   │   │   ├── bookValidator.js
│   │   │   ├── authorValidator.js
│   │   │── /controllers     # 📂 Controladores para manejar las peticiones HTTP
│   │   │   ├── bookController.js
│   │   │   ├── authorController.js
│   │   │── /routes          # 📂 Definición de rutas de la API
│   │   │   ├── bookRoutes.js
│   │   │   ├── authorRoutes.js
│── package.json
│── server.js                # 📌 Servidor Express principal
```

## 🚀 Instalación y Uso
### 1️⃣ Requisitos
- Node.js instalado (versión recomendada: **18+**)
- NPM o Yarn

### 2️⃣ Instalación
```bash
npm install
```

### 3️⃣ Ejecutar el servidor
```bash
node server.js
```
La API correrá en **http://localhost:3000/api**

## 🛠️ Endpoints

### 📘 Libros (Books)
| Método | Endpoint       | Descripción                  |
|--------|--------------|------------------------------|
| GET    | /api/books   | Obtener todos los libros     |
| POST   | /api/books   | Crear un nuevo libro        |

### ✍️ Autores (Authors)
| Método | Endpoint        | Descripción                  |
|--------|---------------|------------------------------|
| GET    | /api/authors  | Obtener todos los autores   |
| POST   | /api/authors  | Crear un nuevo autor        |

## 📌 Validaciones Implementadas
- **Libros**: Título mínimo 3 caracteres, género requerido, año de publicación válido, páginas mayores a 0.
- **Autores**: Nombre mínimo 3 caracteres, fecha de nacimiento y nacionalidad requeridas.

## 📖 Conclusión
Este proyecto demuestra cómo estructurar una API REST con **Clean Architecture** en **Node.js y Express**, garantizando escalabilidad, modularidad y facilidad de mantenimiento. 🚀
