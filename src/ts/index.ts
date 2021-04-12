import 'css/null.scss'

import { init, start } from 'ts/components/logo'

const canvasDiv = document.getElementById('logo-placement') as HTMLDivElement

init(canvasDiv)
start()
