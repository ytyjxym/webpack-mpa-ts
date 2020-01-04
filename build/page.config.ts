const configArr:ConfigArrType = [
    'home',
    'ahaha',
    'user'
]

let config:Config = {}

configArr.forEach( (page) => config[page as keyof pageConfig] = `./src/${page}/index` )

export default config