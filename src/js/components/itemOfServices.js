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
        class="services__client-container services__client-container_${
          item.itemsId
        }"
      >
      <div>
          <p>Terms ${item.terms} days+</p>
          <p>${item.itemsId} / ${
      data.length > 9 ? data.length : "0" + data.length
    }</p>
          <p>${item.name}</p>
          <p>${item.description}</p>
          <p>${item.item_1}</p>
          <p>${item.cost_1}</p>
          <p>${item.item_2}</p>
          <p>${item.cost_2}</p>
      </div>
      </li>
  `;
  });

  wrap.innerHTML = listOfServices;
}

addServices();
