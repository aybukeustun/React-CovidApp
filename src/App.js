import React from 'react';
import styles from './App.module.css';
import { fetchChart, fetchCountries, fetchData } from './api/service';
import { fetchCard } from './api/service';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';


class App extends React.Component {
  state = {
    data1: [],
    data2:[],
    data3:'',
    country: '',
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedCard = await fetchCard(country);
    const fetchedChart = await fetchChart(country);
    const pickedCountry = country;
    const fetchedCountries=await fetchCountries();
    this.setState({ data1:fetchedCard, country: fetchedCountries,data2:fetchedChart,data3:pickedCountry});
    
  }
  render() {
    const {data1,data2,country,data3} = this.state;
  return (
    <div className={styles.container}>
      <Cards data={data1}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data3} />
      

    </div>
  );
  }
}

export default App;
