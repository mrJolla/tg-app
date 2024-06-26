import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useTelegram} from "./use-telegram.ts";

function App() {
    const {tg} = useTelegram()

    const handleButtonClick = () => {
        tg.sendData(JSON.stringify({
            initDataUnsafe: tg.initDataUnsafe,
        }))
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleButtonClick}>
                    Отправить данные
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
