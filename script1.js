/* =========================
   REGISTER SYSTEM
========================= */

let currentStep = 0;


/* เลือกขั้นตอนทั้งหมด */

const steps = document.querySelectorAll(".step");


/* เปิดหน้าสมัครสมาชิก */

function showJourney() {

    const popup = document.getElementById("popup");

    popup.style.display = "block";

    currentStep = 0;

    steps.forEach(function(step) {

        step.classList.remove("active");

    });

    steps[0].classList.add("active");
}


/* ไปขั้นตอนถัดไป */

function nextStep() {

    /* ถ้ายังมีขั้นตอนถัดไป */

    if (currentStep < steps.length - 1) {

        steps[currentStep].classList.remove("active");

        currentStep++;

        steps[currentStep].classList.add("active");

    }

}


/* ปิดหน้าสมัครสมาชิก */

function closeJourney() {

    document.getElementById("popup").style.display = "none";

    steps.forEach(function(step) {

        step.classList.remove("active");

    });

    currentStep = 0;

}


/* =========================
   PRODUCT DETAIL
========================= */


/* ข้อมูลสินค้า */

const productData = {

    "Executive Black":
        "รองเท้าหนังสีดำ เหมาะกับชุดสูทและชุดทำงาน ให้ลุคสุภาพและเป็นมืออาชีพ",

    "Business Brown":
        "รองเท้าหนังสีน้ำตาล เหมาะสำหรับ Business Casual และการทำงานในชีวิตประจำวัน",

    "Comfort Walk":
        "รองเท้าผ้าใบเรียบ น้ำหนักเบา เหมาะสำหรับการเดินและใช้งานตลอดวัน",

    "Office Lady":
        "รองเท้าสำหรับสาวออฟฟิศ ดีไซน์สวย เรียบหรู และใส่สบาย",

    "Elegant Walk":
        "รองเท้าดีไซน์เรียบหรู เหมาะสำหรับการทำงานและการพบลูกค้า",

    "Daily Comfort":
        "รองเท้าสำหรับเดินทั้งวัน น้ำหนักเบาและสวมใส่สบาย"
};


/* เปิดรายละเอียดสินค้า */

function showProduct(productName) {

    const popup = document.getElementById("productPopup");

    const title = document.getElementById("productTitle");

    const description =
        document.getElementById("productDescription");


    title.textContent = productName;

    description.textContent =
        productData[productName] ||
        "รายละเอียดสินค้า";


    popup.style.display = "block";
}


/* ปิดรายละเอียดสินค้า */

function closeProduct() {

    document.getElementById("productPopup").style.display = "none";

}


/* =========================
   CLOSE POPUP WHEN CLICK OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const registerPopup =
        document.getElementById("popup");

    const productPopup =
        document.getElementById("productPopup");


    if (event.target === registerPopup) {

        closeJourney();

    }


    if (event.target === productPopup) {

        closeProduct();

    }

});