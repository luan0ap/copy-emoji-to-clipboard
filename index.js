import { emojis } from './emojis.js'

function EmojiComponent ({ unicode, title } = {}) {
  return (`
    <span class="emoji" title="${title}" data-unicode="${unicode}">
      ${unicode}
    </span>
  `)
}

function renderContentData () {
  const $emojiContainer = document.querySelector('#emojis')

  $emojiContainer.innerHTML = emojis.map(EmojiComponent).join('')

  $emojiContainer.addEventListener('click', (event) => {
    if (event.target?.dataset?.unicode) {
      navigator.clipboard.writeText(event.target.dataset.unicode)
    }
  })
}

window.addEventListener('load', () => {
  renderContentData()
})