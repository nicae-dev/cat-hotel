const videoroomList = document.querySelector('#videoroom-list');

const windowWidth = window.innerWidth;
const videoroomCount = windowWidth < 1600 ? 9 : 17;
const videorooms = generateRooms(videoroomCount);

videorooms.forEach((room)=>{
  const elemItem = document.createElement('li');
  elemItem.classList.add('videoroom__item');

  const elemLink = document.createElement('a');
  elemLink.href = room.link;
  elemLink.classList.add('videoroom__button');
  elemLink.innerHTML = `<span class="visually-hidden">Выбрать комнату </span>${room.name}`;
  elemItem.appendChild(elemLink);

  videoroomList.appendChild(elemItem);
});

function generateRooms(count) {
  const rooms = Array.from({length: count}, (_, i) => ({name: i + 1, link: '#!'}));
  return rooms;
}
