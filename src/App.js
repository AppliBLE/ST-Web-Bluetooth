// ******************************************************************************
// * @file    App.js
// * @author  MCD Application Team
// *
//  ******************************************************************************
//  * @attention
//  *
//  * Copyright (c) 2022-2023 STMicroelectronics.
//  * All rights reserved.
//  *
//  * This software is licensed under terms that can be found in the LICENSE file
//  * in the root directory of this software component.
//  * If no LICENSE file comes with this software, it is provided AS-IS.
//  *
//  ******************************************************************************
import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';



const App = () => {




  return (
    <BrowserRouter>
      <div>
        <Header ></Header>
          
      </div>
    </BrowserRouter>
    

  );
}

export default App;