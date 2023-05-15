const cont = document.querySelector("#a")
        const cont2 = document.querySelector("#b")
        const setacima = document.querySelector("#setacima")
        const setabaixo = document.querySelector("#setabaixo")
        const fechar = document.querySelector(".fechar")
        const navbar = document.querySelector(".navbar")
        const menuHambu = document.querySelector(".m-menu")
        const over = document.querySelector(".overlay")
        cont2.style.display = "none"

        fechar.addEventListener("click", function(){
            navbar.style.width = "0%"
            over.style.display = "none"
            document.body.style.overflow = "auto"
            navbar.classList.toggle("menuaberto")
            
        })
        
        menuHambu.addEventListener("click", function(){
            navbar.style.width = "70%"
            over.style.display = "block"
            document.body.style.overflow = "hidden"
            navbar.classList.toggle("menuaberto")
            
        })
        over.addEventListener("click", function(){
            navbar.style.width = "0%"
            over.style.display = "none"
            document.body.style.overflow = "auto"
            navbar.classList.toggle("menuaberto")
        })


        cont.addEventListener("click", function(){
            if(cont2.style.display == "none"){
                cont2.style.display="block"
                setacima.classList.remove("invisivel")
                setabaixo.classList.add("invisivel")
                cont.style.backgroundColor = "rgb(232, 229, 229)"
                cont.style.textDecoration= "underline"
                

            }else{
                cont2.style.display = "none"
                setacima.classList.add("invisivel")
                setabaixo.classList.remove("invisivel")
                cont.style.backgroundColor = "rgb(232, 229, 229)"
                cont.style.textDecoration= "underline"
    

            }
        })
        //se eu clicar em qualquer elemento do body q n seja o cont ele tira op underline da sec e coloca o background em white
        document.body.addEventListener("click",function(e){
                if(e.target != cont){
                        cont.style.backgroundColor = "white"
                        cont.style.textDecoration = "none"
                }
        })
        const cont3 = document.querySelector("#c")
        const cont4 = document.querySelector("#d")
        const setacima1 = document.querySelector("#setacimaa")
        const setabaixo2 = document.querySelector("#setabaixoo")
        cont4.style.display = "none"
        cont3.addEventListener("click", function(){
            if(cont4.style.display == "none"){
                cont4.style.display="block"
                setacima1.classList.remove("invisivel")
                setabaixo2.classList.add("invisivel")
                cont3.style.backgroundColor = "rgb(232, 229, 229)"
                cont3.style.textDecoration= "underline"

            }else{
                cont4.style.display = "none"
                setacima1.classList.add("invisivel")
                setabaixo2.classList.remove("invisivel")
                cont3.style.backgroundColor = "rgb(232, 229, 229)"
                cont3.style.textDecoration= "underline"

            }
        })
        document.body.addEventListener("click",function(e){
            if(e.target != cont3){
                cont3.style.textDecoration = "none"
                cont3.style.backgroundColor = "white"
            }
        })

        const cont5 = document.querySelector("#e")
        const cont6 = document.querySelector("#f")
        const setacima3 = document.querySelector("#setacimaaa")
        const setabaixo4 = document.querySelector("#setabaixooo")
        cont6.style.display = "none"
        cont5.addEventListener("click",function(){
            if(cont6.style.display == "none"){
                cont6.style.display = "block"
                setacima3.classList.remove("invisivel")
                setabaixo4.classList.add("invisivel")
                cont5.style.backgroundColor = "rgb(232, 229, 229)"
                cont5.style.textDecoration= "underline"
            }
            else{
                cont6.style.display = "none"
                setabaixo4.classList.remove("invisivel")
                setacima3.classList.add("invisivel")
                cont5.style.backgroundColor = "rgb(232, 229, 229)"
                cont5.style.textDecoration= "underline"
            }
        })
        document.body.addEventListener("click", function(e){
            if(e.target != cont5){
                cont5.style.backgroundColor = "white"
                cont5.style.textDecoration = "none"
            }
        })

        const cont7 = document.querySelector("#g")
        const cont8 = document.querySelector("#h")
        const setacima5 = document.querySelector("#setacimaaaa")
        const setabaixo6 = document.querySelector("#setabaixoooo")
        cont8.style.display = "none"
        cont7.addEventListener("click", function(){
            if(cont8.style.display == "none"){
                cont8.style.display = "block"
                setabaixo6.classList.add("invisivel")
                setacima5.classList.remove("invisivel")
                cont7.style.backgroundColor = "rgb(232, 229, 229)"
                cont7.style.textDecoration = "underline"
            }else{
                cont8.style.display = "none"
                setabaixo6.classList.remove("invisivel")
                setacima5.classList.add("invisivel")
                cont7.style.backgroundColor = "rgb(232, 229, 229)"
                cont7.style.textDecoration = "underline"
            }
        })
        document.body.addEventListener("click", function(e){
            if(e.target != cont7){
                cont7.style.backgroundColor = "white"
                cont7.style.textDecoration = "none"
            }
        })
