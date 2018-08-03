import React from 'react'
import Codepen from 'react-codepen-embed'

import '../slides.css'

import presentation from './assets/presentation.jpg'
import oldTest from './assets/avpm-44293.png'
import logo from './assets/rise_vector.svg'
import penguin from './assets/private.png'

export default [
    {
        id: 'start',
        className: 'slide full',
        data: {
            x: -2000,
            y: -1500,
            zoom: 13
        },
        content: [
            <img src={presentation} width='100%' height='100%' />
        ]
    },
    {
        id: 'rise.private',
        className: 'slide no-overflow',
        data: {
            x: -1000,
            y: -1500
        },
        content: [
            <q>
                <h1 style={{ marginBottom: 20 }}>rise.private demo</h1>
                <h5>23.07–06.08</h5>
                <h5>«Выпил и запил»</h5>
                <img src={logo} className='logo' />
                <div style={{
                    background: `url(${penguin}) center center no-repeat`,
                    backgroundSize: 'cover',
                    width: 735,
                    height: 420,
                    position: 'absolute',
                    bottom: -248,
                    right: -382
                }} />
            </q>
        ]
    },
    {
        id: 'goal',
        className: 'slide',
        data: {
            x: 0,
            y: -1500
        },
        content: [
            <q>
                <h1>Цель спринта 🎯</h1>
                <p style={{ marginTop: 100 }}>Блок VAS на подаче в виде карточек</p>
            </q>
        ]
    },
    {
        id: 'hooray',
        data: {
            x: 1000,
            y: -1500
        },
        content: [
            <q>
                <h1>🎉</h1>
            </q>
        ]
    },

    {
        id: 'done',
        className: 'slide',
        data: {
            x: 2000,
            y: -1500
        },
        content: [
            <q>
                <h1>Что мы наделали</h1>
            </q>
        ]
    },
    {
        id: 'api',
        data: {
            x: 4000,
            y: 3000,
            rotateZ: 30,
            scale: 6
        },
        content: [
            <h2>Добили API триггерной скидки</h2>
        ]
    },
    {
        id: 'api-explain',
        data: {
            x: 0,
            y: 10000,
            rotateZ: 30,
            scale: 6
        },
        content: [
            <h6><i>и тем самым</i></h6>,
            <p>разблокировали тестирование триггерной скидки на приложениях</p>
        ]
    },
    {
        id: 'db',
        data: {
            x: 16000,
            y: 3000,
            rotateZ: 30,
            scale: 6
        },
        content: [
            <h3>Полностью переехали на получение цен<br />из сервиса скидок</h3>
        ]
    },
    {
        id: 'db-explain',
        data: {
            x: 12000,
            y: 10000,
            rotateZ: 30,
            scale: 6
        },
        content: [
            <h6><i>и тем самым</i></h6>,
            <p>отвязались от базы (Domofond и XL)</p>
        ]
    },
    {
        id: 'do',
        data: {
            x: 28000,
            y: 3000,
            rotateZ: 30,
            scale: 6
        },
        content: [
            <h4 style={{ marginBottom: 50 }}>Выпилили страницу /do 🍾</h4>,
            <img src='https://media.giphy.com/media/l4JySAWfMaY7w88sU/source.gif' width='100%' />
        ]
    },
    {
        id: 'bugs',
        data: {
            x: 40000,
            y: 3000,
            rotateZ: 30,
            scale: 6
        },
        content: [
            <h4 style={{ marginBottom: 50 }}>Пофиксили больше багов, чем сделали</h4>,
            <img src='https://media.giphy.com/media/XoznHIHQpZOuc/giphy.gif' width='100%' />
        ]
    },
    {
        id: 'one-more-thing',
        data: {
            x: 16200,
            y: 14300,
            scale: 2
        },
        content: [
            <q>One more thing...</q>
        ]
    },
    {
        id: 'year-ago',
        data: {
            x: 20000,
            y: 14300,
            scale: 2
        },
        content: [
            <q>
                <h1>Год назад</h1>
                <p style={{ marginTop: 100 }}>мы делали тест на подаче</p>
            </q>
        ]
    },
    {
        id: 'wat-55',
        data: {
            x: 24000,
            y: 14300,
            scale: 2
        },
        content: [
            <q>
                <h1>55</h1>
            </q>
        ]
    },
    {
        id: 'old-task',
        className: 'slide full',
        data: {
            x: 28000,
            y: 14300,
            scale: 2
        },
        content: [
            <img src={oldTest} style={{ width: '100%' }} />
        ]
    },
    {
        id: 'wat-335',
        data: {
            x: 32000,
            y: 14300,
            scale: 2
        },
        content: [
            <q>
                <h1>3 часа 35 минут<br />💺</h1>
            </q>
        ]
    },
    {
        id: 'chart',
        data: {
            x: 36000,
            y: 14300,
            scale: 2
        },
        content: [
            <q>
                <Codepen hash='MBGBEp' user='some_vlad' height={900} defaultTab='result' preview={false} />
            </q>
        ]
    },
    {
        id: 'demo',
        data: {
            x: 40000,
            y: 14300,
            scale: 2
        },
        content: [
            <q>
                <h1>Demo</h1>
            </q>
        ]
    },
    {
        id: 'thanks',
        data: {
            x: 44000,
            y: 14300,
            scale: 2
        },
        content: [
            <q>
                <div>Спасибо за внимание</div>
                <img style={{ marginTop: 50 }} src="https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif"
                     width='100%' />
            </q>
        ]
    }
]
