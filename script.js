/*----------Address-form--------*/
{
    const addressbtn = document.querySelector('#address-form');
    const addressclose = document.querySelector('#address-close');
    addressbtn.addEventListener("click", function() {
        document.querySelector('.address-form').style.display = "flex";
    })
    addressclose.addEventListener("click", function() {
        document.querySelector(".address-form").style.display = "none";
    })

    /*---------------Slider---------------*/
    const rightbtn = document.querySelector('.fa-chevron-right');
    const leftbtn = document.querySelector('.fa-chevron-left');
    let index = 0;
    const imgnumber = document.querySelectorAll('.slider-content-left-top img');

    rightbtn.addEventListener("click", function() {
        index = index + 1;
        if (index > imgnumber.length - 1) {
            index = 0;
        }
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    })

    leftbtn.addEventListener("click", function() {
        index = index - 1;
        if (index < 0) {
            index = imgnumber.length - 1;
        }
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    })

    /*-------------Slider1----------------*/
    const imgcntslide = document.querySelectorAll('.slider-content-left-bottom li');

    imgcntslide.forEach(function(imgName, index) {
        imgName.addEventListener("click", function() {
            document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
            imgName.classList.add("active");


        })
    })

    function removeActive() {
        let imgActive = document.querySelector('.active');
        imgActive.classList.remove("active");

    }
    /*---------------slider auto----------------*/
    function imgAuto() {
        index = index + 1;
        if (index > imgnumber.length - 1) {
            index = 0;
        }
        removeActive();
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
        imgcntslide[index].classList.add("active")



    }
    setInterval(imgAuto, 2000);
}
/*--------------Category  Laptophoctap---------------*/