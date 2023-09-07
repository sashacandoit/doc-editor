import { v4 as uuid } from 'uuid';

const employmentContractFields = {
    title: "Rudolph the MadLibbed Reindeer",
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
    ],
    // song: [
    //     `You know Dasher and Dancer and `, `___`, ' and Vixen,',
    //     `___`, ' and ', `___`, ' and ', `___`, ' and ', 'Blitzen',
    //     'But do you recall,',
    //     'The most ', `___`, ' reindeer of all?',
    //     'Rudolph the', `___`, '-nosed reindeer',
    //     'Had a very ', `___`, 'nose,',
    //     'And if you ever ', `___`, 'it,',
    //     'You would even say it ', `___`, '.',
    //     'All of the other reindeer',
    //     'used to ', `___`, ' and call him names',
    //     'They never let poor Rudolph',
    //     `___`, ' in any reindeer games.',
    //     'Then one ', `___`, ' ', `___`,
    //     'Santa came to say,',
    //     `"Rudolph with your nose so `, `___`, ',',
    //     `Won't you `, '___', ' my ', `___` `tonight?"`,
    //     'then how the reindeer ', `___`, 'him,',
    //     'As they ', `___`, ' out with glee,',
    //     `"Rudolph the `, `___`, '-nosed reindeer,',
    //     `You'll go down in history!"`
    // ]
}

export { employmentContractFields };