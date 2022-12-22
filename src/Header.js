// ******************************************************************************
// * @file    Header.js
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

import React, { useState } from "react";
import logoST from './images/st-logo.svg';


const Header = (props) => {

    return (
        <div className="container-fluid" id="header">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <img className="logoST" src={logoST}></img>
                    </div>
                </div>
            </div>
        </div>        
    );
}; 

export default Header;