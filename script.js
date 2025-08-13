document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("card-container");

    for (let i = 0; i < 100; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <input type="text" placeholder="Texto frontal" value="\${localStorage.getItem('frontText'+i) || ''}" oninput="localStorage.setItem('frontText'+${i}, this.value)">
                    <input type="text" placeholder="URL imagen" value="\${localStorage.getItem('frontImg'+i) || ''}" oninput="localStorage.setItem('frontImg'+${i}, this.value); this.nextElementSibling.src=this.value">
                    <img src="\${localStorage.getItem('frontImg'+i) || ''}" alt="">
                </div>
                <div class="card-back">
                    <input type="text" placeholder="Texto reverso" value="\${localStorage.getItem('backText'+i) || ''}" oninput="localStorage.setItem('backText'+${i}, this.value)">
                </div>
            </div>
        `;
        card.addEventListener("click", (e) => {
            if (!e.target.matches("input")) {
                card.classList.toggle("flipped");
            }
        });
        container.appendChild(card);
    }
});