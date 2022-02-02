let inps = document.querySelectorAll('input')
let title = document.getElementById('title')
let but = document.getElementById('but')
let qu =[
    {
        name : 'how old r u',
        a:22,
        b:23,
        c:24,
        d:39,
        cor:'c'
    },
    {
        name : 'how old r cube villy',
        a:22,
        b:23,
        c:24,
        d:88,
        cor:'d'
    },
    {
        name : 'how old r cube villyyyy',
        a:22,
        b:23,
        c:24,
        d:88,
        cor:'a'
    },
    {
        name : 'how old r cube villyyyyqq',
        a:22,
        b:23,
        c:24,
        d:88,
        cor:'b'
    },


]
let cur = 0
let res = 0
title.innerHTML = qu[cur].name
inps[0].nextElementSibling.innerHTML = qu[cur].a
inps[1].nextElementSibling.innerHTML = qu[cur].b
inps[2].nextElementSibling.innerHTML = qu[cur].c
inps[3].nextElementSibling.innerHTML = qu[cur].d





but.addEventListener('click',function(){
    
    inps.forEach((e)=>{
        if(e.checked){
            if(cur == qu.length-1){
                let p = document.createElement('p')
                document.body.appendChild(p)
                let te = document.createTextNode(`ur result is ${res}/${qu.length}`)    
                p.appendChild(te)   
                 }
                else{


                if(e.id == qu[cur].cor){
                    res++
                }else{
                    
                }
        
        
                cur++
                    
                    title.innerHTML = qu[cur].name
                inps[0].nextElementSibling.innerHTML = qu[cur].a
                inps[1].nextElementSibling.innerHTML = qu[cur].b
                inps[2].nextElementSibling.innerHTML = qu[cur].c
                inps[3].nextElementSibling.innerHTML = qu[cur].d


            }
        

   
        }
        

        let prev = document.getElementById('prev')
    prev.addEventListener('click',function(){
    
    cur--
    title.innerHTML = qu[cur].name
    inps[0].nextElementSibling.innerHTML = qu[cur].a
    inps[1].nextElementSibling.innerHTML = qu[cur].b
    inps[2].nextElementSibling.innerHTML = qu[cur].c
    inps[3].nextElementSibling.innerHTML = qu[cur].d

})


    })
    
    


})

