url = `https://www.sehuatang.org/`
aR = ajax({ url }).aR()
pp(aR.getString("title@text"))
pp(aR.getString("a"))