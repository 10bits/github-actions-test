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
  let output_dir=`/opt/catvod/output/"${title}"`
  shell.run(`mkdir -p ${output_dir}`)
  saveFile(`${output_dir}/urls.txt`, result)
  shell.run(`wget -i ${output_dir}/urls.txt -P ${output_dir}`)
}
shell.run(`echo "UPLOAD_NAME=CLImages" >> $GITHUB_ENV`)
