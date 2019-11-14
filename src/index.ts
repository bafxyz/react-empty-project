import Mount from '~/core/Mount'

const root = document.querySelector('#root')

if (root instanceof HTMLElement) {
    Mount(root)
} else {
    console.info('#root element is missing')
}
