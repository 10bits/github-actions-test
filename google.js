query = env.get("QUERY")
pp(query)
if (query.trim() != "") {
    res = ajax({ url: `https://www.google.com/search?q=${query}&hl=en&num=22&start=0` })
    aR = res.aR()
    saveFile("/opt/catvod/output/res.html", res.html())
    title = "google"
    shell.run(`echo "UPLOAD_NAME=${title}" >> $GITHUB_ENV`)
    eles = aR.getElements("class.g")
    for (let ele of eles) {
        aR.setContent(ele)
        pp(aR.getString("h3@text"))
        pp(aR.getString("a@href"))
    }
}
