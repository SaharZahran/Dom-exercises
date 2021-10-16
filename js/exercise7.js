const list = document.querySelector('ul');
const song_name = document.getElementById('songTextInput');
const add_song_btn = document.getElementById('addButton');

add_song_btn.addEventListener('click', addSong);

function addSong() {
    const song = document.createElement('li');
    list.appendChild(song);
    const name = document.createElement('p');
    name.textContent = song_name.value;
    song.appendChild(name);
    const delete_song = document.createElement('button');
    delete_song.textContent = 'Delete Song';
    song.appendChild(delete_song);
    song_name.value = null;
    const delete_buttons = document.querySelectorAll('button');
    delete_buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        })
    })
}
//Exercise #7b (9): Advanced playlist
//Extend the previous exercise such that songs can be removed too.Add a delete link or icon to each song;
//clicking the link / icon should remove the song from the list.