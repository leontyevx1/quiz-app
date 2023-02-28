const questions = [
    {
        title: 'React - это ... ?',
        variants: ['Библиотека',
            'Фреймворк',
            'Приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['Приложение',
            'Часть приложения или страницы',
            'С таким не сталкивался(ась)'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код'],
        correct: 2,
    },
    {
        title: 'Могут ли браузеры читать JSX?',
        variants: [
            'Да, могут',
            'Некоторые могут',
            'Не могут'],
        correct: 2,
    },
    {
        title: 'Что делает хук setState?',
        variants: [
            'Хранит локальный state',
            'Перестраивает приложение и обновляет DOM',
            'Позволяет управлять side-эффектами'],
        correct: 1,
    },
    {
        title: 'Что такое Redux?',
        variants: [
            'Стейт менеджер для JS-приложений',
            'Библиотека стилей',
            'Язык программирования'
        ],
        correct: 0,
    },
    {
        title: 'Что описывает Action?',
        variants: [
            'Ничего не описывает',
            'Как будет работать слушатель событий',
            'То, что нужно изменить в состоянии'
        ],
        correct: 2,
    },
    {
        title: 'Что такое синтетическое событие в React?',
        variants: [
            'То же самое, что нативное событие',
            'Такого события в React не существует',
            'Обёртка над нативным событием'
        ],
        correct: 2,
    },
    {
        title: 'Что вызывает обновление функционального компонента?',
        variants: [
            'Изменение состояния',
            'Изменение props',
            'Изменение состояния и изменение props'
        ],
        correct: 2,
    },
    {
        title: 'Что обозначает абревиатура DOM?',
        variants: [
            'Document Object Module',
            'Doctype Oriented Mind',
            'Drink Olmeca Morning'
        ],
        correct: 0,
    },
];

export default questions;