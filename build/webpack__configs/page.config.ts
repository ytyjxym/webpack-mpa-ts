import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
// 多页type
interface pageConfig {
    home:string  | Array<string>,
    ahaha:string  | Array<string>,
    user:string  | Array<string>
}

const htmlConfig = new HtmlWebpackPlugin()
type Htmls = Array<typeof htmlConfig>

type Config = Partial<pageConfig>
type ConfigArrType = Array<keyof pageConfig>

// main
const configArr:ConfigArrType = [
    'home',
    'ahaha',
    'user',
]

let config:Config = {}
let htmls:Htmls = []
configArr.forEach( (page) => {
    config[page as keyof pageConfig] = path.resolve(__dirname, '../../', `./src/apps/${page}/index.tsx`) 
    htmls.push(new HtmlWebpackPlugin({
        template:path.resolve(__dirname, "../../", `./public/template/${page}.template.html`),
        filename:`${page}.html`,
        chunks:[page]
    }))
})

export default {config, htmls}