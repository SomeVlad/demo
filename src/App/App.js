import React, { Component } from 'react'
import { Impress, Step } from 'react-impressjs'
import 'react-impressjs/styles/react-impressjs.css'
import './App.css'
import demo from '../slides/3-08-2018/data.js'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Impress progress hint={false}>
                    {
                        demo.map(({ id, className, data, content }, index) => {
                            return (
                                React.createElement(Step, {
                                        id,
                                        className,
                                        data,
                                        key: index
                                    },
                                    content.map((child, index) => {
                                        return (
                                            React.cloneElement(child, {
                                                id: child.id,
                                                className: child.className,
                                                key: index
                                            })
                                        )
                                    }))

                            )
                        })
                    }
                </Impress>
            </div>
        )
    }
}

export default App
