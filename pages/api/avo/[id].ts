import {NextApiRequest, NextApiResponse} from 'next';
import Db from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new Db()

    const id = request.query.id

    const entry = await db.getById(`${id}`)
    response.statusCode = 200
    response.setHeader('Content-type', 'application-json')
    response.end(JSON.stringify({data: entry}))
}

export default allAvos