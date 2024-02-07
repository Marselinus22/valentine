const answers = [
    "Yakin?",
    "Yakin beneran???",
    "Bener bener yakin????",
    "Gamau mikir ulang?",
    "Yakali ga dipikir ulang?",
    "Dingin banget siii?",
    "Gamau diomongin berdua?",
    "Aku gabakal nanyain ini lagi lhoo",
    "Skrng, aku sakit ati!",
    "Jahad banget siii",
    "Kok kamu gituu?",
    "Kasi aku kesempatann",
    "Stop pencet ni tombol",
    "Ok, kita ngulang lagi"
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) banner.src = "./public/images/no.gif";
    clicks++;
    // Ganti banner source secara acak
    const bannerSources = ["./public/images/cat-2.jpg", "./public/images/cat-3.jpg", "./public/images/cat-4.jpg", "./public/images/cat-5.jpg", "./public/images/cat-6.jpg", "./public/images/cat-7.jpg", "./public/images/cat-8.jpg", "./public/images/dog-1.gif", "./public/images/dog-2.jpg", "./public/images/dog-3.jpg", "./public/images/dog-4.jpg", "./public/images/dog-5.jpg", "./public/images/dog-6.jpg"];
    const randomBannerIndex = Math.floor(Math.random() * bannerSources.length);
    banner.src = bannerSources[randomBannerIndex];
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
        questionDiv.style.display = "none";
        messageDiv.style.display = "block";
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./public/images/yes.gif";
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});