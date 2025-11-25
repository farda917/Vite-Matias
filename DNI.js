/**
 * Valida un DNI español comprobando que el formato sea correcto
 * y que la letra se corresponda con el número.
 *
 * @param {string} dni El DNI a validar (e.g., "12345678A").
 * @returns {boolean} True si el DNI es válido, false en caso contrario.
 */
function validarDNI(dni) {
    // 1. Array de letras de control del DNI (índice = resto de la división por 23)
    const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

    // 2. Comprobar el formato: 8 dígitos y 1 letra (o 7 y 1 si empieza por 0, pero la expresión lo simplifica)
    // El patrón permite 8 dígitos seguidos de una letra, ignorando mayúsculas/minúsculas.
    const regex = /^(\d{8})([A-Z])$/i;

    // 3. Ejecutar la expresión regular en el DNI de entrada
    const match = dni.toUpperCase().match(regex);

    // Si no coincide con el formato, es inválido
    if (!match) {
        return false;
    }

    // 4. Extraer el número y la letra del DNI
    // match[1] es el grupo de los 8 dígitos, match[2] es la letra
    const numero = parseInt(match[1], 10);
    const letraIngresada = match[2];

    // 5. Calcular el resto de la división por 23
    const resto = numero % 23;

    // 6. Obtener la letra correcta usando el resto como índice
    const letraCorrecta = letrasDNI.charAt(resto);

    // 7. Comparar la letra ingresada con la letra correcta
    // Se usa la versión en mayúsculas para asegurar la comparación
    return letraIngresada === letraCorrecta;
}

// --- Ejemplos de uso ---
console.log(`DNI Válido (ejemplo): 12345678Z -> ${validarDNI("12345678Z")}`); // Debería ser true si ese DNI existe
console.log(`DNI Inválido (letra errónea): 12345678A -> ${validarDNI("12345678A")}`); // Debería ser false
console.log(`DNI Inválido (formato): 1234567 -> ${validarDNI("1234567")}`); // Debería ser false

// Puedes probar con tu DNI real aquí
// console.log(`Mi DNI: XXXXXXXXXX -> ${validarDNI("XXXXXXXXX")}`);