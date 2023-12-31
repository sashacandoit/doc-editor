import { v4 as uuid } from 'uuid';

const employmentContractFields = {
    title: "Employment Contract",
    words: [
        { word: 'name1', label: 'Name:', value: '', placeholder: 'Prancer, Tom, etc.', id: uuid() },
        { word: 'name2', label: 'Name:', value: '', placeholder: 'Comet, Penelope, etc.', id: uuid() },
        { word: 'name3', label: 'Name:', value: '', placeholder: 'Cupid, Max, etc.', id: uuid() },
        { word: 'name4', label: 'Name:', value: '', placeholder: 'Donner, Ronda, etc.', id: uuid() },
        { word: 'adjective1', label: 'Adjective:', value: '', placeholder: 'famous, cranky, etc.', id: uuid() },
        { word: 'color', label: 'Color:', value: '', placeholder: 'red, tangerine, etc.', id: uuid() },
        { word: 'adjective2', label: 'Adjective:', value: '', placeholder: 'shiny, confusing, etc.', id: uuid() },
        { word: 'verb1', label: 'Verb:', value: '', placeholder: 'laugh, sleep, etc.', id: uuid() },
        { word: 'verb2', label: 'Verb:', value: '', placeholder: 'play, dance, etc.', id: uuid() },
        { word: 'adjective3', label: 'Adjective:', value: '', placeholder: 'foggy, happy, etc.', id: uuid() },
        { word: 'holiday', label: 'Holiday:', value: '', placeholder: 'Christmas, Cinco de Mayo, etc.', id: uuid() },
        { word: 'verb3', label: 'Verb:', value: '', placeholder: 'guide, clean, etc.', id: uuid() },
        { word: 'noun', label: 'Noun:', value: '', placeholder: 'sleigh, toothbrush, etc', id: uuid() },
        { word: 'verb4', label: 'Verb:', value: '', placeholder: 'Past Tense - loved, tickled, etc', id: uuid() },
        { word: 'verb5', label: 'Verb:', value: '', placeholder: 'Past Tense - shouted, slept, etc', id: uuid() },
        { word: 'color', label: 'Color:', value: '', placeholder: 'same color as before!', id: uuid() }
    ]
    
}

export { employmentContractFields };