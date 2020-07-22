
let personas = function (x){
        arr = []
        for (let i = 0; i< x; i++){
                let sex = Math.floor(Math.random()*(2-1+1)+1)   
                let nombre = []
                if (sex == 1){nombre = ['ANTONIO ','JOSE ','FRANCISCO ','JUAN ','MANUEL ','PEDRO ','JESUS ','ANGEL ','MIGUEL ','JAVIER ','JOSE ANTONIO ','DAVID ','CARLOS ','JOSE LUIS ','ALEJANDRO ','MIGUEL ANGEL ','FRANCISCO JAVIER ','RAFAEL ','DANIEL ','JUAN JOSE ','LUIS ','PABLO ','JUAN ANTONIO ','JOAQUIN ','SERGIO ','FERNANDO ','JUAN CARLOS ','ANDRES ','JOSE MANUEL ','JOSE MARIA ','RAMON ','RAUL ','ALBERTO ','ENRIQUE ','ALVARO ','VICENTE ','EMILIO ','FRANCISCO JOSE ','DIEGO ','JULIAN ','JORGE ','ALFONSO ','ADRIAN ','RUBEN ','SANTIAGO ','IVAN ','JUAN MANUEL ','PASCUAL ','JOSE MIGUEL ','MARIO ']}
                else
                    nombre = ['MARIA ','MARIA CARMEN ','JOSEFA ','ISABEL ','MARIA DOLORES ','CARMEN ','FRANCISCA ','MARIA PILAR ','DOLORES ','MARIA JOSE ','ANTONIA ','ANA ','MARIA ISABEL ','MARIA ANGELES ','PILAR ','ANA MARIA ','LUCIA ','CRISTINA ','LAURA ','ENCARNACION ','JUANA ','MARIA TERESA ','ROSARIO ','ELENA ','MARTA ','MANUELA ','ROSA MARIA ','MARIA LLANOS ','MARIA JOSEFA ','RAQUEL ','ANGELES ','CONCEPCION ','MERCEDES ','IRENE ','TERESA ','BEATRIZ ','PAULA ','ANGELA ','JULIA ','ANA BELEN ','ROCIO ','AMPARO ','ALICIA ','CONSUELO ','ROSA ','ASCENSION ','ANDREA ','MARIA ROSARIO ','MARIA JESUS ','MARIA LUISA ']
                let largo = (nombre.length)-1
                let name = Math.floor(Math.random()*largo)
                let apellido = ['GARCIA ','MARTINEZ ','LOPEZ ','SANCHEZ ','GONZALEZ ','GOMEZ ','FERNANDEZ ','MORENO ','JIMENEZ ','PEREZ ','RODRIGUEZ ','NAVARRO ','RUIZ ','DIAZ ','SERRANO ','HERNANDEZ ','MUÑOZ ','SAEZ ','ROMERO ','RUBIO ','ALFARO ','MOLINA ','LOZANO ','CASTILLO ','PICAZO ','ORTEGA ','MORCILLO ','CANO ','MARIN ','CUENCA ','GARRIDO ','TORRES ','CORCOLES ','GIL ','ORTIZ ','CALERO ','VALERO ','CEBRIAN ','RODENAS ','ALARCON ','BLAZQUEZ ','NUÑEZ ','PARDO ','MOYA ','TEBAR ','REQUENA ','ARENAS ','BALLESTEROS ','COLLADO ','RAMIREZ ']    
                let largo2 = (apellido.length)-1
                let ape = Math.floor(Math.random()*largo2)
                let rut = Math.floor(Math.random()*19000000) + 10000000 
                let num1= rut.toString()[7]*2  
                let num2= rut.toString()[6]*3
                let num3=rut.toString()[5]*4
                let num4=rut.toString()[4]*5
                let num5=rut.toString()[3]*6
                let num6=rut.toString()[2]*7
                let num7=rut.toString()[1]*2
                let num8=rut.toString()[0]*3
                let suma = num1+num2+num3+num4+num5+num6+num7+num8
                let resto=suma%11
                let resta= 11-resto
                let roll = "0-0"
                if (resta < 10){
                        roll = (rut) + "-" + (resta)}
                else if (resta==10){
                        roll = (rut) + "-k"}
                else if (resta==11){
                        roll = (rut) + "-0"}
                else
                        roll = "0-0"
                arr.push({ "nombre": nombre[name], "apellido": apellido[ape], "rut": roll })
            } 
     
        return arr
   }
module.exports = personas