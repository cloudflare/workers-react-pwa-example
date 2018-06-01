import moment from 'moment'
import 'moment-timezone'

export async function handleRequest(request) {
  const time = moment(new Date)
  const url = new URL(request.url)

  let timezone = url.searchParams.get("tz")
  if (!timezone) {
    timezone = "America/Los_Angeles"
  }

  return new Response(time.tz(timezone).format())
}
