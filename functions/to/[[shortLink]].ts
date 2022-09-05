import shortlinksModule from "../shortlinks.json"

const shortlinks = shortlinksModule as { [k: string]: string }

export async function onRequestGet({next, params}: EventContext<any, string, any>) {
  const shortLinkRaw = params["shortLink"]
  const shortLink = Array.isArray(shortLinkRaw) ? shortLinkRaw.join("/") : shortLinkRaw
  const redirectUrl = shortlinks && shortLink && shortlinks[shortLink]
  if (!redirectUrl) {
    return await next()
  }
  return Response.redirect(redirectUrl)
}
