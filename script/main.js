function Navigation(burgermenu, closemenu, navlist) {
    this.burgermenu=burgermenu;
    this.closemenu=closemenu;
    this.navlist=navlist;
}
window.addEventListener("load",function(){
    let navbar = document.getElementsByClassName('navbar')[0]
    let menuburger = navbar.getElementsByClassName('menu-burger')[0]
    let navlist = navbar.getElementsByClassName('navlist')[0]
    let closemenu = navlist.getElementsByClassName('closenavlist')[0]
    
    let navigationbar = new Navigation(menuburger,closemenu,navlist)
    
    navigationbar.burgermenu.addEventListener('click', function () {
        navigationbar.navlist.style.width = '100%'
    })
    navigationbar.closemenu.addEventListener('click', function () {
        navigationbar.navlist.style.width = '0%'
    })
})