query = env.get("QUERY")
pp(query)
if (query.trim() == "") {
    return
}
aR = ajax({ url: `https://www.google.com/search?q=${query}&hl=en&num=22&start=0` }).aR()
eles = aR.getElements("class.g")
for (let ele of eles) {
    aR.setContent(ele)
    pp(aR.getString("h3@text"))
    pp(aR.getString("a@href"))
}