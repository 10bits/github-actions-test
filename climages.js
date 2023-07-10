inputs = env.get("URL")
pp(inputs)
urls = inputs.match(/https:\/\/[^:]+.html/g)
pp(urls)
for (let url of urls) {
  let aR = ajax({ url }).aR()
  let title = aR.getString("title@text")
  let result = aR.getString("class.tpc_cont@img@ess-data")
  pp(title)
  pp(result)
  title=title.replace("?","？")
  let output_dir=`/opt/catvod/output/"${title}"`
  shell.run(`mkdir -p ${output_dir}`)
  saveFile(`/opt/urls.txt`, result)
  shell.run(`wget -i /opt/urls.txt -U "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36" -P ${output_dir}`)
  shell.run(`zip -rj -0 /opt/catvod/output/"${title}".zip ${output_dir}`)
  shell.run(`rm -rf ${output_dir}`)
  shell.run("rm /opt/urls.txt")
  
}
shell.run(`echo "UPLOAD_NAME=CLImages" >> $GITHUB_ENV`)
