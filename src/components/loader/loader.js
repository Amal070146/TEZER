let loadingScreen = document.getElementById("loader");
    let mainWrapper = document.getElementById("main-wrapper");
    console.log(mainWrapper);

    function loader() {
      mainWrapper.style.display = "flex";
      loadingScreen.style.display = "none";
    }
    setTimeout(loader, 2000);