# Platzi Store React Redux Jest
Project using react, redux and testing with jest.

### Instalación de Jest
`$ npm install -D jest`

### `$ jest --coverage` Genera un reporte y una carpeta llamada coverage.

### `$ jest --watch` comando que funciona como obsrvador cuando actualicen las pruebas.

### Test String
const text = "Hola Mundo";
test("Debe contener Mundo", () => {
  expect(text.toMatch(/Mundo/));
});

### Test Arrays
const frameworks = ["React", "Vue", "Angular", "Svelte"];

### Test arrays
test("It should has React", () => {
  expect(frameworks).toContain("React");
});

### Test numbers
test("It should be greater than", () => {
  expect(10).toBeGreaterThan(9);
});

### Test Booleans
test("It should be true", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

### Test callbacks
const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

test("The callback should return a reversed word", () => {
  reverseString("Platzi", str => {
    expect(str).toBe("iztalP");
  });
});

### test promesas .then
const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) reject(Error("Error"));

    resolve(str.split("").reverse().join(""));
  });
};

test('Probar una promesa', ()=> {
  return reverseString2('hola')
    .then(string => {
      expect(string).toBe('aloh')
    })
})

### test promesas async/await
test('Probar async/await', async ()=>{
  const string = await reverseString2('hola');
  expect(string).toBe('aloh')
})

### Correr algo antes o despues de cada prueba o todas las pruebas.
afterEach( () => console.log('Despues de cada prueba') );
afterAll( () => console.log('Despues de todas las pruebas') );
beforeEach( () => console.log('antes de cada prueba') );
beforeAll( () => console.log('antes de todas las pruebas') );

##### describe() nos permite describir una serie de pruebas en el projecto.

#### Enzyme
Es una librería creada por Airbnb para facilitar el test a componentes en React.

* enzyme-adapter-react-16: Es un adaptador para la version de React que estemos utilizando.

* import {mount} from 'enzyme' : Permite trabajar con el elemento, poderlo montar sobre el DOM completo y poder trabajar sobre la búsqueda de algún elemento o trabajar con cada uno
de esos items que pueda tener.

* Jest no sabe trabajar con estilos, por lo cualse necesita un "Mock".

* Mocks: Son funciones que simulan acciones que debería hacer nuestra app.

* styleMock : nos va a permitir retornar un valor vacío para cuando estemos trabajando con estos archivos de estilos.

##### Para trabajar correctamente con la configuración de jest y con los Mocks, hacemos la siguiente configuración en el archivo "package.json"

"jest": {
  "verbose": true,    ---Para poder ver la descripción de las pruebas
    "setupFilesAfterEnv": [        -- Configuración del archivo de configuración.
      "<rootDir>/src/__test__/setupTest.js"
    ],
    "moduleNameMapper": {
      "\\.(styl|css)$": "<rootDir>/src/__mocks__/styleMock.js"
    }
  }

Con esto jest no le da importancia a los estilos porque no los necesita para probar la app.

* import {mount, shallow} from 'enzyme' : shallow nos permite traer elementos y probarlos 
coo una unidad. En tal caso solo se necesita algo particular de un componente y no necesita toda la estructura ni los elementos de donde este mismo.

* ¿Cuándo utilizar mount y cuándo utilizar shallow?

- mount --> Cuando necesitas el DOM
- shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM

* Para trabajar con Redux necesitamos un Mock del provider y su estructura. Este Mock debe de incluir los elementos que son similares a la estructura del index.

* jest.fn() : jest no provee un método para poder simular una función para no llamar a la función real del componente.

*Snapshot: Nos permiten probar la UI y establecer una regla cuando nosotros estamos teniendo componentes que no cambian gradualmente o que no tengan lógica.
Para poder utilizar los snapshots debemos de convertir nuestro componente a un objeto json.
Recurso a instalar -> `$ npm install -D react-test-renderer `
import { create } from react-test-renderer;

* Al hacer un cambio en el componente y el snapshot ya fue creado después de las pruebas, se deben de actualizar los snapshots creados con el siguiente comando:
`$ jest --updateSnapshot`

* Probar peticiones fetch necesitamos "jest-fetch-mock"
`$ npm install jest-fetch-mock -E -D`

Y en el archivo setupTest.js agregamos
` global.fetch = require('jest-fetch-mock'); `
Esto nos permite es capturar esas peticiones y poderlas capturar sin necesidad de utilizar el fetch de normalmente utilizamos en el navegador.




