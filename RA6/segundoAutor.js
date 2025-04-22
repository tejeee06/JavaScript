const data = {
    "biblioteca": {
        "nombre": "Biblioteca Central",
        "libros": [
          { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "anio": 1967 },
          { "titulo": "1984", "autor": "George Orwell", "anio": 1949 },
          { "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "anio": 1605 }
        ]
    }
    
}

const secondAutor = data.biblioteca.libros[1].autor;
console.log(secondAutor);