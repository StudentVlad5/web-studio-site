// import img
import sprite from "../../images/sprite.svg";

import img_1 from "../../images/clients/client_1.jpg";
import img_2 from "../../images/clients/client_2.jpg";
import img_3 from "../../images/clients/client_3.jpg";
import img_4 from "../../images/clients/client_1.jpg";
import img_5 from "../../images/clients/client_2.jpg";
import img_6 from "../../images/clients/client_3.jpg";

const data = [
  {
    clientId: 1,
    clientImg: img_1,
    clientRewie: "Voicy_Allahu_Akbar_BANG.mp3",
    clientName: "Tatyana",
    clientCompany: "ARMOR LLC",
    clientTitle: "Tatiana's review",
    dataAos: "zoom-out",
    offset: "0",
    delay: "300",
    easing: "ease-in-sine",
    time: "0:10",
    anchor: "anchor_1",
    duration: "2000",
  },
  {
    clientId: 2,
    clientImg: img_2,
    clientRewie: "/src/mp3/Voicy_And we say bye bye.mp3",
    clientName: "Ivan",
    clientCompany: "Ukraine LTD",
    clientTitle: "Ivan's review",
    dataAos: "zoom-out",
    offset: "0",
    delay: "500",
    easing: "ease-out-cubic",
    time: "0:07",
    anchor: "anchor_2",
    duration: "2000",
  },
  {
    clientId: 3,
    clientImg: img_3,
    clientRewie: "/src/mp3/Voicy_Do not walk away from your queen.mp3",
    clientName: "Sonya",
    clientCompany: "Bayractar System LLC",
    clientTitle: "Sonya's review",
    dataAos: "zoom-in",
    offset: "0",
    delay: "1500",
    easing: "ease-in-sine",
    time: "0:06",
    anchor: ".cases-client-container_2",
    duration: "2000",
  },
  {
    clientId: 4,
    clientImg: img_4,
    clientRewie: "/src/mp3/Voicy_Kanye West Hated.mp3",
    clientName: "Sara",
    clientCompany: "Homekeeper",
    clientTitle: "Sara's review",
    dataAos: "zoom-out",
    offset: "0",
    delay: "2500",
    easing: "ease-in-back",
    time: "0:05",
    anchor: ".cases-client-container_2",
    duration: "2000",
  },
  {
    clientId: 5,
    clientImg: img_5,
    clientRewie: "/src/mp3/Voicy_Nothing is impossible!.mp3",
    clientName: "Jon",
    clientCompany: "Green Yard LCC",
    clientTitle: "Jon's review",
    dataAos: "zoom-out",
    offset: "0",
    delay: "5000",
    easing: "ease-in-back",
    time: "0:05",
    anchor: ".cases-client-container_3",
    duration: "2000",
  },
  {
    clientId: 6,
    clientImg: img_6,
    clientRewie: "/src/mp3/Voicy_WHAT ARE YOU DOING IN MY SWAMP.mp3",
    clientName: "Inga",
    clientCompany: "Rozetka LTD",
    clientTitle: "Inga's review",
    dataAos: "zoom-out",
    offset: "0",
    delay: "6000",
    easing: "ease-in-back",
    time: "0:07",
    anchor: ".cases-client-container_3",
    duration: "2000",
  },
];

function addClientsRewiers() {
  const wrap = document.querySelector(".testimonials-listOfClients");
  let listOfRewiers = "";
  data.map((item) => {
    listOfRewiers += `
      <li id="anchor_${item.clientId}"
        class="cases-client-container cases-client-container_${item.clientId}"
        data-aos=${item.dataAos}
        data-aos-offset=${item.offset}
        data-aos-delay=${item.delay}
        data-aos-easing=${item.easing}
        data-aos-anchor=${item.anchor}
        data-aos-duration=${item.duration}
      >
        <div class="cases-client--box">
          <div class="cases-client-wrap">
            <img
              class="cases-client-img"
              src=${item.clientImg}
              alt="client number ${item.clientId}"
            />
            <div class="cases-client-data">
              <p>${item.clientName}</p>
              <p>${item.clientCompany}</p>
            </div>
          </div>
          <div class="wrapper">
            <div
              class="music-container home__player player"
              id="music-container${item.clientId}"
            >
              <audio
              id="audio_${item.clientId}"
              class="audio audio_player audio_player${item.clientId}"
              preload="metadata"
              loop="true"
              ></audio>
              <div class="testimonials-navigation player__road">
                <div style="display: flex; flex-wrap: nowrap;">
                  <button
                    type="button"
                    id="play${item.clientId}"
                    class="action-btn action-btn-big player__btn"
                  >
                  <svg
                  class="player__icon fa-pause"
                  width="12"
                  height="12"
                >
                <use href="${sprite}#play"></use>
                  </button>
                  <button
                    type="button"
                    id="pause${item.clientId}"
                    class="action-btn action-btn-big is-hide player__btn"
                  >
                    <svg
                      class="player__icon fa-pause"
                      width="12"
                      height="12"
                    >
                      <use href="${sprite}#pause"></use>
                    </svg>
                  </button>
                  <p class="player__name">${item.clientTitle}</p>
                </div>
                <div style="display: flex; flex-wrap: nowrap; gap: 4px; width:50px">
                  <div class="music-info">
                    <div
                      class="progress-container progress-range${item.clientId}
                      id="progress-container_${item.clientId}
                    >
                      <div
                        class="progress progress-bar_${item.clientId}"
                        id="progress1_${item.clientId}"
                      ></div>
                      <div
                        class="progress progress-bar_${item.clientId}"
                        id="progress2_${item.clientId}"
                      ></div>
                      <div
                        class="progress progress-bar_${item.clientId}"
                        id="progress3_${item.clientId}"
                      ></div>
                      <div
                        class="progress progress-bar_${item.clientId}"
                        id="progress4_${item.clientId}"
                      ></div>
                      <div
                        class="progress progress-bar_${item.clientId}"
                        id="progress5_${item.clientId}"
                      ></div>
                    </div>
                  </div>
                  <div class="time">
                    <span class="player__time time-elapsed_${item.clientId}">
                      ${item.time}
                    </span>
                  </div>
                </div>
              </div>
              <div class="testimonials-subtitlesBtn">
                <button
                  type="button"
                  title="swithSubtitle"
                  class="switchSubtitleBtn switchSubtitleBtn_${item.clientId} player__text"
                  data-count="switchSubtitleBtn_${item.clientId}"
                >
                  <svg class="player__icon" width="10" height="10">
                    <use href="${sprite}#arrow-right2"></use>
                  </svg>
                  A
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="subtitle-container">
          <div
            class="testimonials-subtitles testimonials-subtitles_${item.clientId}"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos eaque ut autem ad unde. Repellat delectus, sed quo,
              accusantium ad recusandae inventore illum fuga est, provident
              obcaecati molestiae fugit et.
            </p>
          </div>
        </div>
      </li>
  `;
  });

  wrap.innerHTML = listOfRewiers;
}

addClientsRewiers();
