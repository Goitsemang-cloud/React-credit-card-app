import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Card.css';



import Select from '@mui/material/Select'
import MenuItem from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

/* 
npm i react-credit-cards
npm install @mui/material
npm install @mui/material @emotion/react @emotion/styled
npm install --save styled-components
*/

export default function App() {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setfocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState({
    Month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    year: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
  });
  const handleInputFocus = (e) => {
    setfocus(e.target.name);
  }

  useEffect(() => {
    if (number.length === 16) {
      const cardNumber = number;
      const placeholder = '********';
      const newcardNumber = cardNumber.slice(0, 4) + placeholder + cardNumber.slice(12, 16);
      setNumber(newcardNumber);
    }
  }, [number])

  const handleSumbmit = () => {
    if (number !== '') {
      alert('credit card details have been captured successfully')
    }
  }
  return (
    <div>
      <div class="container" id="PaymentForm">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <div class="container">
          <form >
            <label for="fname">Card holder name</label>
            <input type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              maxlength="20"
              onChange={(e) => setName(e.target.value)}
              onFocus={handleInputFocus} />

            <label for="lname">credit card Number</label>
            <input type="text"
              id="lname" name="lastname"
              placeholder="card Number"
              maxlength="16"
              onChange={(e) => setNumber(e.target.value)}
              onFocus={handleInputFocus}
            />

            <div class="grid-container">
              <div class="grid-item">

                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="MONTH"
                  onChange={(e) => setExpiry(e.target.value)}
                >
                  {
                    date['Month'].map((number) => (<MenuItem value={number}>{number}</MenuItem >))
                  }
                </Select>
              </div>

              <div class="grid-item">
                <InputLabel id="demo-simple-select-label">year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="YEAR"
                  onChange={(e) => setExpiry(expiry + e.target.value)}
                >
                  {date["year"].map((year) => (
                    <MenuItem value={year}>{year}</MenuItem >))
                  }
                </Select>
              </div>

              <div class="grid-item">
                <InputLabel id="demo-simple-select-label">CVV</InputLabel>
                <TextField
                  label="CVC"
                  name="cvc"
                  size="small"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 3 }}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>

            <br />
            <input type="Submit" value="Submit" onClick={handleSumbmit} />
          </form>
        </div>

      </div>

    </div>
  )
}
