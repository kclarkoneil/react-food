import axios from 'axios'

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization: 'Bearer FEsfLZEv5Q7zlOP26VtxcTl7si0JG-OnsYDq0WZFz3_2Imlw_0POtmbj_7nPr1K0_Q1OUhDEMt3PiOv-Oor7ej5Jh_qO5O1aDFIQT9VCdvmZJ8F8l0LgBQD4N1ouYnYx'
}
})