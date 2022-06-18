import axios from 'axios';

const url1='https://api.covid19api.com/total/dayone';
const url2= 'https://covid19.mathdro.id/api';

var datas = [];
var chartData1 = [];
var chartData = [];
var cardData =[];
var tempCard=[];
var tempChart=[];

export const fetchData = async (country) => {
  let changeableUrl = url1;

    changeableUrl = `${url1}/country/${country}`;
  
    await axios.get(changeableUrl, {
      "auth":{
        "username": "corona",
        "password": "ZUav4vawzCfMcMXHV8B"
      }
    }).then(response => {
        datas=response;
        response.data.forEach((res,idx)=>{
        chartData1.push({
            confirmed:res.Confirmed,
            active:res.Active,  
            deaths:res.Deaths,
            date:res.Date
          })
        })
    })

    .catch(e=>{
      console.log(e)
 })
 var temp=datas.data.length;
 var chartData = chartData1.reverse();
 return(chartData);
}

export const fetchCard = async (country) => {
  let changeableUrl = url1;

    changeableUrl = `${url1}/country/${country}`;
  
    await axios.get(changeableUrl, {
      "auth":{
        "username": "corona",
        "password": "ZUav4vawzCfMcMXHV8B"
      }
    }).then(response => {
      response.data.forEach((res,idx)=>{
      tempCard.push({
          id:idx,
          confirmed:res.Confirmed,
          active:res.Active,  
          deaths:res.Deaths,
          lastUpdate:res.Date
        })
      });
  })

    .catch(e=>{
      console.log(e)
 })
 cardData=tempCard.reverse();
 return(cardData[0])
}

export const fetchChart = async (country) => {
  let changeableUrl = url1;

    changeableUrl = `${url1}/country/${country}`;
  
    await axios.get(changeableUrl, {
      "auth":{
        "username": "corona",
        "password": "ZUav4vawzCfMcMXHV8B"
      }
    }).then(response => {
      response.data.forEach((res,idx)=>{
      tempChart.push({
          id:idx,
          confirmed:res.Confirmed,
          active:res.Active,  
          deaths:res.Deaths,
          date:res.Date
        })
      });
  })

    .catch(e=>{
      console.log(e)
 })
 chartData=tempChart.reverse().slice(0,7);
 return(chartData)
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url2}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
