const toggleToolsMenu = () => {
    console.log("hleloo")
    try{
        const menu = document.getElementById("tools-menu")
        if(menu.style.display === "none")
            menu.style.display = 'block';
        else
            menu.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
}