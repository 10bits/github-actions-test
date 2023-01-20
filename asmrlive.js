pp(env.get("ASMR_URL"))
aR = ajax({ url: env.get("ASMR_URL"), baseUrl: "https://asmrs.live" }).aR()
title = aR.getString(`title@text##【音】\[步非烟ASMR\]|在线播放|.mp3##`)
pp(title)
js1 = aR.getString("##var token.*##$0###")
js2 = aR.getString("##var m3u8.*##$0###")
m3u8 = aR.getString("@js:" + js1 + js2 + "m3u8 = m3u8+'?token='+token;m3u8", true)
pp(m3u8)
download = env.get("DOWNLOAD")
if (m3u8 && download == "yes") {
    shell.run("ffmpeg", "-i", m3u8, `/opt/catvod/output/${title}.mp3`)
    shell.run("echo", `UPLOAD_NAME=${title}`, ">>", "$GITHUB_ENV")
}