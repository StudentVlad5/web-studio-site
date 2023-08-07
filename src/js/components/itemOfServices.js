// import img
// import sprite from "../../images/sprite.svg";

const data = [
  {
    itemsId: "01",
    terms: 4,
    name: "Multi-page website",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    item_1: "Design only:",
    cost_1: "300",
    item_2: "Design+Dev:",
    cost_2: "500",
  },
  {
    itemsId: "02",
    terms: 4,
    name: "Multi-page website",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    item_1: "Design only:",
    cost_1: "300",
    item_2: "Design+Dev:",
    cost_2: "500",
  },
  {
    itemsId: "03",
    terms: 4,
    name: "Multi-page website",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    item_1: "Design only:",
    cost_1: "300",
    item_2: "Design+Dev:",
    cost_2: "500",
  },
  {
    itemsId: "04",
    terms: 4,
    name: "Multi-page website",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    item_1: "Design only:",
    cost_1: "300",
    item_2: "Design+Dev:",
    cost_2: "500",
  },
];

function addServices() {
  const wrap = document.querySelector(".services__list");

  let listOfServices = "";
  data.map((item) => {
    listOfServices += `
      <li id="anchor_${item.itemsId}"
        class="services__item-container services__item-container_${
          item.itemsId
        }"
      >
      <div>
        <div class="services__terms">
          <spin>Terms ${item.terms} days+</spin>
          <spin>${item.itemsId} / ${
      data.length > 9 ? data.length : "0" + data.length
    }</spin>
        </div>
          <p class="services__name">${item.name}</p>
          <p class="services__description">${item.description}</p>
        <div class="services__price">
            <div>
              <p class="services__item">${item.item_1}</p>
              <p>from ${item.cost_1}$</p>
            </div>
            <div>
              <p class="services__item">${item.item_2}</p>
              <p>from ${item.cost_2}$</p>
            </div>
          </div>
      </div>
      </li>
  `;
  });

  wrap.innerHTML = listOfServices;
}

addServices();
