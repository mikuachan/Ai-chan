import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'πΆππππ', wm, json.result.female,[['NEXT', `/${command}`]], m)
conn.sendButton(m.chat, 'π±ππ’π', wm, json.result.male, [['\nAh.. gw jadi pengen ngegay jir', `/bilek`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
