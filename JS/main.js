window.addEventListener('scroll', () => {
  test()
})


let screen01 = screen.width > 400 && screen.width <= 500
let screen02 = screen.width > 500 && screen.width <= 800
let screen03 = screen.width > 800 && screen.width <= 1000
let screen04 = screen.width > 1000 


function test(){
  let logo = document.querySelector('#logoIMG')
  let link = document.querySelector('#link1')
  let link2 = document.querySelector('#link2')
  let link3 = document.querySelector('#link3 a')
  let link4 = document.querySelector('#link4 a')
  let div = document.querySelector("#team img")
  const line1 = document.querySelector("#line1")
  const line2= document.querySelector("#line2")
  const line3= document.querySelector("#line3")
  let testScroll = window.scrollY

  console.log("Window é:" + testScroll)
  console.log("div é:" + div.offsetTop)
  console.log(div.height)
  console.log(`Logo esta : ${logo.y}`)
 
  if(testScroll != 0 ){

    logo.style.top = "0"
    logo.style.left ='1rem'
    logo.style.transform = "translate(0,0)"
    screensize(logo)
    link.style ="color:white"
    link2.style ="color:white"
    link3.style ="color:white"
    link4.style ="color:white"
 
  }   
    else{
      logo.style.top = ""
      logo.style.left =''
      logo.style.width = ''
      logo.style.transform = ""
      link.style ="color:black"
      link2.style ="color:black"
      link3.style ="color:black"
      link4.style ="color:black"
      
    }

    if(div.y < -(div.height-80)){
      link.style ="color:black"
      link2.style ="color:black"
      link3.style ="color:black"
      link4.style ="color:black"
     
  
    }

  }

 const screensize = (logo)=> {
   if(screen01){
      logo.style.width = '20vw'
   }

   else if(screen02){logo.style.width = '20vw'}
   else if (screen03){logo.style.width = '15vw'}
   else if (screen04){logo.style.width = '10vw'}
   else if (screen.width< 400)
{logo.style.width = '40vw'} 
 }

  const aula01 = [
    Title="Primeira Guerra Mundial",

    parag = "Após a morte de Francisco Ferdinando, a Europa que já estava em tensão, entra oficialmente em Guerra, gerando um dos maiores e mais devastadores conflitos da história.",
    
    id = "aula01",

    style = "background: no-repeat url(../IMG/Aulas/o-grande-desfile.jpg) center/cover; color:#FFF"
  ]

  const aula02 = [
    Title="Crise de 1929",

    parag = "Após a primeira guerra mundial, e o sucesso dos EUA na mesma, o país entra em crise econômica, afetando não só a Europa, mas também o Brasil, fazendo o país encontrar uma saída.",

    id = "aula02",

    style = "background: no-repeat url(../IMG/Aulas/Charge\ de\ Joseph\ Keppler.jpg) center/cover; color: #000;"
  ]

  const aula03 = [
    Title="Era Vargas",
    
    parag = "Insatisfeito com a política do café-com-leite, Getúlio Vargas junto aos militares dão um golpe, quebrando esse ciclo de poder entre os estados de Minas Gerais e São Paulo.",
    
    id = "aula03",

    stye = "background: no-repeat url(../IMG/Aulas/Charge\ de\ Joseph\ Keppler.jpg) center/cover; color: #000;"
  ]

  const aula04 = [
    Title="Renascimento",
    
    parag = "O renascimento é um marco histórico onde houve uma revolução no modo de pensar da sociedade. O movimento resgata valores da cultura greco-romana e agora, ao invés de explicar tudo com a religião, a ciência começa a aparecer, e assim, o antropocentrismo toma conta da sociedade neste momento.",
    
    id = "aula04",

    style="background: no-repeat url(./IMG/Aulas/Renascimento.jpg)"
  ]

  function change(element){

    let title = document.querySelector('#titleFrame').textContent
    let Paragrafo = document.querySelector('#paraFrame').textContent
    let back = document.querySelector('#frame').style.background

    //console.log(back)

    
   let backupara
   let backupTitle
    
   if(element.id == "aula01"){

    backupara = aula01[1]
    backupTitle = aula01[0]
    //console.log("if funciona")

    aula01[0] = title
    aula01[1] = Paragrafo
    aula01[3] = back
   } else if(element.id == "aula02"){
    backupara = aula02[1]
    backupTitle = aula02[0]
    //console.log("if 2 funciona")

    aula02[0] = title
    aula02[1] = Paragrafo
    aula02[3] = back
   } else if(element.id == "aula03"){
    backupara = aula03[1]
    backupTitle = aula03[0]
    //console.log("if 3 funciona")

    aula03[0] = title
    aula03[1] = Paragrafo
    aula03[3] = back
   }


   document.querySelector('#titleFrame').textContent = backupTitle
   document.querySelector('#paraFrame').textContent = backupara
   document.querySelector('#frame').style.background = element.style.background
   element.style.background = back
   element.children[0].textContent = title

  // console.log(  document.querySelector('#frame').style)

  }

const menuMobile = ()=>{
  let logo = document.querySelector('#logoIMG')
  const menu = document.querySelector("#menuMobile")
  const line1 = document.querySelector("#line1")
  const line2= document.querySelector("#line2")
  const line3= document.querySelector("#line3")
  const body= document.querySelector("*")


if(menu.style.transform == "translateX(0px)"){
  line1.style.transform = "rotate(0)"
  line1.style.top = "0"
  line3.style.top = "0"
  line2.style.transform = ""
  line3.style.transform = "rotate(0)"
  menu.style.transform = "translateX(100%)"
  body.style.overflow = ""
  test()
}
else{
  line1.style.transform = "rotate(45deg)"
  line1.style.top = "0.5rem"
  line3.style.top = "-0.9rem"
  line2.style.transform = "translateX(150%)"
  line3.style.transform = "rotate(-45deg)"
  menu.style.transform = "translateX(0px)"
logo.style.top = "0"
  logo.style.left ='1rem'
  logo.style.transform = "translate(0,0)"
  body.style.overflow = "hidden"
  screensize(logo)
  line1.style.background = "black"
      line2.style.background = "black"
      line3.style.background = "black"
}

}


const dropItemMenu = (element) => {

  const drop1 = document.querySelector('#drop01Mobile')
  const drop2 = document.querySelector('#dropMobile')

  if(element.id == "link3"){   
    drop2.style.display="none"
    displayChange(drop1)
  }
  else if(element.id == "link4"){  
    drop1.style.display = "none"
    displayChange(drop2)
  }

}

const displayChange = (element)=>{

  if(element.style.display == "block"){
    element.style.display = "none"
  }
  else{
    element.style.display = "block"

  }


}



