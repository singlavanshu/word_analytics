const textarea = document.querySelector('.textarea');
const charactersNumber = document.querySelector('.stat__number--characters');
const wordsNumber = document.querySelector('.stat__number--words');
const twitterNumber = document.querySelector('.stat__number--twitters');
const facebookNumber = document.querySelector('.stat__number--facebook');

const eventHandler = () => {
    if(textarea.value.includes('<script>'))
    {
        alert('You can\'t use <script> in your text');
        textarea.value = textarea.value.replace('<script>','');
    }
    let numberOfCharacters = textarea.value.length;
    
    let twitterCharactersLeft = 280 - numberOfCharacters;
    let facebookCharactersLeft = 2200 - numberOfCharacters;
    let numberOfWords = textarea.value.split(' ').length;
    if(textarea.value.length === 0)
    {
        numberOfWords = 0;
        twitterCharactersLeft = 0;
        facebookCharactersLeft = 0;
        numberOfCharacters = 0;
    } 
    if(twitterCharactersLeft<0)
    {
        twitterNumber.classList.add('stat__number--limit');
    }
    else 
    {
        twitterNumber.classList.remove('stat__number--limit');
    }
    if(facebookCharactersLeft<0)
    {
        facebookNumber.classList.add('stat__number--limit');
    }
    else 
    {
        facebookNumber.classList.remove('stat__number--limit');
    }
    charactersNumber.textContent = numberOfCharacters;
    twitterNumber.textContent = twitterCharactersLeft;
    facebookNumber.textContent = facebookCharactersLeft;
    wordsNumber.textContent = numberOfWords;
}

textarea.addEventListener('input',eventHandler);
