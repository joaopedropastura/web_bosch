function Carro(roda, motor, modelo){
    this.modelo = modelo
    this.motor = motor
    Object.defineProperty(this, 'roda',
    {
        enumerable : false,
        value : roda,
        writable : false,
    }
    )
}

function Bolo(nome, ovos, trigo, ingrediente)
{
    Object.defineProperties(this, {
        nome: {
            enumerable: true ,
            value : nome ,
            writable : false, 
            configurable : true
        },
        ovos: {
            enumerable: true ,
            value : ovos ,
            writable : false, 
            configurable : true
        },
        trigo: {
            enumerable: true ,
            value : trigo ,
            writable : false, 
            configurable : true
        },
        ingrediente: {
            enumerable: true ,
            value : ingrediente ,
            writable : false, 
            configurable : true
        },
        
    })
}


function camisa(preco, tamanho, cor){
    this.tamanho = tamanho
    this.cor = cor
    Object.defineProperty(this, 'preco',{
        enumerable : true,
        configurable : false,
        get: () => {
            return preco
        },
        set: (valor) => {
            if(typeof(valor) !==  'number'){
                throw new TypeError("valor invalido")
            }
            preco = valor
        }
    })
}





const carro1 = new Carro("aro 18", 3.8, "BMW M3")
const boloCenoura =  new Bolo("bolo de cenoura","4 ovos", "3 xicaras", "2 cenouras")
const flamengo = new camisa(299.99, 'GG', 'preta e vermelho')
camisa.preco = 'lapis'
console.log(flamengo)
console.log(Object.values(carro1))
console.log(Object.values(boloCenoura))