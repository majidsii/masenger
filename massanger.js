const drawer = document.getElementById("drawerMenu")
const contactMenu = document.getElementById("chat-container")


function drwerMenu () {
    drawer.addEventListener('click', e =>{
            if (contactMenu.display === "flex"){
                contactMenu.display = "hidden"
            }else
            if(drawer.display === "hidden"){
                drawer.display === "block"
                return
            }
    })
    }
