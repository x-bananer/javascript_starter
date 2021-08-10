function getVowels(stringParam){
    const vowels = ["у", "е", "а", "о", "э", "ё", "я", "и", "ю"];

    const result = stringParam.toLowerCase().split('').filter(function(letter){
        return vowels.includes(letter);
    })

    return result.join('');
};

const stringArg = "Привет! Как дела?";

console.log(getVowels(stringArg));
