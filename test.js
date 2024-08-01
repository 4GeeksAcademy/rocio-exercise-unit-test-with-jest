// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
//9 The first test fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
//11 The second test fromDollarToYen
test("One dollar should be 146.26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(2);

    // Si 1 dollar son 146.26 yens, entonces 2 euros debe ser (2* 146.26 yens)
    const expected2 = 2 * 146.26;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(2)).toBe(292.52); // 1 dollar son 146.26 yens, entonces 2 euros debe ser (2* 146.26 yens)
})
//11 The third test fromYenToPound
test("One yen should be 0.0056 ponds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(2);

    // Si 1 yen son 0.0055 ponds, entonces 2 yens debe ser (2 * 0.00556)
    const expected2 = 2 * 0.0055;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(2)).toBe(0.0112); // 1 yen son 0.00556 ponds, entonces 2 yens debe ser (2 * 0.00556)
})