strany=["italy", "france", "switzerland","hungary","romania",
  "japan","afghanistan","india","brazilia","canada",
"argentina","kolumbia","england","mexico"]
  
  function makeTableFromCountry (num,i){
    let div = "<div "+"id="+'"'+strany[i]+'"'+"class="+'"bg"'+" >";
    let tab = "<table width=100%>";
    let tr = "<tr>";
    let td = "<td>";
    let h1 = "<h1>";
    let tab1 = "<table width=75%>"
    tab += '<div style="text-align: center; background: #b4b6c2">' + "<h1>" + countries[i][0] + "-" + countries[i][1] + "</h1>" + "</div>";
    tab += tr;
    for (let i=2;i<6;i++)
    {
        tr="<tr>";
        td="<td>";
        let txt1=about[i];
        let txt2=num[i];
        td+=txt1;
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
    for(let k = 6; k < 7; k++){
            tab += "<tr>"
            tab += "<td>" + about[k] + "</td>"
            tab += "<td>"
            let arr = countries[i][k].map((num, ii)=>{
                return "<div>" + (ii + 1) + " " + num + "</div>"
            }) 
            arr = arr.join(" ")
            tab += arr + "</td>"
        }
    tr='<tr id="col">';
    for(let k = 7; k < about.length; k++){
            tab += "<tr>"
            if (k < about.length - 1) {
                tab += "<td>" + about[k] + "</td>"
                tab += "<td>"
                let l = countries[i][k].map((num, ii)=>{
                    let p = num.map((n)=>{
                        return n
                    })
                    p = p.join(" ")
                    return "<div>" + (ii + 1) + " " + p + "</div>"
                }) 
                l = l.join(" ")
                tab += l + "</td>"
            }
            else {
                tab += "</table>";
                tab += '<div style="text-align: center; font-weight: bold">' + about[k] + "</div>"
                tab += '<table width="100%" border="1">';
                tab += "<tr>"
                for (var key in countries[i][k]) {
                    tab += "<td>" + key + ":" + countries[i][k][key] + "</td>"
                }
                tab += "</tr>";
                tab += "</table>";
            }
            tab += "</tr>";
        }
    tab+="</table>";
    div+=tab;
    div+="</div>";
    return div;
}
var my_per=countries.map((num,i)=>{return makeTableFromCountry(num,i)});

my_per.forEach(function(info, i, arr) {
    document.write(info);
    document.write("<br>");
})