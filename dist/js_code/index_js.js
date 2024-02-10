const toggleToolsMenu = () => {
    try {
        const menu = document.getElementById("tools-menu")
        if (menu.style.display === "none")
            menu.style.display = 'block';
        else
            menu.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
}

const togglePxLoader = () => {
    try {
        const loader_ele = document.getElementById('pxloader');
        if (loader_ele.style.display === "none") {
            //means its hidden we need to show it
            document.body.style.overflow = "hidden";
            loader_ele.style.display = "flex"
        }
        else {
            //it is showing we need to hide it..
            document.body.style.overflow = "auto";
            loader_ele.style.display = "none"
        }
    } catch (err) {
        console.error(err);
    }
}
