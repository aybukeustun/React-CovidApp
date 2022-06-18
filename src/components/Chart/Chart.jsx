import React, { useState, useEffect } from 'react';
import axios from "axios";
import Plot from 'react-plotly.js';


  
export default function Chart({data:country}){

  console.log(country);
  

  var allDates = [];
  var allActives = [];
  var allConfirmeds = [];
  var allDeaths = [];
  var changeableUrl = `https://api.covid19api.com/total/dayone/country/${country}`;
  
  var [dates, getDates] = useState([]);
  var [actives, getActives] = useState([]);
  var [confirmeds, getConfirmeds] = useState([]);
  var [deaths, getDeaths] = useState([]);

 
 
  useEffect(()=>{
    axios.get(changeableUrl,{
      "auth":{
        "username": "corona",
        "password": "ZUav4vawzCfMcMXHV8B"
      }
    })
    .then((res)=>{
        var temp = res.data;

        for(var item of temp){
          allDates.push(item.Date);
          allActives.push(item.Active);
          allConfirmeds.push(item.Confirmed);
          allDeaths.push(item.Deaths);
        }

        var _dates=allDates.reverse().slice(0,7);
        getDates(_dates);

        var _actives=allActives.reverse().slice(0,7);
        getActives(_actives);

        var _confirmeds=allConfirmeds.reverse().slice(0,7);
        getConfirmeds(_confirmeds);

        var _deaths=allDeaths.reverse().slice(0,7);
        getDeaths(_deaths);

        console.log(_dates);
      })
      
      
    .catch(e=>{
      console.log(e)});
  })

  return(
    <div>
      <Plot
        data={[
          {
            x: dates,
            y: confirmeds,
            mode: 'lines',
            name:'confirmed cases',
            line:{
              color: "rgba(0, 0, 0)",
              size: 8
            }
          },
          {
            x: dates,
            y: actives,
            mode: 'lines',
            name:'active cases',
            line:{
              color: "rgba(10, 85, 10, 0.5)",
              size: 8
            }}
    
          
      ]}
      layout={
        
          {title:'Active and Confirmed Cases',
            xaxis: {
            autorange: true, 
            title: 'Date', 
            type: 'date'
        }, 
        yaxis: {
            autorange: true, 
            range: [50, 60], 
            type: 'linear'
        }}
      }
    />

<Plot
        data={[
          {
            x: dates,
            y: deaths,
            mode: 'lines',
            line:{
              color: "rgba(231, 12, 12, 0.89)",
              size: 8
            }
          }
        ]}
        layout={
            {title:'Deaths',
              
              xaxis: {
              autorange: true, 
              title: 'Date', 
              type: 'date'
          }, 
          yaxis: {
              autorange: true, 
              range: [50, 60], 
              type: 'linear'
          }}
        }
        />
    </div>
  )
}
