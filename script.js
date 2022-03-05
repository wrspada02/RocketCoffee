
    const buttonMobile = document.querySelector('[data-mobileButton]');
    const menuMobile = document.querySelector('[data-menuMobile]');
    const mainContent = document.querySelector('[data-mainContent]');

    let parametrer = false; 

    const abrirMenuMobile = () => {
        buttonMobile.src = "./assets/menu-buguer-close.svg";
        menuMobile.style.display = "block";
        mainContent.style.display = "none";
    }

    const fecharMenuMobile = () => {
        buttonMobile.src = "./assets/menu-buguer-open.svg";
        menuMobile.style.display = "none";
        mainContent.style.display = "initial";
    }

    const menuSettings = () => {
        if(parametrer == false){
            abrirMenuMobile();
            parametrer = true;
        }else{
            fecharMenuMobile();
            parametrer = false;
        }
    }

    buttonMobile.addEventListener('click', menuSettings);