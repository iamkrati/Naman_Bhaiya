fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=3&page=1&sparkline=false').
then(response=>
{
  return response.json();
}).then(data=>{
  let html="";
    data.forEach(d=>
      {
        console.log(d.name);
        let h=`<p> ${d.name}</p>`;
        html+=h;
      });
    document.body.innerHTML=html;
})
.catch(error=>{
    console.log(error);
});