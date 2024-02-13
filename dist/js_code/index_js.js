const toggleToolsMenu = () => {
    console.log('hii')
    try {
        const menu = document.getElementById("tools-menu")
        if (menu.style.display === "block")
            menu.style.display = 'none';
        else
            menu.style.display = 'block';

    } catch (err) {
        console.error(err);
    }
}


const togglePxLoader = () => {

    const loader_ele = document.getElementById('pxloader');
    if (loader_ele.style.display === "flex") {
        //it is showing we need to hide it..
        document.body.style.overflow = "auto";
        loader_ele.style.display = "none"
    }
    else {
        //means its hidden we need to show it
        document.body.style.overflow = "hidden";
        loader_ele.style.display = "flex"
    }

}


