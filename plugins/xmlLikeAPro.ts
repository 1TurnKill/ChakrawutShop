import xml from 'xml-js'
import { Plugin } from 'vite'

export default function xmlLikeAPro(): Plugin {
    return {
        name: "xmlLikeAPro",
        transform(code, id) {
            if (/\.xml$/.test(id)) {
                const content = xml.xml2json(code,{compact:true,spaces:4})
                return { code: `export default ${content}`, map: { mappings: "" } }
            }
        },
    }
}